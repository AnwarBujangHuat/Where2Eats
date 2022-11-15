import * as React from 'react';

import { LoginComponents } from './components';
import { ConstString } from '../../Strings';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { getTheme } from '../../store/selector';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  DarkTheme,
  LightTheme
} from '../../Colors';
import { firebase } from '../../../src/firebase/config';
import { Alert } from 'react-native';
// import { getAuth } from 'firebase-admin/auth';
let email;
let password;
import {getDeviceId,getUniqueId} from 'react-native-device-info';
import {
  fetchUserInformation,
  updateUserFCM
} from '../../store/thunks';

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const onChangeInputEmail = (text) => {
    email = text;
  };
  const onChangeInputPassword = (text) => {
    password = text;
  };
  const goToSignIn = () => {
    navigation.navigate('Register');
  };
  const showErrorAlert = (error) => {
    //Error Handling Alert
    Alert.alert(
      'Sorry',
      error,
      [
        {
          text: 'Okay',
        },
      ],
    );

  };
  const verifyUser = async() => {
    // const { onSuccess: onSuccessAuthentication, data: userData } = await authenticateUser(email, password);
    const { onSuccess: onSuccessAuthentication, data: userData } = await authenticateUser("A177016@siswa.ukm.edu.my", 12345678);
    if (!onSuccessAuthentication) return showErrorAlert(userData);

    //Retrieving User Data
    const userToken=userData.user.toJSON().stsTokenManager.accessToken;
    const deviceId=getDeviceId();
    const userId=userData.user.uid;
    const lastLoggedIn=userData.user.toJSON().lastLoginAt;

    //Retrieving User Data
    const { payload:userPayload } = await dispatch(fetchUserInformation({ userId }));
    const { result: onSuccessUserInformation, data: userFirestoreData }=userPayload
    if (!onSuccessUserInformation) return showErrorAlert({ userFirestoreData });
    const userInformation = userFirestoreData;
    //Uploading Record to Firestore
    const { payload }= await dispatch(updateUserFCM({userToken,deviceId,userId,userInformation}))
    const {result,data}=payload
    if(!result)return showErrorAlert(data)

    navigation.navigate(ConstString.MODAL);
  };
  const authenticateUser = (email, password) => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).done(
      (response) => {
        resolve({ onSuccess: true, data: response });
      },
      ()=> resolve({ onSuccess: false, data: 'User Does Not Exist in Our Database' })
    );
  });
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
