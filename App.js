import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavStack } from './app/navigation/NavStack';
import store from './app/store/store';
import {
  Provider,
  useSelector
} from 'react-redux';
import { ColorThemes } from './app/Colors';
import { getTheme } from './app/store/selector';

const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;


