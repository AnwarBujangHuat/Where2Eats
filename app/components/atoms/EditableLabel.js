import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import React from 'react';
import { Colors } from '../../Colors';
import editIcon from '../../assets/editing.png';
import profileIcon from '../../assets/profile.png';
const { width } = Dimensions.get('window');

export const EditableLabel = ({ onPress, title, information, icon }) => {
  return (<View>
    <View style={styles.label}>
      <Image style={styles.icon} source={icon}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.information}>{information}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.icon} source={editIcon}></Image>
      </TouchableOpacity>
    </View>
  </View>)
};
const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    tintColor: Colors.primaryColor
  },
  header: {
    color: Colors.secondaryTextColor,
    fontSize: 12,
    marginBottom: 5,
  },
  information: {
    color: Colors.primaryTextColor,
    fontSize: 16,
  },
  textContainer: {
    paddingStart: 10,
    width: "80%",
    alignContent: 'center'
  },
  label: {
    flexDirection: 'row',
    minHeight: 80,
    borderRadius: 5,
    marginVertical: 2,
    padding: 10,
    backgroundColor: Colors.backGroundColor,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: Colors.primaryColor,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
  }
});
