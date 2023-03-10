import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebase } from "../../src/firebase/config";
import {
  arrayRemove,
  arrayUnion
} from "firebase/firestore";
import { ConstString } from "configs/Strings";
import { resResult } from "model/restaurantItem";
import { rating } from "app/model/ratingItem";
import { foodItem } from "app/model/foodItem";

const restaurantCollectionRef = firebase.firestore().collection(ConstString.RESTAURANT);
const errorObj = {
  id: "0",
  restaurant: "Error While Loading Restaurant List",
  category: ConstString.WESTERN,
  address: "Please Contact Dev or Retry",
  description: "Error While Loading Restaurant Info",
  rate: 4.6,
  image: "https://wallpaperaccess.com/full/4334504.jpg",
  userId: "0",
  food: [],
  createdAt: new Date().toLocaleString()
};
export const PopulateRestaurantList = createAsyncThunk(
  "getRestaurantList",
  async (request, { dispatch, rejectWithValue }) => {
    const { result: onSuccess, data }: any = await requestFetchRestaurantList();
    if (!onSuccess) {
      return rejectWithValue({ result: false, data: data });
    }
    //send Restaurant Array
    const response = { result: true, data: data };
    return response as resResult;
  }
);

const requestFetchRestaurantList = () =>
  new Promise<any>((resolve, reject) => {
    const restaurant = [];
    restaurantCollectionRef.get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const temp = { id: documentSnapshot.id, ...documentSnapshot.data() };
        restaurant.push(temp);
      });
    }).catch(() => reject({ result: false, data: errorObj })).then(
      () =>
        resolve({
          result: true,
          data: restaurant
        }),
      () => reject({ result: false, data: errorObj })
    );
  });

export const AddOne = createAsyncThunk(
  "AddOneRestaurant",
  async (request, { dispatch, rejectWithValue }) => {
    const { onSuccess, data } = await addOne(request) as { onSuccess: boolean, data: any };
    if (!onSuccess) rejectWithValue(data);
    return { onSuccess, data };
  }
);
const addOne = async (restaurant) =>
  new Promise((resolve, reject) => {
    restaurantCollectionRef.add(restaurant).then((result) =>
      resolve({
        onSuccess: true,
        data: { id: result.id, data: restaurant }
      })).catch((e) => reject({ onSuccess: false, data: e }));
  });

export const changeTheme = createAsyncThunk(
  "ChangeAppTheme",
  async (request) => {
    return request;
  }
);

export const updateRating = createAsyncThunk(
  "AddNewRating",
  async (request: { id: string, userReview: string, userReviewResult: string, avg: number }, {
    dispatch,
    rejectWithValue
  }) => {
    const {
      id,
      userReview,
      userReviewResult,
      avg
    } = request;

    // Guard Clause Technique
    //* Remove old review *//
    const review = userReview ?? "";
    const { onSuccess: successRemove } = await requestUpdateRestaurant(
      id,
      "rating",
      arrayRemove(review)
    ) as { onSuccess: boolean };
    if (!successRemove) {
      return rejectWithValue({ errorMessage: "error removing review" });
    } // handle error

    //* Add new review *//
    const result = userReviewResult ?? "";
    const { onSuccess: successUpdate } = await requestUpdateRestaurant(
      id,
      "rating",
      arrayUnion(result)
    ) as { onSuccess: boolean };
    if (!successUpdate) {
      return rejectWithValue({ errorMessage: "error adding review" });
    } // handle error

    //* Update average rating *//
    const average = avg ?? 0;
    const { onSuccess: successUpdateAvg } = await requestUpdateRestaurant(
      id,
      "rate",
      average
    ) as { onSuccess: boolean };
    if (!successUpdateAvg) {
      return rejectWithValue({ errorMessage: "error updating new average" });
    } // handle error

    return request;
  }
);
const requestUpdateRestaurant = (id, field, value) =>
  new Promise(myResolve => {
    restaurantCollectionRef.doc(id).update(field, value).then(
      () => myResolve({ onSuccess: true }),
      () => myResolve({ onSuccess: false })
    ).catch(e => myResolve({ onSuccess: false, data: e }));

  });

export const updateFoodItemFirebase = createAsyncThunk(
  "UpdateFoodItem",
  async (request: { id: string, foodItem: any, initialFoodItem: any }
    , { dispatch, rejectWithValue }) => {
    const { id, foodItem, initialFoodItem } = request;
    const resultRemove = await requestUpdateFoodItem(
      id,
      arrayRemove(initialFoodItem !== undefined ? initialFoodItem : "")
    );
    const { onSuccess: onSuccessRemove } = resultRemove as { onSuccess: boolean };
    if (!onSuccessRemove) {
      return rejectWithValue({
        result: onSuccessRemove,
        data: "There was an error while removing the Food item"
      });
    }

    const resultAdd = await requestUpdateFoodItem(id, arrayUnion(foodItem));
    const { onSuccess: onSuccessAdd } = resultAdd as { onSuccess: boolean };
    if (!onSuccessAdd) {
      return rejectWithValue({
        result: onSuccessAdd,
        data: "There was an error while Adding the Food item"
      });
    }

    return { result: onSuccessAdd, data: request };
  }
);
const requestUpdateFoodItem = (id, action) =>
  new Promise((resolve, reject) => {
    restaurantCollectionRef.doc(id).update("food", action).then(
      () => resolve({ onSuccess: true }),
      () => resolve({ onSuccess: false })
    ).catch(e => reject({ onSuccess: false, data: e }));

  });

