import * as React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Logo from '../../assets/Logo.png';
import { InputFieldLogins } from '../../components/molecules/InputFieldLogins';
import email from '../../assets/email.png';
import password from '../../assets/password.png';
import { IconButton } from '../../components/molecules/IconButton';
import { Colors } from '../../Colors';
import EStyleSheet from 'react-native-extended-stylesheet';

export const LoginComponents = props => {
  const {
    onChangeInputEmail,
    onChangeInputPassword,
    goToSignIn,
    verifyUser,
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image source={Logo} style={styles.logo}></Image>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Sign In</Text>
        <InputFieldLogins defvalue={'Email'} onChangeText1={onChangeInputEmail} source={email}
                          secret={false} />
        <InputFieldLogins defvalue={'Password'} onChangeText1={onChangeInputPassword} source={password}
                          secret={true} />
        <TouchableOpacity style={styles.buttonDone} onPress={verifyUser}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonForPass}>
          <Text style={{ color: Colors.primaryColor, textAlign: 'center' }}>Forget Password</Text>
        </TouchableOpacity>
        <IconButton title="Don't Have an Account? " buttontitle="Sign Up" onPress={goToSignIn}></IconButton>
      </View>
    </SafeAreaView>
  );
};
const styles = EStyleSheet.create(
  {
    logo: {
      height: 100,
      width: 100,
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 10,
      margin: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '$backGroundColor',
    },
    title: {
      fontWeight: 'normal',
      fontSize: 20,
      color: '$primaryTextColor',
      marginVertical: 10,
    },
    inputContainer: {
      flex: 1,
      marginHorizontal: 30,
    },
    buttonDone: {
      alignItems: 'center',
      backgroundColor: '$primaryColor',
      borderRadius: 10,
      padding: 15,
      marginTop: 15,
    },
    buttonForPass: {
      alignItems: 'center',
      borderRadius: 10,
      padding: 15,
      marginTop: 10,
    },
  });
