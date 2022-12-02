import React, { useState } from 'react';
import { HomeComponents } from './components';
import { ConstString } from '../../Strings';
import {
  getRestaurant,
  getUser,
} from '../../store/selector';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { PopulateRestaurantList } from '../../store/thunks';
import { Alert } from 'react-native';

export const Home = ({ navigation }) => {
  const fetchRestaurant = useSelector(getRestaurant);
  const { NAME: userName, IMAGE } = useSelector(getUser);
  const dispatch = useDispatch();
  const restaurant = [...fetchRestaurant];
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurant);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isRender, setIsRender] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const onClickCategoryChip = (category) => {
    //check if category item is already selected
    const isRestaurantIncluded = selectedTypes.includes(category);
    const tempSelected = isRestaurantIncluded ? selectedTypes.filter(item => item !== category) : [category, ...selectedTypes];
    setSelectedTypes(tempSelected);
    if (tempSelected.length <= 0) return setCurrentRestaurant(restaurant);
    if (isRestaurantIncluded) {
      const updateRestaurant = currentRestaurant.filter(currentRestaurant => currentRestaurant.category !== category);
      setCurrentRestaurant(updateRestaurant);
    } else {
      const updateRestaurant = restaurant.filter(currentRestaurant => currentRestaurant.category === category);
      const tempRestaurant = selectedTypes.length === 0 ? [...updateRestaurant] : [...updateRestaurant, ...currentRestaurant];
      setCurrentRestaurant(tempRestaurant);
    }
  };
  const reFresh = async() => {
    setIsFetching(true);
    const response = await dispatch(PopulateRestaurantList());
    const { payload } = response;
    if (!payload.result) {
      Alert.alert(payload.data,
        '',
        [{
          text: 'Ok',
          onPress: goBack
          ,
        }],
        { cancelable: false });
    }
    setIsFetching(false);
  };
  const goBack = () => navigation.navigate(ConstString.LOGIN);
  const onSearch = (text) => {
    if (!text) return setCurrentRestaurant(restaurant);
    const updateRestaurant = restaurant.filter(item => item.restaurant.toLowerCase().includes(text.toLowerCase()));
    setCurrentRestaurant(updateRestaurant);
  };
  const gotoRoulette = () => {
    resetHome();
    navigation.navigate(ConstString.ROULETTE, currentRestaurant);
  };
  const resetHome = () => {
    setSelectedTypes([]);
    setCurrentRestaurant(restaurant);
  };
  const openMenu = () => setOpenMenu(!isOpenMenu);
  const closeModal = () => setOpenMenu(false);
  const onNavigate = (id) => {
    resetHome();
    switch(id) {
      case 1:
        navigation.navigate(ConstString.REGISTER);
        break;
      case 2:
        navigation.navigate(ConstString.PROFILE);
        break;
      case 3:
        navigation.navigate(ConstString.LOGIN);
        break;
    }
    closeModal();
  };
  const goToRestaurant = (id) => {
    resetHome();
    navigation.navigate(ConstString.RESTAURANT, { id });
  };
  const reRender = () => setIsRender(!isRender);
  const props = {
    selectedTypes,
    currentRestaurant,
    onClickCategoryChip,
    isOpenMenu,
    onSearch,
    gotoRoulette,
    openMenu,
    goToRestaurant,
    closeModal,
    onNavigate,
    isFetching,
    reFresh,
    reRender,
    userName,
    IMAGE
  };
  return (<HomeComponents{...props} />);
};
