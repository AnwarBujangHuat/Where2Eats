import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import { Colors } from '../../Colors';
import EStyleSheet from 'react-native-extended-stylesheet';

export const ImageButton = ({ onPress, item, selected }) => {
  let backGroundColor = selected.includes(item.title) ? '#894eff' : EStyleSheet.value('$secondaryBackGroundColor');
  let color = selected.includes(item.title) ? Colors.whitTextColor : Colors.primaryColor;
  return (
    <View>
      <TouchableOpacity style={{
        flexDirection: 'row',
        borderRadius: 20,
        margin: 5,
        padding: 10,
        backgroundColor: backGroundColor,
        shadowOffset: { width: -2, height: 3 },
        shadowColor: EStyleSheet.value('$primaryColor'),
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
      }} onPress={onPress}>
        <Image source={item.icon} style={styles.icon}></Image>
        <Text style={{
          padding: 5,
          marginLeft: 5,
          color: color,
          fontWeight: 'bold'
        }}>{item.title}</Text>

      </TouchableOpacity>
    </View>

  );
};
const styles = EStyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
});
