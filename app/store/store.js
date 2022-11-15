import {
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import Reducer from '../store/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist/es/constants';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  whitelist: ['THEME','FCMTOKEN'] // only navigation will be persisted
};
const _persistedReducer = persistReducer(persistConfig, Reducer);
export default configureStore({
  reducer: {
    restaurant: _persistedReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});
