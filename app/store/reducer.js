import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import {
  AddOne,
  changeTheme,
  PopulateRestaurantList,
  removeFoodItemFirebase,
  updateRating
} from './thunks';
import { ConstString } from '../Strings';

export const restaurantAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.restaurant.localeCompare(b.restaurant),
});
export const Reducer = createSlice({
  name: 'restaurant',
  initialState: {
    RESTAURANT: restaurantAdapter.getInitialState({
      loading: 'idle',
    }),
    USER: {
      ID: '5yGZTuwy98cXhrEsf4qS9AxzWel2\n',
      NAME: 'Kasim Kaki Bangku',
      AGE: 21,
      EMAIL: 'Mohamad@gmail.com',
      PHONE: '0123456789',
      RestaurantId: [1, 2, 3]
    },
    THEME: ConstString.LIGHT
  },
  reducers: {
    // restaurantAdded: restaurantAdapter.addOne,
    restaurantLoading (state, action) {
      if (state.RESTAURANT.loading === 'idle') {
        state.RESTAURANT.loading = 'pending';
      }
    },
    restaurantUpdated: restaurantAdapter.updateOne,
  },
  extraReducers: builder => {
    builder.addCase(PopulateRestaurantList.fulfilled, (state, { payload }) => {
      if (state.RESTAURANT.loading === 'pending') {
        restaurantAdapter.addMany(state.RESTAURANT, payload);
        state.RESTAURANT.loading = 'idle';
      }
      return state;
    });
    builder.addCase(PopulateRestaurantList.rejected, (state, { payload }) => {
      if (state.RESTAURANT.loading === 'pending') {
        restaurantAdapter.addOne(state.RESTAURANT, payload);
        state.RESTAURANT.loading = 'idle';
      }
      return state;
    });
    builder.addCase(AddOne.fulfilled, (state, { meta, payload }) => {
      if (state.RESTAURANT.loading === 'pending') {
        const { id, data } = payload;
        const temp = { id: id, ...data };
        restaurantAdapter.addOne(state.RESTAURANT, temp);
        state.RESTAURANT.loading = 'idle';
      }
      return state;
    });
    builder.addCase(AddOne.rejected, (state, payload) => {
      console.log({ path: 'store-addOne-rejected', state, payload });
    });
    builder.addCase(changeTheme.fulfilled, (state, { payload }) => {
      state.THEME = payload;
      return state;
    });
    builder.addCase(updateRating.fulfilled, (state, { meta, payload }) => {
      const { id: restaurantId, avg: rate, userReviewResult: ratings, restaurantRemove } = payload;
      const updatedRating = [...restaurantRemove, ratings];
      restaurantAdapter.updateOne(state.RESTAURANT, {
        id: restaurantId, changes: {
          rate: rate,
          rating: updatedRating,
        }
      });
    });
    builder.addCase(updateRating.rejected, (state, payload) => {
      console.log({ path: 'store-addOne-rejected', state, payload });
    });
    builder.addCase(removeFoodItemFirebase.fulfilled, (state, { meta, payload }) => {
      const { id, item, itemIndex} = payload;
      const foodArray = [...state.RESTAURANT.entities[id].food];
      if(itemIndex>-1){
        foodArray.splice(itemIndex,1)
        restaurantAdapter.updateOne(state.RESTAURANT, {
          id: id,
          changes: {
            food: foodArray,
          }
        });

      }

    });
    builder.addCase(removeFoodItemFirebase.rejected, (state, payload) => {
      console.log({ path: 'store-addOne-rejected', state, payload });
    });

  }
});
export const { restaurantAdded, restaurantUpdated, restaurantLoading } = Reducer.actions;
export default Reducer.reducer;


