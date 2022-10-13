import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import { Colors } from '../../Colors';

export const ImageButton = ({ onPress, item, selected }) => {
  let backGroundColor = selected.includes(item.title) ? '#894eff' : Colors.secondaryBackGroundColor;
  let color = selected.includes(item.title) ? Colors.whitTextColor : Colors.primaryColor;
  return (
    <View>
      <TouchableOpacity style={{
        flexDirection: 'row',
        borderRadius: 20,
        margin: 5,
        padding: 10,
        backgroundColor: backGroundColor,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: Colors.primaryColor,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
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
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
});
