import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from '../../src/firebase/config';
import { defaultValue } from './defaultValue';

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
  const { userReview, ratingAverage} = request;
  // await firebase.firestore().collection('DummyData').doc("Dummy").set({Rating:arrayUnion(request)}).then((r)=>console.log(r))
// Atomically remove a region from the "regions" array field.

  // console.log(userReview+" "+ratingAverage)
  // await firebase.firestore().collection('Restaurants').doc(id).set(request).then(() => console.log('Done'));
  return request;
});

