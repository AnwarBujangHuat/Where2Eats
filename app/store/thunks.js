import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from '../../src/firebase/config';
import { defaultValue } from './defaultValue';
import {
  arrayRemove,
  arrayUnion
} from 'firebase/firestore';
import { ConstString } from '../Strings';

export const PopulateRestaurantList = createAsyncThunk('getRestaurantList', async(request, {
  dispatch,
  rejectWithValue
}) => {
  try {
    const restaurant = [];
    await firebase.firestore().collection('Restaurants').get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        restaurant.push(documentSnapshot.data());
      });
    });
    return restaurant.length > 0 ? restaurant : defaultValue;
  }
  catch(e) {
  }

});
export const AddOne = createAsyncThunk('AddOneRestaurant', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id } = request;
  await firebase.firestore().collection('Restaurants').doc(id).set(request).done(() => console.log('Done'),(r)=>console.log(r));
  return request;
});

export const changeTheme = createAsyncThunk('ChangeAppTheme', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const result = request;
  return result;
});

export const updateUserField = createAsyncThunk('UpdateUserField', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const result = request;
  return result;
});
export const verifyUser = createAsyncThunk('VerifyUser', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const result = request;
  return result;
});
export const updateRating=createAsyncThunk("AddNewRating",async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id,userReview,userReviewResult,avg} = request;
  await firebase.firestore().collection('Restaurants').doc(id).
    update('rating', arrayRemove(userReview !== undefined ? userReview : '')).done(() =>
    firebase.firestore().collection('Restaurants').doc(id).
      update('rating', arrayUnion(userReviewResult)).done(() =>
      firebase.firestore().collection('Restaurants').doc(id).update('rate', avg).done(() => {
      }), () => console.log('Error')));

  return request;
});
export const updateFoodItemFirebase=createAsyncThunk("UpdateFoodItem",async(request, {
  dispatch,
  rejectWithValue
}) => {
  const {id,foodItem} = request;
  await firebase.firestore().collection('Restaurants').doc(id).
    update('food', arrayRemove(foodItem !== undefined ? foodItem : '')).done(() =>
      firebase.firestore().collection('Restaurants').doc(id).
        update('food', arrayUnion(foodItem)).done());

  return request;
});
export const addFoodItemFirebase=createAsyncThunk("AddFoodItem",async(request, {
  dispatch,
  rejectWithValue
}) => {
  const {id,newItem} = request;
  await firebase.firestore().collection('Restaurants').doc(id).update('food[0].data',arrayUnion(newItem))
    .then((r)=>console.log(r));
  return request;
});
