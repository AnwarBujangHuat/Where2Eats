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
import { firebase } from '../../../src/firebase/config';
import { defaultValue } from '../../store/defaultValue';

let email;
let password;
export const Login = ({ navigation }) => {
  const theme = useSelector(getTheme);
  EStyleSheet.build(theme === ConstString.LIGHT ? LightTheme : DarkTheme);
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
    navigation.navigate(ConstString.MODAL);
    // try {
    //   firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
    //     const uid = response.user.uid;
    //     console.log({user: response.user})
    //     console.log({profile: response.additionalUserInfo.profile})
    //     const usersRef = firebase.firestore().collection('Users');
    //     usersRef.doc(uid).get().then(firestoreDocument => {
    //       if (!firestoreDocument.exists) return alert('User Not Found.');
    //       const user = firestoreDocument.data();
    //       const { AGE, EMAIL, NAME, PHONE } = user;
    //       navigation.navigate(ConstString.MODAL);
    //     }).catch(error => {
    //       console.log({error})
    //       return error;
    //     });
    //   }).catch(error => {
    //     console.log({error})
    //     return error;
    //   });
    // } catch(exception) {}
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
