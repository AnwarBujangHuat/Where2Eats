import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';
import locationIcon from '../../assets/location.png';
import EStyleSheet from 'react-native-extended-stylesheet';

export const DescriptionLabel = ({ name, location, icon }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.icon} source={icon}></Image>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.locationIcon} source={locationIcon}></Image>
        <Text style={styles.desc}>{location}</Text>
      </View>
    </View>
  );
};
const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryBackGroundColor',
    shadowOffset: { width: -2, height: 8 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingTop: 40,
    paddingBottom: 20,
    paddingStart: 15,
    marginBottom: 15,
    zIndex: 1

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '88%',
    color: '$primaryTextColor'
  },
  desc: {
    color: '$secondaryTextColor',
    paddingTop: 5,
    fontSize: 14,
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  locationIcon: {
    width: 11,
    height: 11,
    alignSelf: 'center',
    marginTop: 5,
    marginEnd: 5,
  }
});
