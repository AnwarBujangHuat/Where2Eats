import React, { useState } from 'react';
import { RatingComponents } from './components';
import { ConstString } from '../../Strings';
import { useSelector } from 'react-redux';
import { getCurrentRestaurant } from '../../store/selector';

export const Ratings=({ navigation, route })=>
{
  const { id } = route.params || {};
  const [isReviewing,setIsReviewing]=useState(true);
  const restaurantInfo = useSelector(getCurrentRestaurant(id));
  const onBackButton=()=>navigation.navigate(ConstString.RESTAURANT, { id });
  const props={
    isReviewing,
    onBackButton,
    restaurantInfo
  }

  return(<RatingComponents {...props}/>)
}
