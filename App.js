import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavStack } from './app/navigation/NavStack';
import store from './app/store/store';
import {
  Provider,
  useSelector
} from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
      </PersistGate>

    </Provider>
  );
};

export default App;