export const addFoodItemFirebase = createAsyncThunk(
  "AddFoodItem",
  async (request: { id: string, foodItem: foodItem }, { dispatch, rejectWithValue }) => {
    const { id, foodItem } = request;
    const result = await requestAddNewFoodItem(id, foodItem);
    const { onSuccess } = result as { onSuccess: boolean };
    if (!onSuccess) {
      return rejectWithValue({ result: onSuccess });
    }
    return { result: onSuccess, data: request };
  }
);
const requestAddNewFoodItem = (id, foodItem) =>
  new Promise((resolve, reject) => {
    restaurantCollectionRef.doc(id).update("food", arrayUnion(foodItem)).then(
      () => resolve({ onSuccess: true }),
      () => resolve({ onSuccess: false })
    ).catch((e) => reject({ onSuccess: e }))
    ;
  });

export const removeFoodItemFirebase = createAsyncThunk(
  "RemoveFoodItem",
  async (request: { id: string, foodItem: foodItem, restaurantName: string }, { dispatch, rejectWithValue }) => {
    try {
      const { id, foodItem, restaurantName } = request;
      const resultRemove = await requestRemoveFoodItem(id, foodItem);
      const { onSuccess } = resultRemove as { onSuccess: boolean };
      if (!onSuccess) {
        return rejectWithValue({
          result: onSuccess,
          data: "Cannot Delete Food Item"
        });
      }

      const resultRemoveImage = await requestDeleteFoodItemImage(
        id,
        foodItem,
        restaurantName
      );
      const { onSuccess: onSuccessRemoveImage, data } = resultRemoveImage as { onSuccess: boolean, data: any };
      console.log(data);
      if (!onSuccessRemoveImage) {
        return rejectWithValue({
          result: onSuccessRemoveImage,
          data: "Cannot Delete Image Food Item"
        });
      }

      return { result: onSuccess, data: request };
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
const requestRemoveFoodItem = (id, foodItem) =>
  new Promise((resolve, reject) => {
    restaurantCollectionRef.doc(id).update("food", arrayRemove(foodItem)).then(
      () => resolve({ onSuccess: true }),
      () => resolve({ onSuccess: false })
    ).catch(e => reject({ onSuccess: false, data: e }));

  });

//Todo fix remove firebase image;
//LOG  [FirebaseError: Firebase Storage: Object 'Authenticated User/menu/Side Dish/137ce50emedia.jpg' does not exist. (storage/object-not-found)]
//actual ID: 1db17707-ebff-4427-a32a-a7a0137ce50emedia.jpg
const requestDeleteFoodItemImage = (id, foodItem, restaurantName) =>
  new Promise((resolve, reject) => {
    const imageName = foodItem.image;
    const imageIndex = imageName.indexOf("media.jpg");
    const pathName = restaurantName + "/menu/" + foodItem.category + "/";
    const image = imageName.slice(imageIndex - 8, imageIndex) + "media.jpg";
    firebase.storage().ref().child(pathName + image).delete().then(
      () => resolve({ onSuccess: true }),
      (r) => resolve({ onSuccess: false, data: r })
    ).catch(e => reject({ onSuccess: false, data: e }));
  });

export const updateRestaurantInfoFirestore = createAsyncThunk(
  "updateRestaurant",
  async (request: {
    id: string,
    restaurantName: string,
    selectedTypes: string,
    restaurantLocation: string,
    restaurantDesc: string,
    image: string
  }, { dispatch, rejectWithValue }) => {
    const {
      id,
      restaurantName,
      selectedTypes,
      restaurantLocation,
      restaurantDesc,
      image
    } = request;
    // Guard Clause Technique
    const { onSuccess: successUpdateInfo } = await requestUpdateRestaurantInfo(
      id,
      restaurantName,
      selectedTypes,
      restaurantLocation,
      restaurantDesc,
      image
    ) as { onSuccess: boolean };
    if (!successUpdateInfo) {
      return rejectWithValue({
        result: successUpdateInfo,
        data: "error updating restaurant Information"
      });
    }

    return { result: successUpdateInfo, data: request };
  }
);
const requestUpdateRestaurantInfo = (
  id,
  restaurantName,
  selectedTypes,
  restaurantLocation,
  restaurantDesc,
  image
) =>
  new Promise((resolve, reject) => {
    restaurantCollectionRef.doc(id).update({
      restaurant: restaurantName,
      category: selectedTypes,
      address: restaurantLocation,
      description: restaurantDesc,
      image: image
    }).then(
      () => resolve({ onSuccess: true }),
      () => resolve({ onSuccess: false })
    ).catch(e => reject({ onSuccess: false, data: e }));

  });

export const fetchUserInformation = createAsyncThunk(
  "fetchUserInfo",
  async (request: { uid: string }, { dispatch, rejectWithValue }) => {
    const { uid } = request;
    const { onSuccess: userExistInDatabase, data: userData } =
      await getUserInformation(uid) as { onSuccess: boolean, data: any };
    if (!userExistInDatabase) {
      return rejectWithValue({
        result: false,
        data: "User Does not Exist"
      });
    }
    return { result: userExistInDatabase, data: userData };
  }
);
const getUserInformation = uid =>
  new Promise((resolve, reject) => {
    firebase.firestore().collection("Users").doc(uid).get().then(
      firestoreDocument => {
        resolve({ onSuccess: true, data: firestoreDocument.data() });
      },
      () => {
        resolve({ onSuccess: false, data: "No User Data was Found" });
      }
    ).catch(e => reject({ onSuccess: false, data: e }));
  });

export const updateUserField = createAsyncThunk(
  "UpdateUserField",
  async (request, { dispatch, rejectWithValue }) => {
    return request;
  }
);
export const rememberMe = createAsyncThunk(
  "RememberMe",
  async (request, { dispatch, rejectWithValue }) => {
    return request;
  }
);

export const populateUserData = createAsyncThunk(
  "populateUserData",
  async (request, { dispatch, rejectWithValue }) => {
    return { result: true, data: request };
  }
);
