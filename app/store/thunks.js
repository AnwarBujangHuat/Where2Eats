import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from '../../src/firebase/config';
import {
  arrayRemove,
  arrayUnion
} from 'firebase/firestore';
import { ConstString } from '../Strings';

const restaurantCollectionRef = firebase.firestore().collection(ConstString.RESTAURANT);
const fcmCollectionRef = firebase.firestore().collection(ConstString.FCM);

const errorObj = {
  id: 0,
  restaurant: 'Error While Loading Restaurant List',
  category: ConstString.WESTERN,
  address: 'Please Contac Dev or Retry',
  description: 'Error While Loading Restaurant Info',
  rate: 4.6,
  image: 'https://wallpaperaccess.com/full/4334504.jpg',
  userId: '0',
  food: [],
  createdAt: new Date().toLocaleString(),
};
export const PopulateRestaurantList = createAsyncThunk('getRestaurantList', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { onSuccess, data } = await requestFetchRestaurantList();
  if (!onSuccess) return rejectWithValue({ result: onSuccess, data: data });
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
  }).catch((e) => myResolve({ onSuccess: false, data: 'Unverified User' })).then(() => myResolve({
      onSuccess: true,
      data: restaurant
    }),
    () => myResolve({ onSuccess: false, data: errorObj }));
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
  restaurantCollectionRef.doc(id).update(field, value).then(() => myResolve({ onSuccess: true }), () => myResolve({ onSuccess: false }));
});

export const updateFoodItemFirebase = createAsyncThunk('UpdateFoodItem', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id, foodItem, initialFoodItem, index } = request;
  const resultRemove = await requestUpdateFoodItem(id, arrayRemove(initialFoodItem !== undefined ? initialFoodItem : ''));
  const { onSuccess: onSuccessRemove } = resultRemove;
  if (!onSuccessRemove) {
    return rejectWithValue({
      result: onSuccessRemove,
      data: 'There was an error while removing the Food item'
    });
  }

  const resultAdd = await requestUpdateFoodItem(id, arrayUnion(foodItem));
  const { onSuccess: onSuccessAdd } = resultAdd;
  if (!onSuccessAdd) {
    return rejectWithValue({
      result: onSuccessAdd,
      data: 'There was an error while Adding the Food item'
    });
  }

  return { result: onSuccessAdd, data: request };
});
const requestUpdateFoodItem = (id, action) => new Promise((resolve, reject) => {
  restaurantCollectionRef.doc(id).update('food', action).then(
    () => resolve({ onSuccess: true }),
    () => resolve({ onSuccess: false })
  );
});

export const addFoodItemFirebase = createAsyncThunk('AddFoodItem', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const { id, foodItem } = request;
  const result = await requestAddNewFoodItem(id, foodItem);
  const { onSuccess } = result;
  if (!onSuccess) return rejectWithValue({ result: onSuccess });
  return { result: onSuccess, data: request };
});
const requestAddNewFoodItem = (id, foodItem) => new Promise((resolve, reject) => {
  restaurantCollectionRef.doc(id).update('food', arrayUnion(foodItem)).then(
    () => resolve({ onSuccess: true }),
    () => resolve({ onSuccess: false })
  );
});

export const removeFoodItemFirebase = createAsyncThunk('RemoveFoodItem', async(request, {
  dispatch,
  rejectWithValue
}) => {
  try {
    const { id, foodItem, restaurantName } = request;
    const resultRemove = await requestRemoveFoodItem(id, foodItem);
    const { onSuccess } = resultRemove;
    if (!onSuccess) return rejectWithValue({ result: onSuccess, data: 'Cannot Delete Food Item' });

    const resultRemoveImage = await requestDeleteFoodItemImage(id, foodItem, restaurantName);
    const { onSuccess: onSuccessRemoveImage } = resultRemoveImage;
    // if(!onSuccessRemoveImage) return rejectWithValue({result:onSuccessRemoveImage, data:"Cannot Delete Image Food Item"})

    return { result: onSuccess, data: request };

  }
  catch(e) {
    return rejectWithValue(e);
  }
});
const requestRemoveFoodItem = (id, foodItem) => new Promise((resolve, reject) => {
  restaurantCollectionRef.doc(id).update('food', arrayRemove(foodItem)).then(
    () => resolve({ onSuccess: true }),
    () => resolve({ onSuccess: false })
  );
});

