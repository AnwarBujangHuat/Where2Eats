import React, { useState } from 'react';
import { ConstString } from '../../Strings';
import { RegisterComponents } from './components';
import { launchImagePicker } from '../../ImagePicker';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { getUser } from '../../store/selector';

export const Register = ({ navigation }) => {
  const user=  useSelector(getUser)
  const [selectedTypes, setSelectedTypes] = useState('Western');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantDesc, setRestaurantDesc] = useState('');
  const [imageUri, setImageUri] = useState(undefined);

  const [restaurantLocation, setRestaurantLocation] = useState('Jalan Dato Barber');
  //generates random id;
  const guid = () => {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4();
  };
//"c2181edf-041b-0a61-3651-79d671fa3db7"
  const goToMenu = () => {
    const tempObj = {
      restaurant: restaurantName,
      category: selectedTypes,
      address: restaurantLocation,
      description: restaurantDesc,
      rate: 5,
      id: guid(),
      image: imageUri,
      userId:user.ID??1,
      createdAt:new Date().toLocaleString()

    };
    (restaurantName === '' || restaurantDesc === '' || restaurantLocation === '' || imageUri === undefined) ? alert('Please Fill in All Information') : navigation.navigate(ConstString.MENU, tempObj);
  };
  const launchImageLibrary = () => {
    launchImagePicker().then(result => setImageUri(result));
  };
  const goBack = () => {
    navigation.navigate(ConstString.HOME);
  };
  const setName = (text) => setRestaurantName(text);
  const setDescription = (text) => setRestaurantDesc(text);
  const categorySelected = ({ item }) => setSelectedTypes(item.title);
  const props = {
    selectedTypes,
    restaurantName,
    restaurantDesc,
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
