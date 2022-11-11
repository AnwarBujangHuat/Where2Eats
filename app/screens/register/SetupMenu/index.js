import React, {
  useEffect,
  useState
} from 'react';
import { Alert } from 'react-native';
import { ConstString } from '../../../Strings';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  addFoodItemFirebase,
  AddOne,
  removeFoodItemFirebase,
  updateFoodItemFirebase
} from '../../../store/thunks';
import { menuCategories } from '../MenuCategories';
import { firebase } from '../../../../src/firebase/config';
import { getCurrentRestaurant } from '../../../store/selector';
import { SetupMenuComponents } from './components';

export const SetupMenu = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categories = [
    { id: 1, item: ConstString.MAINDISH },
    { id: 2, item: ConstString.SIDEDISH },
    { id: 3, item: ConstString.DESSERT },
    { id: 4, item: ConstString.APPETIZER },
    { id: 5, item: ConstString.DRINKS },
  ];
  const { item, id } = route.params || {};
  const editorMode = !!id;
  let action;
  const restaurantInfo = useSelector(getCurrentRestaurant(id));
  const foodItemLists = editorMode ? [...restaurantInfo?.food] : [];
  const [selectedCategory, setSelectedCategory] = useState(categories);
  const [isModalMenuVisible, setIsModalMenuVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState({});
  const [isActionModalVisible, setActionModal] = useState(false);
  const [Category, setCategory] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(true);
  const [Menu, setMenu] = useState([]);
  useEffect(() => {
    const tempCategory = categories.filter(category => foodItemLists.find(food => food.category === category.item));
    setSelectedCategory(tempCategory);
  }, []);
  const addFoodItem = (foodItem) => {
    const temp = [...Menu, foodItem];
    setMenu(temp);
  };
  const uploadMenu = () => {
    setActionModal(true);
    action = ConstString.UPLOADING;
    uploadAsFile(item.image, 'profile').then();
    Menu.forEach(
      (foodItem, index) => {
        if (foodItem.image !== undefined) {
          uploadAsFile(foodItem.image, 'menu', foodItem.category, index, foodItem).then();
        } else {
          showAlert(foodItem.name);
        }
      }
    );
    setTimeout(() => {
      if (isSuccessful) {
        uploadFinish();
      }
    }, 5000);
  };
  const showAlert = (name) => Alert.alert(
    name + ' Was Not Found',
    'Please Make Sure Image Exist',
    [
      {
        text: 'Okay',
        onPress: () => setActionModal(false),
        style: 'cancel',
      },
    ],
  );
  const onBackButton = () => {
    if (selectedCategory.length > 0 && !editorMode) {
      setActionModal(true);
      action = ConstString.GO_BACK;
    } else {
      goBack();
    }
  };
  const goBack = () => {
    closeActionModal();
    closeModal();
    navigation.goBack({ id });
  };
  const openModal = ({ item: category }) => {
    setModalVisible(true);
    setCategory(category);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const closeActionModal = () => {
    setActionModal(false);
  };
  const menuIcon = (item) => menuCategories.find(icons => icons.item === item).icon;
  const generateId = () => {
    const id = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return id() + id();
  };
  const uploadAsFile = async(uri, folder, category, index, foodItem, progressCallback) => {
    if (uri !== undefined) {
      const response = await fetch(uri);
      const blob = await response.blob();
      let name = generateId() + 'media.jpg';
      const date = '_' + new Date().getTime();
      const restaurantName = (editorMode ? restaurantInfo.restaurant : item.restaurant) + date;
      const pathName = folder === 'profile' ? restaurantName + '/' + folder + '/' + name : restaurantName + '/' + folder + '/' + category + '/' + name;
      const metadata = {
        contentType: 'image/jpeg',
      };
      const ref = firebase.storage().ref().child(pathName);
      const task = ref.put(blob, metadata);
      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          (snapshot) => {
            progressCallback && progressCallback(snapshot.bytesTransferred / snapshot.totalBytes);
          },
          (error) => {
            setIsSuccessful(false);
            reject(error);
          },
          () => {
            task.snapshot.ref.getDownloadURL().then((fileUrl) => {
                if (folder === 'profile') {
                  item.image = fileUrl;
                } else if (folder === 'menu' && !editorMode) {
                  Menu[index].image = fileUrl;
                } else if (editorMode && folder === 'menu') {
                  foodItem.image = fileUrl;
                  dispatch(addFoodItemFirebase({ id, foodItem }));
                }
              }
            );
          }
        );
      });
    } else {
      showAlert('Missing File' + category);
    }
  };
  const uploadFinish = () => {
    item.food = Menu;
    dispatch(AddOne(item)).done();
    setActionModal(false);
    navigation.navigate(ConstString.HOME);

  };
  const showMenuDetails = (item) => {
    setSelectedFoodItem(item);
    setIsModalMenuVisible(true);
  };
  const closeMenuDetails = () => setIsModalMenuVisible(false);
  const onPressEdit = (item) => {
    setSelectedFoodItem(item);
    setCategory('');
    setModalVisible(true);
  };
  const onPressDelete = (item) => {
    const itemIndex = foodItemLists.indexOf(item);
    Alert.alert('This Cannot be UNDO!',
      'Do you wish to delete ' + item.name,
      [
        {
          text: 'Delete', onPress: async() => {
            const result = await dispatch(removeFoodItemFirebase({ id, item, itemIndex }));
            console.log(result);
          }
          , style: 'destructive'
        },
        { text: 'Cancel' },
      ],
      { cancelable: true }
    );
  };
  const updateFoodItem = async(action, newItem, reUpload) => {
    const initialFoodItem = selectedFoodItem ?? {};
    if (action === ConstString.ADD) {
      return uploadAsFile(newItem.image, 'menu', newItem.category, 0, newItem).then();
    } else {
      if (reUpload) {
        await uploadAsFile(newItem.image, 'menu', newItem.category, 0, newItem);
        await dispatch(updateFoodItemFirebase({ id, newItem, initialFoodItem }));
        return;
      }
      await dispatch(updateFoodItemFirebase({ id, newItem, initialFoodItem }));
    }
  };
  const props = {
    onBackButton,
    categories,
    selectedCategory,
    setSelectedCategory,
    menuIcon,
    openModal,
    showMenuDetails,
    editorMode,
    onPressDelete,
    onPressEdit,
    foodItemLists,
    Menu,
    uploadMenu,
    isModalVisible,
    isActionModalVisible,
    isModalMenuVisible,
    closeModal,
    addFoodItem,
    Category,
    selectedFoodItem,
    updateFoodItem,
    closeActionModal,
    goBack,
    isSuccessful,
    closeMenuDetails,
    action
  };
  return (
    <SetupMenuComponents {...props} />
  );
};
