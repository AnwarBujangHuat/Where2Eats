import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { icons } from '../../Const';
import { Colors } from '../../Colors';
import TestIDs from '../../TestIDs';

const { width } = Dimensions.get('window');

export const SocialButton = ({ tesId,onPress, icon }) => {
  return (
    <View>
      <TouchableOpacity
        testID={tesId}
        style={{
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 15,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: EStyleSheet.value('$secondaryBackGroundColor'),
        shadowOffset: { width: -2, height: 3 },
        shadowColor: Colors.primaryColor,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      }} onPress={onPress}>
        <Image source={icons[icon]} style={styles.icon}></Image>
        <Text style={{
          marginStart: 10,
          alignSelf: 'center',
          color: EStyleSheet.value('$secondaryTextColor'),
          fontWeight: 'bold',
        }}>{'Sign in With Google'}</Text>
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
