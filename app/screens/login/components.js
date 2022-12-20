import * as React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Logo from '../../assets/Logo.png';
import {InputFieldLogins} from '../../components/molecules/InputFieldLogins';
import email from '../../assets/email.png';
import password from '../../assets/password.png';
import {IconButton} from '../../components/molecules/IconButton';
import {Colors} from '../../configs/Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SocialButton} from '../../components/atoms/SocialButton';
import {ConstString} from '../../configs/Strings';
import TestIDs from '../../../e2e/TestIDs';

export const LoginComponents = props => {
  const {
    onChangeInputEmail,
    onChangeInputPassword,
    goToSignIn,
    verifyUser,
    Email,
    Password,
    onGoogleButtonPress,
    onClickRememberMe,
    onRememberMe,
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image source={Logo} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Sign In</Text>
        <InputFieldLogins
          testID={TestIDs.IFEmail}
          hint={'Email'}
          defvalue={Email}
          onChangeText1={onChangeInputEmail}
          source={email}
          secret={false}
        />
        <InputFieldLogins
          testID={TestIDs.IFPassword}
          hint={'Password'}
          defvalue={Password}
          onChangeText1={onChangeInputPassword}
          source={password}
          secret={true}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            testID={TestIDs.BtnRememberMe}
            value={onRememberMe}
            onCheckColor={Colors.primaryColor}
            tintColor={Colors.primaryColor}
            onTintColor={Colors.primaryColor}
            boxType={'square'}
            tintColors={Colors.primaryColor}
            onValueChange={onClickRememberMe}
            style={{height: 15, width: 15}}
          />
          <Text
            style={{
              color: EStyleSheet.value('$secondaryTextColor'),
              textAlign: 'center',
              marginStart: 10,
            }}>
            Remember Me
          </Text>
        </View>
        <TouchableOpacity
          testID={TestIDs.BtnDone}
          style={styles.buttonDone}
          onPress={verifyUser}>
          <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonForPass}>
          <Text style={{color: Colors.primaryColor, textAlign: 'center'}}>
            Forget Password
          </Text>
        </TouchableOpacity>
        <IconButton
          title="Don't Have an Account? "
          buttontitle="Sign Up"
          onPress={goToSignIn}
        />
        <SocialButton
          tesId={TestIDs.BtnSignInGoogle}
          onPress={onGoogleButtonPress}
          icon={ConstString.GOOGLE}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = EStyleSheet.create({
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
    marginTop: 20,
  },
  buttonForPass: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  label: {
    margin: 8,
  },
});
