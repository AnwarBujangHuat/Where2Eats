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

import {
  fetchUserInformation,
  populateUserData,
  rememberMe
} from '../../store/thunks';
import { GoogleSignin } from '../../../src/SignInOption/config';
import { getInfo } from '../../store/selector';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import { getAuth } from 'firebase-admin/auth';

export const Login = ({ navigation }) => {
  const { EMAIL, PASSWORD } = useSelector(getInfo);
  const [Email, setEmail] = useState(EMAIL??'');
  const [Password, setPassword] = useState(PASSWORD??'');
  const [onRememberMe, setOnRememberMe] = useState(!!EMAIL);
  const dispatch = useDispatch();
  const onChangeInputEmail = (text) => setEmail(text);
  const onChangeInputPassword = (text) => setPassword(text);
  const onClickRememberMe = () => setOnRememberMe(!onRememberMe);
  const goToSignIn = () => navigation.navigate('Register');
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
  const populateUser = async({ uid, userInformation }) => {
    //Uploading Record to Firestore
    const { payload } = await dispatch(populateUserData({ uid, userInformation }));
    const { result, data } = payload;
    if (!result) return showErrorAlert(data);
    goToModal();
  };
  const verifyUser = async() => {
    const {
      onSuccess: onSuccessAuthentication,
      data: userData
    } = await authenticateUser(Email, Password);
    if (!onSuccessAuthentication) return showErrorAlert(userData);

    const { uid } = userData.user;
    //Retrieving User Data
    const { payload: userPayload } = await dispatch(fetchUserInformation({ uid }));
    const { result: onSuccessUserInformation, data: userFirestoreData } = userPayload;
    if (!onSuccessUserInformation) return showErrorAlert({ userFirestoreData });
    const userInformation = userFirestoreData;
    await dispatch(rememberMe(onRememberMe ? { EMAIL: Email, PASSWORD: Password } : { EMAIL: '', PASSWORD: '' }));

    setOnRememberMe(!onRememberMe);
    await populateUser({ uid, userInformation });

  };
  const goToModal = () => navigation.navigate(ConstString.MODAL);
  const authenticateUser = (email, password) => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).done(
      (response) => {
        resolve({ onSuccess: true, data: response });
      },
      () => resolve({ onSuccess: false, data: 'User Does Not Exist in Our Database' })
    );
  });
  const onGoogleButtonPress= async () =>{
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    try {
      const {
        idToken,
        accessToken,
        } = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
    const result=  await firebase.auth().signInWithCredential(credential);
      if(!result)return showErrorAlert("We Did not Manage to Register You")

      const{name,email,picture}=result.additionalUserInfo.profile
      const {uid}=result.user
      const userInfo = {
        userId:uid,
        NAME: name,
        EMAIL: email,
        IMAGE: picture
      };
      await populateUser({ uid, userInformation: userInfo });

    }
    catch(error) {
    }
  }
  const props = {
    onChangeInputEmail,
    onChangeInputPassword,
    goToSignIn,
    verifyUser,
    Email,
    Password,
    onGoogleButtonPress,
    onClickRememberMe,
    onRememberMe
  };

  return (
    <LoginComponents {...props} />
  );
};
