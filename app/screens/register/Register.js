import React, { useState } from 'react';
import { ConstString } from '../../Strings';
import { RegisterComponents } from './components';
import { launchImagePicker } from '../../ImagePicker';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  getCurrentRestaurant,
  getRestaurant,
  getUser
} from '../../store/selector';
import { ConstFoodCategory } from '../home/ConstFoodCategory';
import { Alert } from 'react-native';

let initialRestaurantname;
let initialRestaurantDesc;
let initialRestaurantLocation;
let initialRestaurantImage;
let initialRestaurantCategory;
let initialIndex=0;
export const Register = ({ navigation,route }) => {
  const { id } = route.params || {};
  if(id!==undefined){
    const restaurantInfo=useSelector(getCurrentRestaurant(id))
    initialRestaurantname=restaurantInfo.restaurant;
    initialRestaurantDesc=restaurantInfo.description;
    initialRestaurantLocation=restaurantInfo.address;
    initialRestaurantImage=restaurantInfo.image;
    initialRestaurantCategory=restaurantInfo.category;
    initialIndex=ConstFoodCategory.findIndex(items=>{
      return items.title === initialRestaurantCategory;
    })
  }else{
    initialRestaurantname="";
    initialRestaurantDesc='';
    initialRestaurantLocation='Jalan Dato Barber';
    initialRestaurantImage=undefined;
    initialRestaurantCategory=ConstString.WESTERN;
  }
  const user=  useSelector(getUser)
  const [selectedTypes, setSelectedTypes] = useState(initialRestaurantCategory??"Western");
  const [restaurantName, setRestaurantName] = useState(initialRestaurantname??'');
  const [restaurantDesc, setRestaurantDesc] = useState(initialRestaurantDesc)??'';
  const [imageUri, setImageUri] = useState(initialRestaurantImage??undefined);
  const [restaurantLocation, setRestaurantLocation] = useState(initialRestaurantLocation??'');
  const goToMenu = () => {
    const item = {
      restaurant: restaurantName,
      category: selectedTypes,
      address: restaurantLocation,
      description: restaurantDesc,
      rate: 5,
      // rate: undefined,
      image: imageUri,
      userId:user.ID??1,
      createdAt:new Date().toLocaleString(),
      food:[],
    };
    (restaurantName === '' || restaurantDesc === '' || restaurantLocation === '' || imageUri === undefined) ?
      alert('Please Fill in All Information') :
    navigation.navigate(ConstString.MENU, { item, id });
  };
  const launchImageLibrary = async() => {
    const response= await launchImagePicker()
    //* Exit if response empty *//
    if(!response) return Alert.alert('Please Pick Image in JPG or PNG format',
      '',
      [
        { text: 'Okay' },
      ],
      { cancelable: true }
    );

    //* Exit if there's error *//
    const { errorCode, assets } = response
    if(errorCode || assets === []) return Alert.alert('Please Pick Image in JPG or PNG format',
      '',
      [
        { text: 'Okay' },
      ],
      { cancelable: true }
    );

    //* Code proccessing *//
    setImageUri(assets[0].uri)

  };
  const goBack = () => {
    navigation.goBack({id});
  };
  const setName = (text) => setRestaurantName(text);
  const setDescription = (text) => setRestaurantDesc(text);
  const categorySelected = ({ item }) => setSelectedTypes(item.title);
  const props = {
    selectedTypes,
    restaurantName,
    restaurantDesc,
    initialIndex,
    restaurantLocation,
    goToMenu,
    goBack,
    setName,
    setDescription,
    categorySelected,
    launchImageLibrary,
    imageUri
  };
  return (
    <RegisterComponents {...props} />
  );
};
