import React, { useState } from 'react';
import { ConstString } from '../../Strings';
import { useSelector } from 'react-redux';
import { getLatestIndex } from '../../store/selector';
import { RegisterComponents } from './components';

export const Register = ({ navigation }) => {
  const [selectedTypes, setSelectedTypes] = useState('Western');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantDesc, setRestaurantDesc] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('Jalan Dato Barber');
  //generates random id;
  const guid = () => {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4();
  }
//"c2181edf-041b-0a61-3651-79d671fa3db7"
  const goToMenu = () => {
    const tempObj = {
      restaurant: restaurantName,
      category: selectedTypes,
      address: restaurantLocation,
      description: restaurantDesc,
      rate: 4.6,
      id: guid(),
      image: 'https://b.zmtcdn.com/data/pictures/8/2800008/91cdc3b07793f87665fef7fc52162cbf.jpg',
    };
    (restaurantName === '' || restaurantDesc === '' || restaurantLocation === '') ? alert('Please Fill in All Information') : navigation.navigate(ConstString.MENU, tempObj);
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
    categorySelected
  };
  return (
    <RegisterComponents {...props} />
  );
};
