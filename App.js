import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavStack } from './app/navigation/NavStack';
import store from './app/store/store';
import { Provider } from 'react-redux';

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


