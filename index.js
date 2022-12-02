/**
 * @format
 */
import * as React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { persistStore } from 'redux-persist';
import store from './app/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const persist = persistStore(store);


const app = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => app);