const requestDeleteFoodItemImage = (id, foodItem, restaurantName) => new Promise((resolve, reject) => {
  const imageName = foodItem.image;
  const imageIndex = imageName.indexOf('media.jpg');
  const pathName = restaurantName + '/menu/' + foodItem.category + '/';
  const image = imageName.slice(imageIndex - 8, imageIndex) + 'media.jpg';
  firebase.storage().ref().child(pathName + image).delete().then(
    () => resolve({ onSuccess: true })
    , () => resolve({ onSuccess: false })
  );
});

export const updateRestaurantInfoFirestore = createAsyncThunk('updateRestaurant', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const {
    id, restaurantName, selectedTypes, restaurantLocation, restaurantDesc, image
  } = request;
  // Guard Clause Technique
  const { onSuccess: successUpdateInfo } = await requestUpdateRestaurantInfo(id, restaurantName, selectedTypes, restaurantLocation, restaurantDesc, image);
  if (!successUpdateInfo) {
    return rejectWithValue({
      result: successUpdateInfo,
      data: 'error updating restaurant Information'
    });
  }

  return { result: successUpdateInfo, data: request };
});
const requestUpdateRestaurantInfo = (id, restaurantName, selectedTypes, restaurantLocation, restaurantDesc, image) => new Promise((resolve, reject) => {
  restaurantCollectionRef.doc(id).update(
    {
      restaurant: restaurantName,
      category: selectedTypes,
      address: restaurantLocation,
      description: restaurantDesc,
      image: image,
    }).then(
    () => resolve({ onSuccess: true }),
    () => resolve({ onSuccess: false })
  );
});

export const updateUserFCM = createAsyncThunk('updateUser', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const {
    userToken: token,
    deviceId,
    userId: uid
  } = request;
  const { onSuccess: successUpdateFCM } = await requestUpdateFCM(uid, token, deviceId);
  if (!successUpdateFCM) return rejectWithValue({ result: successUpdateFCM, data: 'error updating user Information' });

  return { result: successUpdateFCM, data: request };
});

const requestUpdateFCM = (uid, token, deviceId) => new Promise((resolve, reject) => {
  fcmCollectionRef.doc(deviceId).set(
    {
      userId: uid,
      fcmToken: token,
    }
    , { merge: true }).then(
    () => resolve({ onSuccess: true }),
    () => resolve({ onSuccess: false })
  )
  ;
});
export const verifyUserToken = createAsyncThunk('verifyToken', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const {
    token,
    deviceId,
  } = request;
  const { onSuccess: userExistInDatabase, data } = await requestVerifyToken(token, deviceId);
  if (!userExistInDatabase) return rejectWithValue({ result: userExistInDatabase, data: 'User Does not Exist' });

  return { result: userExistInDatabase, data: data };
});

const requestVerifyToken = (token, deviceId) => new Promise((resolve, reject) => {
  fcmCollectionRef.where(firebase.firestore.FieldPath.documentId(), '==', deviceId).where('fcmToken', '==', token).get().then((querySnapshot) => {
      //Check if no data return
      if (querySnapshot.empty) return resolve({ onSuccess: false, data: 'No data' });

      //if match then execute
      querySnapshot.forEach((doc) => {
        return resolve({ onSuccess: true, data: doc.data() });
      });


    },
  ).catch((error) => {
    return resolve({ onSuccess: false, data: 'No Data Found' });
  });


  // fcmCollectionRef.doc(deviceId).get().done(
  //   (document) => {
  //     const {fcmToken}=document.data();
  //     if(fcmToken===token) return resolve({ onSuccess: true, data:document.data()})
  //     resolve({ onSuccess: false, data:'No Data Found' })
  //   }
  // )
});

export const fetchUserInformation = createAsyncThunk('fetchUserInfo', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const {
    uid
  } = request;
  const { onSuccess: userExistInDatabase, data: userData } = await getUserInformation(uid);
  if (!userExistInDatabase) return rejectWithValue({ result: userExistInDatabase, data: 'User Does not Exist' });
  return { result: userExistInDatabase, data: userData };
});
const getUserInformation = (uid) => new Promise((resolve, reject) => {
  firebase.firestore().collection('Users').doc(uid).get().catch().
    then(
    firestoreDocument => {
      resolve({ onSuccess: true, data: firestoreDocument.data() });
    }, () => {
      resolve({ onSuccess: false, data: 'No User Data was Found' });
    });
});

export const updateUserField = createAsyncThunk('UpdateUserField', async(request, {
  dispatch,
  rejectWithValue
}) => {
  const result = request;
  return result;
});
export const rememberMe = createAsyncThunk('RememberMe', async(request, {
  dispatch,
  rejectWithValue
}) => {
  return request;
});


export const populateUserData = createAsyncThunk('populateUserData', async(request, {
  dispatch,
  rejectWithValue
}) => {
  return { result: true, data: request };
});
