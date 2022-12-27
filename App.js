"use strict";
exports.__esModule = true;
var React = require("react");
var native_1 = require("@react-navigation/native");
var NavStack_1 = require("./app/navigation/NavStack");
var react_native_1 = require("react-native");
function App() {
    return (<native_1.NavigationContainer>
      {/*<StatusBar barStyle={'dark-content'} />*/}
      <react_native_1.StatusBar barStyle={'light-content'}/>
      <NavStack_1.NavStack />
    </native_1.NavigationContainer>);
}
exports["default"] = App;
