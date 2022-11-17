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

export const SocialButton = ({ onPress, icon }) => {
  return (
    <View>
      <TouchableOpacity style={{
        flexDirection: 'row',
        borderRadius: 20,
        margin: 5,
        padding: 15,
        backgroundColor: 'white',
        shadowOffset: { width: -2, height: 3 },
        shadowColor: EStyleSheet.value('$primaryColor'),
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
      }} onPress={onPress}>
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
