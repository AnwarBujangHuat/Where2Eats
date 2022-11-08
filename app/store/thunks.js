import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from '../../src/firebase/config';
import { defaultValue } from './defaultValue';
import {
  arrayRemove,
  arrayUnion
} from 'firebase/firestore';

export const PopulateRestaurantList = createAsyncThunk('getRestaurantList', async(request, {
  dispatch,
  rejectWithValue
}) => {
  try {
    const restaurant = [];
    await firebase.firestore().collection('Restaurants').get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const temp = {id:documentSnapshot.id, ...documentSnapshot.data()}
        restaurant.push(temp);
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
  try {
    const response = await firebase.firestore().collection('Restaurants');
    const result = await response.add(request)
    // .then(
    //   response=> {
    //   console.log({path:'thunk-AddOne-done',data:{id:response.id,data:request}});
    //   return {id:response.id,data:request};
    //   })
    return {id:result.id,data:request};
  }
  catch(e) {
    console.log({path:'thunk-AddOne-catch',data:e})
    // return rejectWithValue(e);
  }
  // firebase.firestore().collection('Restaurants').doc(id).set(request)
  // .done(
  //   _ => {
  //     return rejectWithValue(request);
  //     },
  //   r => {
  //     return rejectWithValue(r)
  //   });
  // const response = await requestAddOne(request);
  // console.log({ path: 'store-addone-thunk', response });
  // return response ? request : rejectWithValue();
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
export const updateRating = createAsyncThunk('AddNewRating', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id, userReview, userReviewResult, avg } = request;
  await firebase.firestore().collection('Restaurants').doc(id).
    update('rating', arrayRemove(userReview !== undefined ? userReview : '')).done(() =>
      firebase.firestore().collection('Restaurants').doc(id).
        update('rating', arrayUnion(userReviewResult)).done(() =>
        firebase.firestore().collection('Restaurants').doc(id).update('rate', avg).done(() => {
          console.log('Success');
        }), () => console.log('Error')));

  return request;
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
  const { id, item } = request;
  await firebase.firestore().collection('Restaurants').doc(id).update('food', arrayRemove(item)).done();
  return request;
});
