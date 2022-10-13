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
  const latestIndex = useSelector(getLatestIndex);
  const goToMenu = () => {
    const tempObj = {
      id: latestIndex + 1,
      restaurant: restaurantName,
      category: selectedTypes,
      address: restaurantLocation,
      description: restaurantDesc,
      rate: 4.6,
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
