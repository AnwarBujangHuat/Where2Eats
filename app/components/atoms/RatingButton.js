import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import { Colors } from '../../Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import star from '../../assets/star2.png';

export const RatingButton = ({ onPress, rating, selected }) => {
  let backGroundColor = rating===selected ? '#894eff' : EStyleSheet.value('$secondaryBackGroundColor');
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
      }} onPress={()=>onPress(rating)}>
        <Image source={star} style={styles.icon}></Image>
        <Text style={{
          padding: 5,
          color:'white',
          fontWeight: 'bold'
        }}>{rating+" Rating"}</Text>
      </TouchableOpacity>
    </View>

  );
};
const styles = EStyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  }
});
