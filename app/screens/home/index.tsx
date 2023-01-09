import React, { useState } from "react";
import { HomeComponents } from "./components";
import {
  getRestaurant,
  getUser
} from "store/selector";
import {
  AppDispatch, useAppDispatch
} from "store/store";
import {
  useDispatch,
  useSelector
} from "react-redux";
import { PopulateRestaurantList } from "store/thunks";
import { Alert } from "react-native";
import { routes } from "navigation/routes";
import firebase from "firebase/compat/app";
import type { resResult, restaurant } from "model/restaurantItem";
import { foodItem } from "model/foodItem";
import { user } from "model/user";

export const Home = ({ navigation }) => {
  const fetchRestaurant = useSelector(getRestaurant);
  const { NAME: userName, IMAGE }: user = useSelector(getUser);
  const dispatch = useAppDispatch();
  const restaurant: restaurant[] = [...fetchRestaurant];
  const [currentRestaurant, setCurrentRestaurant] = useState<restaurant[]>(restaurant);
  const [selectedTypes, setSelectedTypes] = useState<foodItem[]>([]);
  const [isOpenMenu, setOpenMenu] = useState<Boolean>(false);
  const [isFetching, setIsFetching] = useState<Boolean>(false);

  const onClickCategoryChip = category => {
    //check if category item is already selected
    const isRestaurantIncluded = selectedTypes.includes(category);
    const tempSelected = isRestaurantIncluded
      ? selectedTypes.filter(item => item !== category)
      : [category, ...selectedTypes];
    setSelectedTypes(tempSelected);
    if (tempSelected.length <= 0) {
      return setCurrentRestaurant(restaurant);
    }
    if (isRestaurantIncluded) {
      const updateRestaurant = currentRestaurant.filter(
        currentRestaurant => currentRestaurant.category !== category
      );
      setCurrentRestaurant(updateRestaurant);
    } else {
      const updateRestaurant = restaurant.filter(
        currentRestaurant => currentRestaurant.category === category
      );
      const tempRestaurant =
        selectedTypes.length === 0
          ? [...updateRestaurant]
          : [...updateRestaurant, ...currentRestaurant];
      setCurrentRestaurant(tempRestaurant);
    }
  };

  const reFresh = async () => {
    setIsFetching(true);

    const response = await dispatch(PopulateRestaurantList());
    const { result } = response.payload as resResult;
    if (!result) {
      Alert.alert(
        "error",
        "",
        [
          {
            text: "Ok",
            onPress: goBack
          }
        ],
        { cancelable: false }
      );
    }
    setIsFetching(false);
  };
  const goBack = () => navigation.navigate(routes.LOGIN);
  const onSearch = text => {
    if (!text) {
      return setCurrentRestaurant(restaurant);
    }
    const updateRestaurant = restaurant.filter(item =>
      item.restaurant.toLowerCase().includes(text.toLowerCase())
    );
    setCurrentRestaurant(updateRestaurant);
  };
  const gotoRoulette = () => {
    resetHome();
    navigation.navigate(routes.ROULETTE, currentRestaurant);
  };
  const resetHome = () => {
    setSelectedTypes([]);
    setCurrentRestaurant(restaurant);
  };
  const logOut = () => {
    firebase.auth().signOut().then(
      () => navigation.navigate(routes.LOGIN),
      () => Alert.alert("error logging out")
    );
  };
  const openMenu = () => setOpenMenu(!isOpenMenu);
  const closeModal = () => setOpenMenu(false);
  const onNavigate = id => {
    resetHome();
    switch (id) {
      case 1:
        navigation.navigate(routes.REGISTER);
        break;
      case 2:
        navigation.navigate(routes.PROFILE);
        break;
      case 3:
        logOut();
        break;
    }
    closeModal();
  };
  const goToRestaurant = id => {
    resetHome();
    navigation.navigate(routes.RESTAURANT, { id });
  };
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
    userName,
    IMAGE
  };
  return <HomeComponents {...props} />;
};
