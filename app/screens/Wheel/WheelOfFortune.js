import React, { useState } from 'react';
import { ConstString } from '../../Strings';
import { WheelComponents } from './components';

const oneTurn = 360;
export const WheelOfFortune = ({ navigation, route }) => {
  const [isEnabled, setisEnabled] = useState(true);
  const [isDirection, setDirection] = useState('Right');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);
  let restaurant = route.params || {};
  const numberOfSegments = restaurant.length;
  const angleBySegment = oneTurn / numberOfSegments;
  const angleOffset = angleBySegment / 2;
  const onPress = (index) => {
    setSelectedRestaurant(restaurant[index]);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(!isModalVisible);
    setFinished(false);
  };
  const goBackHome = () => navigation.navigate(ConstString.HOME);
  const goToMenu = () => {
    setModalVisible(false);
    const id = selectedRestaurant.id;
    navigation.navigate(ConstString.RESTAURANT, { id });
  };
  const props = {
    restaurant,
    isEnabled,
    setFinished,
    isDirection,
    setDirection,
    setModalVisible,
    setSelectedRestaurant,
    isModalVisible,
    isFinished,
    selectedRestaurant,
    angleBySegment,
    angleOffset,
    onPress,
    closeModal,
    goBackHome,
    goToMenu,
    setisEnabled,
    oneTurn,
    numberOfSegments,
  };
  return (<WheelComponents {...props} />
  );
};


