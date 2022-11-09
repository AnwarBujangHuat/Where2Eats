import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from '../../src/firebase/config';
import {
  arrayRemove,
  arrayUnion
} from 'firebase/firestore';
import { ConstString } from '../Strings';

export const PopulateRestaurantList = createAsyncThunk('getRestaurantList', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const errorObj = {
    restaurant: 'Error While Loading Restaurant List',
    category: ConstString.WESTERN,
    address: 'Please Contac Dev or Retry',
    description: 'Error While Loading Restaurant Info',
    rate: 4.6,
    image: 'https://wallpaperaccess.com/full/4334504.jpg',
    userId: '0',
    createdAt: new Date().toLocaleString(),
  };
  try {
    const restaurant = [];
    await firebase.firestore().collection('Restaurants').get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const temp = { id: documentSnapshot.id, ...documentSnapshot.data() };
        restaurant.push(temp);
      });
    });
    return restaurant.length > 0 ? restaurant : rejectWithValue(errorObj);
  }
  catch(e) {
  }
});
export const AddOne = createAsyncThunk('AddOneRestaurant', async(request, {
  dispatch,
  rejectWithValue
}) => {
  try {
    const response = await firebase.firestore().collection('Restaurants');
    const result = await response.add(request);
    return { id: result.id, data: request };
  }
  catch(e) {
    return rejectWithValue(e);
  }
});
export const changeTheme = createAsyncThunk('ChangeAppTheme', async(request, {
  dispatch,
  rejectWithValue
}) => {
  return request;
});
export const updateRating = createAsyncThunk('AddNewRating', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id, userReview, userReviewResult, avg,restaurantRemove } = request;
  try {
    const response = await firebase.firestore().collection('Restaurants');
    response.doc(id).update('rating', arrayRemove(userReview !== undefined ? userReview : '')).
      done(() =>
        firebase.firestore().collection('Restaurants').doc(id).update('rating', arrayUnion(userReviewResult)).
          done(() =>
              firebase.firestore().collection('Restaurants').doc(id).update('rate', avg).
                done(() => {
                }), () => console.log('Error')));
    return request ;
  }
  catch(e) {
    return rejectWithValue(e);
  }
});
export const updateFoodItemFirebase = createAsyncThunk('UpdateFoodItem', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id, newItem, initialFoodItem } = request;
  await firebase.firestore().collection('Restaurants').doc(id).
    update('food', arrayRemove(initialFoodItem !== undefined ? initialFoodItem : '')).done(() =>
      firebase.firestore().collection('Restaurants').doc(id).
        update('food', arrayUnion(newItem)).done());

  return request;
});
export const addFoodItemFirebase = createAsyncThunk('AddFoodItem', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id, foodItem } = request;
  await firebase.firestore().collection('Restaurants').doc(id).update('food', arrayUnion(foodItem)).then();
  return request;
});
export const removeFoodItemFirebase = createAsyncThunk('AddFoodItem', async(request, {
  dispatch,
  rejectWithValue
}) => {
  try{
    const { id, item } = request;
    // await firebase.firestore().collection('Restaurants').doc(id).update('food', arrayRemove(item)).done();
    return request
  }catch(e){
    return rejectWithValue(e)
  }
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
