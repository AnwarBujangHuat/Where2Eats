import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { icons } from '../../Const';
import { Colors } from '../../Colors';
import {  GoogleSigninButton } from '@react-native-google-signin/google-signin';

export const SocialButton = ({ onPress, icon }) => {
  return (
    <View>
      <TouchableOpacity style={{
        flexDirection: 'row',
        borderRadius: 20,
        margin: 5,
        padding: 15,
        backgroundColor: EStyleSheet.value('$secondaryBackGroundColor'),
        shadowOffset: { width: -2, height: 3 },
        shadowColor: Colors.primaryColor,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
      }} onPress={onPress}>
        <Text style={{
          padding: 5,
          marginLeft: 5,
          color: color,
          fontWeight: 'bold'
        }}>{'Sign in With Google'}</Text>
        <Image source={icons[icon]} style={styles.icon}></Image>

      </TouchableOpacity>
    </View>

  );
};
const styles = EStyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
});
