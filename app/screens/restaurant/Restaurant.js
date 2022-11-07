import React, { useState } from 'react';
import { ConstString } from '../../Strings';
import { useSelector } from 'react-redux';
import { icons } from '../home/ConstFoodCategory';
import { getCurrentRestaurant } from '../../store/selector';
import { RestaurantComponents } from './components';
import { menuCategories } from '../register/MenuCategories';

export const Restaurant = ({ navigation, route }) => {
  let initialRestaurantMenu = [
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

  const [isModalVisible, setModalVisible] = useState(false);
  const [foodItem, setFoodItem] = useState();
  const [isPreview, setIsPreview] = useState(false);
  const { id } = route.params || {};
  const onPress = (item) => {
    setFoodItem(item);
    setModalVisible(!isModalVisible);
  };
  const current = useSelector(getCurrentRestaurant(id));
  const closePreviewModal = () => {
    setIsPreview(false);
  };
  const onBack = () => navigation.navigate(ConstString.HOME);
  // const restaurantIcon = ConstFoodCategory.find(icons => icons.title === current?.category).icon;
  const restaurantIcon = current?.category ? icons[current?.category] : icons.def;
  const menuIcon = (item) => menuCategories.find(icons => icons.item === item).icon;
  const closeModal = () => setModalVisible(false);
  const openPreviewModal = () => setIsPreview(true);
  const goToRating = () => navigation.navigate(ConstString.RATINGS, { id });
  const onPressItem = (item) => {
    const tempObj = {
      restaurant: current.restaurant,
      category: current.category,
      address: current.address,
      description: current.description,
      rate: current.rating,
      id: current.id,
      image: current.image,
      userId: current.userId ?? 1,
      createdAt: current.createdAt
    };
    item === ConstString.EDIT ? navigation.navigate(ConstString.REGISTER, { id }) :
      navigation.navigate(ConstString.MENU, { tempObj, id });
  };
  const foodItemList = current.food;
  foodItemList.forEach(foodItem => {
    switch(foodItem.category) {
      case ConstString.MAINDISH:
        initialRestaurantMenu[0].data.push(foodItem);
        break;
      case ConstString.SIDEDISH:
        initialRestaurantMenu[1].data.push(foodItem)
        break;
      case ConstString.DESSERT:
        initialRestaurantMenu[2].data.push(foodItem)
        break;
      case ConstString.APPETIZER:
        initialRestaurantMenu[3].data.push(foodItem)
        break;
      case ConstString.DRINKS:
        initialRestaurantMenu[4].data.push(foodItem)
        break;
    }
  });
  const cleaningUp=initialRestaurantMenu.filter(item=>item.data.length>0)
  const props = {
    isModalVisible,
    foodItem,
    onPress,
    current,
    cleaningUp,
    initialRestaurantMenu,
    onBack,
    restaurantIcon,
    closeModal,
    menuIcon,
    isPreview,
    closePreviewModal,
    openPreviewModal,
    goToRating,
    onPressItem
  };
  return (<RestaurantComponents {...props} />
  );
};
