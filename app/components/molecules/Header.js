import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import { ConstString } from '../../Strings';
import { Colors } from '../../Colors';

export const Header = ({ source, onPress }) => {
  return (
    <View style={styles.section}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.icons} source={source} />
      </TouchableOpacity>
      <Text style={styles.title}>{ConstString.QUOTES}</Text>
    </View>

  );
};
const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center'
  },
  icons: {
    alignSelf: 'center',
    height: 35,
    width: 35,
    margin: 10,
    marginStart: 20,
    backgroundColor: Colors.secondaryBackGroundColor,
    borderRadius: 40,
  },
  title: {
    fontSize: 15,
    color: Colors.primaryTextColor,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
