import * as React from 'react';

import { LoginComponents } from './components';
import { ConstString } from '../../Strings';

let txtemail;
let txtpass;
export const Login = ({ navigation }) => {
  const onChangeInputEmail = (text) => {
    txtemail = text;
  };
  const onChangeInputPassword = (text) => {
    txtpass = text;
  };
  const goToSignIn = () => {
    navigation.navigate('Register');
  };
  const verifyUser = () => {
    if (txtemail.toLowerCase() !== 'g' || txtpass !== '1') {
      alert('Please Input The Right Credentials');
    } else {
      navigation.navigate(ConstString.HOME);
    }
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
