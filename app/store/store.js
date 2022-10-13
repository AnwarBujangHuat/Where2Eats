import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../store/reducer';

export default configureStore({
  reducer: {
    restaurant: Reducer
  }
});
