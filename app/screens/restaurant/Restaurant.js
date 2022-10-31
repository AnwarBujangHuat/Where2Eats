import React, { useState } from 'react';
import { ConstString } from '../../Strings';
import { useSelector } from 'react-redux';
import {
  ConstFoodCategory,
  icons
} from '../home/ConstFoodCategory';
import { getCurrentRestaurant } from '../../store/selector';
import { RestaurantComponents } from './components';
import { menuCategories } from '../register/MenuCategories';

export const Restaurant = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [foodItem, setFoodItem] = useState();
  const { id } = route.params || {};
  const onPress = (item) => {
    setFoodItem(item);
    setModalVisible(!isModalVisible);
  };
  const current = useSelector(getCurrentRestaurant(id));
  const onBack = () => navigation.navigate(ConstString.HOME);
  // const restaurantIcon = ConstFoodCategory.find(icons => icons.title === current?.category).icon;
  const restaurantIcon =current?.category ? icons[current?.category]:icons.def
  const menuIcon =(item)=> menuCategories.find(icons => icons.item === item).icon;
  const closeModal = () => setModalVisible(false);
  const props = {
    isModalVisible,
    foodItem,
    onPress,
    current,
    onBack,
    restaurantIcon,
    closeModal,
    menuIcon
  };
  return (<RestaurantComponents {...props} />
  );
};
