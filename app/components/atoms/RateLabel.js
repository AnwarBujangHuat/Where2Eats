import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';
import startIcon from '../../assets/star.png';
import startIcon2 from '../../assets/star2.png';
import { Colors } from '../../Colors';

export const RateLabel = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textRate}>{rating}</Text>
      <Image source={rating > 4.2 ? startIcon2 : startIcon} style={styles.icon}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: Colors.backGroundColor,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginStart: 10,
    marginTop: 5,
  },
  textRate: {
    padding: 2,
    color: Colors.secondaryTextColor,
    fontWeight: 'bold'
  },
});


