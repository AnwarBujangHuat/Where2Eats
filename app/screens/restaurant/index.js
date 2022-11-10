import React, { useState,useEffect } from 'react';
import { ConstString } from '../../Strings';
import { useSelector } from 'react-redux';
import { icons } from '../home/ConstFoodCategory';
import { getCurrentRestaurant } from '../../store/selector';
import { menuCategories } from '../register/MenuCategories';
import { RestaurantComponents } from './components';
import { SortedRestaurantComponents } from './testing/components';
export const Restaurant = ({ navigation, route }) => {
  const categories = [
    { id: 1, item: ConstString.MAINDISH },
    { id: 2, item: ConstString.SIDEDISH },
    { id: 3, item: ConstString.DESSERT },
    { id: 4, item: ConstString.APPETIZER },
    { id: 5, item: ConstString.DRINKS },
  ]
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
  const restaurantIcon = current?.category ? icons[current?.category] : icons.def;
  const menuIcon = (item) => menuCategories.find(icons => icons.item === item).icon;
  const closeModal = () => setModalVisible(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const foodItemList = [...current.food];
  useEffect(()=>{
    const tempCategory = categories.filter( category => foodItemList.find( food => food.category === category.item))
    setSelectedCategory(tempCategory)
  },[])
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
  const props = {
    isModalVisible,
    foodItem,
    onPress,
    current,
    selectedCategory,
    foodItemList,
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
  // return (<SortedRestaurantComponents {...props} />
  return (<RestaurantComponents {...props} />
  );
};
