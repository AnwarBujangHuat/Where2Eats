import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

export const IconButton = ({ title, onPress, buttontitle }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}>
        <Text style={styles.buttonText}>{buttontitle}</Text>
      </TouchableOpacity>
    </View>

  );
};
const styles = EStyleSheet.create({
  section: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '$primaryTextColor',
    textAlign: 'center'
  },
  title: {
    color: '$secondaryTextColor',
    textAlign: 'center'
  }
});
