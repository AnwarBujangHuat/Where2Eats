import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import locationIcon from '../../assets/location.png';
import EStyleSheet from 'react-native-extended-stylesheet';

export const DescriptionLabel = ({name, location, icon, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.icon} source={icon} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.locationIcon} source={locationIcon} />
        <Text style={styles.desc}>{location}</Text>
      </View>
    </View>
  );
};
const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryBackGroundColor',
    shadowOffset: {width: -2, height: 6},
    shadowColor: '$primaryColor',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingTop: 40,
    paddingBottom: 20,
    paddingStart: 15,
    marginBottom: 15,
    zIndex: 0,
    elevation: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '88%',
    color: '$primaryTextColor',
  },
  desc: {
    color: '$secondaryTextColor',
    paddingTop: 5,
    maxWidth: '90%',
    fontSize: 14,
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  locationIcon: {
    width: 14,
    height: 14,
    marginEnd: 5,
    marginTop: 5,
  },
});
