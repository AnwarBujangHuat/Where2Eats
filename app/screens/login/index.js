import * as React from 'react';
import {
  useEffect,
  useState
} from 'react';

import { LoginComponents } from './components';
import { ConstString } from '../../Strings';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { firebase } from '../../../src/firebase/config';
import { Alert } from 'react-native';
import { getDeviceId } from 'react-native-device-info';

import {
  fetchUserInformation,
  rememberMe,
  updateUserFCM
} from '../../store/thunks';
import { GoogleSignin } from '../../../src/SignInOption/config';
import { getInfo } from '../../store/selector';
// import { getAuth } from 'firebase-admin/auth';

export const Login = ({ navigation }) => {
  const [Email, setEmail] = useState('A177016@siswa.ukm.edu.my');
  const [Password, setPassword] = useState(12345678);
  const [onRememberMe, setOnRememberMe] = useState(false);
  const { EMAIL,PASSWORD }=useSelector(getInfo)
  useEffect(()=>{
    if(!EMAIL||!PASSWORD) return console.log(EMAIL,PASSWORD)
  },[])
  const dispatch = useDispatch();
  const onChangeInputEmail = (text) => {
    setEmail(text);
  };
  const onChangeInputPassword = (text) => {
    setPassword(text);
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
   if(onRememberMe) {
     const {result}=await dispatch(rememberMe(Email,Password))
     if(!result) setOnRememberMe(false);
   }
    const {
      onSuccess: onSuccessAuthentication,
      data: userDatar
    } = await authenticateUser(Email,Password);
    if (!onSuccessAuthentication) return showErrorAlert(userData);

    //Retrieving User Data
    const userToken = userData.user.toJSON().stsTokenManager.accessToken;
    const deviceId = getDeviceId();
    const userId = userData.user.uid;
    const lastLoggedIn = userData.user.toJSON().lastLoginAt;

    //Retrieving User Data
    const { payload: userPayload } = await dispatch(fetchUserInformation({ userId }));
    const { result: onSuccessUserInformation, data: userFirestoreData } = userPayload;
    if (!onSuccessUserInformation) return showErrorAlert({ userFirestoreData });
    const userInformation = userFirestoreData;
    //Uploading Record to Firestore
    const { payload } = await dispatch(updateUserFCM({ userToken, deviceId, userId, userInformation }));
    const { result, data } = payload;
    if (!result) return showErrorAlert(data);

    navigation.navigate(ConstString.MODAL);
  };
  const authenticateUser = (email, password) => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).done(
      (response) => {
        resolve({ onSuccess: true, data: response });
      },
      () => resolve({ onSuccess: false, data: 'User Does Not Exist in Our Database' })
    );
  });
  const onClickSignInOptions = async(item) => {
    switch(item) {
      case ConstString.GOOGLE:
        await onGoogleButtonPress();
        break;

    }
  };

  async function onGoogleButtonPress () {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const result = await GoogleSignin.signIn();

    console.log({ path: 'Facebook-Login', data: result });
    // Create a Google credential with the token
    // const googleCredential = firebase.auth().GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    // return firebase.auth().signInWithCredential(idToken);
  }

  const onClickRememberMe = () => setOnRememberMe(!onRememberMe);


  const props = {
    onChangeInputEmail,
    onChangeInputPassword,
    goToSignIn,
    verifyUser,
    onClickSignInOptions,
    onClickRememberMe,
    onRememberMe
  };
  return (
    <LoginComponents {...props} />
  );
};
