import React, { useState } from 'react';
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
import { ConstString } from '../../Strings';
import { BackButton } from '../../components/atoms/BackButton';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import { FoodCard } from '../../components/molecules/FoodCard';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { restaurantLoading } from '../../store/reducer';
import addIcon from '../../assets/plus.png';
import { ModalMenu } from '../../components/molecules/ModalMenu';
import { AddOne } from '../../store/thunks';
import EStyleSheet from 'react-native-extended-stylesheet';
import { menuCategories } from './MenuCategories';
import { firebase } from '../../../src/firebase/config';
import { ModalUploading } from '../../components/molecules/ModalUploading';
import { getCurrentRestaurant } from '../../store/selector';

let action;
export const SetupMenu = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { item, id } = route.params || {}; //Teacher li
  const restaurantInfo=useSelector(getCurrentRestaurant(id))
  const initialRestaurantMenu=[...restaurantInfo?.food]||[]
  const categoryList = id!==undefined?initialRestaurantMenu: [
    {
      item: ConstString.MAINDISH,
      data: [],
      id: 1,
    },
    {
      item: ConstString.SIDEDISH,
      data: [],
      id: 2,
    },
    {
      item: ConstString.DESSERT,
      data: [],
      id: 3,
    },
    {
      item: ConstString.APPETIZER,
      data: [],
      id: 4,
    },
    {
      item: ConstString.DRINKS,
      data: [],
      id: 5,
    },

  ];
  const [selectedCategory, setSelectedCategory] = useState(initialRestaurantMenu);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isActionModalVisible, setActionModal] = useState(false);
  const [Category, setCategory] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(true);
  //setting Up initial Menu Items

  const addMenu = () => {
    setActionModal(true);
    action = ConstString.UPLOADING;
    let totalCount = 0;
    console.log(selectedCategory);

    // uploadAsFile(item.image, 'profile').then();
    // item.food = selectedCategory;
    // item.food.forEach(
    //   (category, categoryIndex) => {
    //     ++totalCount;
    //     category.data.forEach((foodItem, foodItemIndex) => {
    //       if (foodItem.image !== undefined) {
    //         uploadAsFile(foodItem.image, 'menu', category.item, categoryIndex, foodItemIndex).then();
    //       } else {
    //         showAlert(foodItem.name);
    //       }
    //     });
    //   }
    // );
    // setTimeout(() => {
    //   if (isSuccessful) {
    //     uploadFinish();
    //   } else {
    //     console.log(isSuccessful);
    //   }
    //
    // }, 5000);


  };
  const showAlert = (name) =>
    Alert.alert(
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
    if (selectedCategory.length > 0) {
      setActionModal(true);
      action = ConstString.GO_BACK;
    } else {
      goBack();
    }
  };
  const goBack = () => {
    closeActionModal();
    closeModal();
    navigation.navigate(ConstString.REGISTER,{id});
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
  const uploadAsFile = async(uri, folder, category, categoryIndex, foodItemIndex, progressCallback) => {
    if (uri !== undefined) {
      const response = await fetch(uri);
      const blob = await response.blob();
      let name = generateId() + 'media.jpg';
      const pathName = folder === 'profile' ? item.id + '/' + folder + '/' + name : item.id + '/' + folder + '/' + category + '/' + name;
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
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            setIsSuccessful(false);
            reject(error);
          },
          () => {
            task.snapshot.ref.getDownloadURL().then((fileUrl) => {
                if (folder === 'profile') {
                  item.image = fileUrl;
                }
                else if (folder === 'menu') {
                  item.food[categoryIndex].data[foodItemIndex].image = fileUrl;
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
    dispatch(restaurantLoading());
    dispatch(AddOne(item));
    setActionModal(false);
    navigation.navigate(ConstString.HOME);

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
          options={categoryList}
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
      <SectionList style={{ marginHorizontal: 10, marginTop: 20, marginBottom: 55, }}
                   sections={selectedCategory}
                   showsVerticalScrollIndicator={false}
                   keyExtractor={(item, index) => item + index}
                   renderItem={(item) => { return null; }}
                   stickySectionHeadersEnabled={false}
                   renderSectionHeader={({ section: { item, data } }) => (
                     <>
                       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>
                         <Text style={styles.header}>{item}</Text>
                         <Image style={styles.icon} source={menuIcon(item)}></Image>
                         <View style={{ flexDirection: 'row', right: 5, position: 'absolute' }}>
                           <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                             openModal({ item });
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
                       <View style={{ flexDirection: 'row' }}>
                         <FlatList
                           data={data}
                           horizontal={true}
                           showsHorizontalScrollIndicator={false}
                           renderItem={({ item }) => (
                             <FoodCard name={item.name} price={item.price} desc={item.desc}
                                       image={item.image} />
                           )} />
                       </View>
                     </>
                   )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={addMenu}>
        <Text style={styles.buttonText}>Finish Setup Store</Text>
      </TouchableOpacity>
      {
        isModalVisible &&
        <ModalMenu isModalVisible={isModalVisible} closeModal={closeModal} selectedCategory={selectedCategory}
                   setFinalMenu={setSelectedCategory} Category={Category} />
      }
      {
        isActionModalVisible &&
        <ModalUploading isModalVisible={isActionModalVisible} closeModal={closeActionModal} action={action}
                        goBack={goBack} isSuccess={isSuccessful} />

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
