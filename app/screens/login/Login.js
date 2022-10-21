import * as React from 'react';

import { LoginComponents } from './components';
import { ConstString } from '../../Strings';
import { useSelector } from 'react-redux';
import { getTheme } from '../../store/selector';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  DarkTheme,
  LightTheme
} from '../../Colors';
import { firebase } from '../../../src/firebase/config'


let email;
let password;
export const Login = ({ navigation }) => {
  const theme = useSelector(getTheme);
  EStyleSheet.build(theme===ConstString.LIGHT?LightTheme:DarkTheme)
  const onChangeInputEmail = (text) => {
    email = text;
  };
  const onChangeInputPassword = (text) => {
    password = text;
  };
  const goToSignIn = () => {
    navigation.navigate('Register');
  };
  const verifyUser = () => {
    navigation.navigate(ConstString.HOME);

    // try{
    //   firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
    //   const uid = response.user.uid;
    //   const usersRef = firebase.firestore().collection('Users')
    //     usersRef.doc(uid).get().then(firestoreDocument => {
    //     if (!firestoreDocument.exists) return alert("User Not Found.")
    //     const user = firestoreDocument.data();
    //     const {AGE,EMAIL,NAME,PHONE}=user;
    //     navigation.navigate(ConstString.HOME);
    //     })
    //   .catch(error => {return error});
    //   }).catch(error => {return error})
    // }catch(exception){}
  };
  const props = {
    onChangeInputEmail,
    onChangeInputPassword,
    goToSignIn,
    verifyUser,
  };
  return (
    <LoginComponents {...props} />
  );
};
