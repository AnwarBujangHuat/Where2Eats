import React, {
  useEffect,
  useState
} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ConstString } from '../../../Strings';
import { BackButton } from '../../../components/atoms/BackButton';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import { FoodCard } from '../../../components/molecules/FoodCard';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import addIcon from '../../../assets/plus.png';
import { ModalMenu } from '../../../components/molecules/ModalMenu';
import {
  addFoodItemFirebase,
  AddOne,
  PopulateRestaurantList,
  removeFoodItemFirebase,
  updateFoodItemFirebase
} from '../../../store/thunks';
import EStyleSheet from 'react-native-extended-stylesheet';
import { menuCategories } from '../MenuCategories';
import { firebase } from '../../../../src/firebase/config';
import { ModalUploading } from '../../../components/molecules/ModalUploading';
import { getCurrentRestaurant } from '../../../store/selector';
import { ModalMenuDetails } from '../../../components/molecules/ModalMenuDetails';
export const SetupMenu = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categories = [
    { id: 1, item: ConstString.MAINDISH },
    { id: 2, item: ConstString.SIDEDISH },
    { id: 3, item: ConstString.DESSERT },
    { id: 4, item: ConstString.APPETIZER },
    { id: 5, item: ConstString.DRINKS },
  ]
  const { item, id } = route.params || {};
  const editorMode = !!id;
  let action;
  const restaurantInfo = useSelector(getCurrentRestaurant(id));
  const foodItemLists= editorMode ? [...restaurantInfo?.food] : [];
  const [selectedCategory, setSelectedCategory] = useState(categories);
  const [isModalMenuVisible, setIsModalMenuVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState({});
  const [isActionModalVisible, setActionModal] = useState(false);
  const [Category, setCategory] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(true);
  const [Menu,setMenu]=useState([])
  useEffect(()=>{
    const tempCategory = categories.filter( category => foodItemLists.find( food => food.category === category.item))
    setSelectedCategory(tempCategory)
  },[]);
  const addFoodItem=(foodItem)=>{
    const temp=[...Menu,foodItem];
    setMenu(temp)
  }
  const uploadMenu = () => {
    setActionModal(true);
    action = ConstString.UPLOADING;
    uploadAsFile(item.image, 'profile').then();
    Menu.forEach(
      (foodItem,index) => {
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
      const date="_"+new Date().getTime();
      const restaurantName=(editorMode?restaurantInfo.restaurant:item.restaurant)+date
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
                  Menu[index].image=fileUrl
                } else if (editorMode && folder === 'menu') {
                  foodItem.image = fileUrl;
                  dispatch(addFoodItemFirebase({ id, foodItem }))
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
    item.food=Menu
    dispatch(AddOne(item)).done();
    setActionModal(false);
    navigation.navigate(ConstString.HOME);

  };
  const renderItem = ({ item }) => {
    return (
      <FoodCard onPress={() => showMenuDetails(item)} name={item.name} price={item.price} desc={item.desc}
                image={item.image} editable={editorMode} onPressDelete={() => onPressDelete(item)}
                onPressEdit={() => onPressEdit(item)} />
    );
  };
  const renderMenu=(category)=>{
    return editorMode?
      foodItemLists.filter(foods => foods.category === category)
      :
      Menu.filter(foods => foods.category === category)

  }
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
          text: 'Delete', onPress: async() =>{
            const result=await dispatch(removeFoodItemFirebase({ id, item ,itemIndex }));
            console.log(result)
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
    }
    else {
      if (reUpload) {
        await uploadAsFile(newItem.image, 'menu', newItem.category, 0, newItem);
        await dispatch(updateFoodItemFirebase({ id, newItem, initialFoodItem }));
        return;
      }
      await dispatch(updateFoodItemFirebase({ id, newItem, initialFoodItem }));
    }

  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <BackButton onPress={onBackButton}></BackButton>
        <Text style={styles.title}>{ConstString.MENU_BOOK}</Text>
      </View>
      <Text style={{
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        paddingStart: 15,
        color: EStyleSheet.value('$tertiaryColor')
      }}>Add
        Category</Text>
      <View style={styles.inputContainer}>
        <SelectBox
          label="Select Menu Category"
          options={categories}
          labelStyle={styles.label}
          inputFilterStyle={styles.label}
          listEmptyLabelStyle={styles.label}
          selectedValues={selectedCategory}
          onMultiSelect={(item) => setSelectedCategory(xorBy(selectedCategory, [item], 'id'))}
          onTapClose={(item) => setSelectedCategory(xorBy(selectedCategory, [item], 'id'))}
          isMulti
          arrowIconColor={EStyleSheet.value('$primaryColor')}
          searchIconColor={EStyleSheet.value('$primaryColor')}
          toggleIconColor={EStyleSheet.value('$primaryColor')}
          multiOptionContainerStyle={{ backgroundColor: EStyleSheet.value('$primaryColor') }}
          multiOptionsLabelStyle={{ fontSize: 16, color: 'white' }}
          selectedItemStyle={{ fontSize: 16, color: EStyleSheet.value('$primaryTextColor') }}
          optionsLabelStyle={{ fontSize: 16, color: EStyleSheet.value('$primaryTextColor') }}
        />
      </View>
      <FlatList
        data={selectedCategory}
        keyExtractor={(item) => item.id}
        style={{marginTop:10}}
        renderItem={({ item }) => {
        const category = item.item
        return  (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>
              <Text style={styles.header}>{category}</Text>
              <Image style={styles.icon} source={menuIcon(category)}></Image>
              <View style={{ flexDirection: 'row', right: 5, position: 'absolute' }}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                  openModal({ item:category });
                }}>
                  <Image style={styles.addIcon} source={addIcon} />
                  <Text style={{
                    padding: 5,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>New Item</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <FlatList
                data={renderMenu(category)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}>
              </FlatList>
            </View>
          </>
        )}
      } />
      {!editorMode &&
        <TouchableOpacity
          style={styles.button}
          onPress={uploadMenu}>
          <Text style={styles.buttonText}>Finish Setup Store</Text>
        </TouchableOpacity>
      }
      {
        isModalVisible &&
        <ModalMenu isModalVisible={isModalVisible} closeModal={closeModal}
                   addFoodItem={addFoodItem} Category={Category} foodItem={selectedFoodItem}
                   updateFoodItem={updateFoodItem} editorMode={editorMode} />
      }
      {
        isActionModalVisible &&
        <ModalUploading isModalVisible={isActionModalVisible} closeModal={closeActionModal} action={action}
                        goBack={goBack} isSuccess={isSuccessful} />
      }
      {
        isModalMenuVisible &&
        <ModalMenuDetails closeModal={closeMenuDetails} isModalVisible={isModalMenuVisible}
                          foodItem={selectedFoodItem} />
      }
    </SafeAreaView>
  );
};
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backGroundColor',
  },
  label: {
    color: '$secondaryTextColor',
    fontSize: 13,
  },
  buttonContainer: {
    padding: 7,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '$primaryColor',
    borderRadius: 20,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  addIcon: {
    width: 10,
    height: 10,
    marginStart: 5,
    alignSelf: 'center',
  },
  inputContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '$primaryTextColor',
  },
  button: {
    backgroundColor: '$lightPrimaryColor',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: Dimensions.get('screen').width - 30,
    textTransform: 'uppercase',
    bottom: 30,
    position: 'absolute',
    marginHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$primaryTextColor',
    alignSelf: 'center',
    marginStart: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
  },
});
