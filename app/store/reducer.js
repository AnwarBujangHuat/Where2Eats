// import {
//   createEntityAdapter,
//   createSlice
// } from '@reduxjs/toolkit';
// import { PopulateRestaurantList } from './thunks';

// export const restaurantAdapter = createEntityAdapter({
//   sortComparer: (a, b) => a.restaurant.localeCompare(b.restaurant),
// });
// export const Reducer = createSlice({
//   name: 'restaurant',
//   initialState:
//     restaurantAdapter.getInitialState({
//       loading: 'idle',
//     }),
//   reducers: {
//     restaurantAdded: restaurantAdapter.addOne,
//     restaurantLoading(state, action) {
//       if (state.loading === 'idle') {
//         state.loading = 'pending';
//       }
//     },
//     restaurantUpdated: restaurantAdapter.updateOne,
//   },
//   extraReducers: builder => {
//     builder.addCase(PopulateRestaurantList.fulfilled, (state, payload) => {
//       if (state.loading === 'pending') {
//         restaurantAdapter.setAll(state, payload);
//         state.loading = 'idle';
//       }
//       return state;
//     });
//   }
// });

// export const { restaurantAdded, restaurantUpdated, restaurantLoading } = Reducer.actions;
// export default Reducer.reducer;


import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import {
  AddOne,
  changeTheme,
  PopulateRestaurantList
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
        restaurantAdapter.setAll(state.RESTAURANT, payload);
        state.RESTAURANT.loading = 'idle';
      }
      return state;
    });
    builder.addCase(PopulateRestaurantList.rejected, (state, { payload }) => {
      if (state.RESTAURANT.loading === 'pending') {
        state.RESTAURANT.loading = 'idle';
      }
      return state;
    });

    builder.addCase(AddOne.fulfilled, (state, payload) => {
      if (state.RESTAURANT.loading === 'pending') {
        restaurantAdapter.addOne(state.RESTAURANT, payload);
        state.RESTAURANT.loading = 'idle';
      }
      return state;
    });
    builder.addCase(changeTheme.fulfilled, (state, { payload }) => {
      state.THEME = payload;
      return state;
    });
  }
});

export const { restaurantAdded, restaurantUpdated, restaurantLoading } = Reducer.actions;
export default Reducer.reducer;


