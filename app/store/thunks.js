import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from '../../src/firebase/config';
import {
  arrayRemove,
  arrayUnion
} from 'firebase/firestore';
import { ConstString } from '../Strings';
const restaurantCollectionRef=firebase.firestore().collection(ConstString.RESTAURANT);
const errorObj = {
  id: 0,
  restaurant: 'Error While Loading Restaurant List',
  category: ConstString.WESTERN,
  address: 'Please Contac Dev or Retry',
  description: 'Error While Loading Restaurant Info',
  rate: 4.6,
  image: 'https://wallpaperaccess.com/full/4334504.jpg',
  userId: '0',
  food:[],
  createdAt: new Date().toLocaleString(),
};
export const PopulateRestaurantList = createAsyncThunk('getRestaurantList', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { onSuccess, data } = await requestFetchRestaurantList();
  if (!onSuccess) return rejectWithValue(data);
  //send Restaurant Array
  return { result: onSuccess, restaurantList: data };
});
const requestFetchRestaurantList = () => new Promise((myResolve) => {
  const restaurant = [];
  restaurantCollectionRef.get().then(querySnapshot => {
    // if(querySnapshot.empty)return myResolve({ onSuccess: false, data: errorObj })
    querySnapshot.forEach(documentSnapshot => {
      const temp = { id: documentSnapshot.id, ...documentSnapshot.data() };
      restaurant.push(temp);
    });
  }).done(() => myResolve({ onSuccess: true, data: restaurant }),
    ()=>myResolve({ onSuccess: false, data: errorObj }));


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
  const { id, userReview, userReviewResult, avg } = request;

  // Guard Clause Technique
  //* Remove old review *//
  const review = userReview ?? '';
  const { onSuccess: successRemove } = await requestUpdateRestaurant(id, 'rating', arrayRemove(review));
  if (!successRemove) return rejectWithValue({ errorMessage: 'error removing review' }); // handle error

  //* Add new review *//
  const result = userReviewResult ?? '';
  const { onSuccess: successUpdate } = await requestUpdateRestaurant(id, 'rating', arrayUnion(result));
  if (!successUpdate) return rejectWithValue({ errorMessage: 'error adding review' }); // handle error

  //* Update average rating *//
  const average = avg ?? 0;
  const { onSuccess: successUpdateAvg } = await requestUpdateRestaurant(id, 'rate', average);
  if (!successUpdateAvg) return rejectWithValue({ errorMessage: 'error updating new average' }); // handle error

  return request;
});
const requestUpdateRestaurant = (id, field, value) => new Promise((myResolve) => {
  restaurantCollectionRef
  .doc(id).update(field, value).done(() => myResolve({ onSuccess: true }), () => myResolve({ onSuccess: false }));
});
export const updateFoodItemFirebase = createAsyncThunk('UpdateFoodItem', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id, newItem, initialFoodItem } = request;
  await restaurantCollectionRef.doc(id).
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
  try {
    await restaurantCollectionRef.doc(id).update('food', arrayUnion(foodItem)).then();
  }
  catch(e) {
    rejectWithValue(e);
  }
  return request;
});
export const removeFoodItemFirebase = createAsyncThunk('AddFoodItem', async(request, {
  dispatch,
  rejectWithValue
}) => {
  try {
    const { id, item } = request;
    // await firebase.firestore().collection('Restaurants').doc(id).update('food', arrayRemove(item)).done();
    return request;
  }
  catch(e) {
    return rejectWithValue(e);
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
