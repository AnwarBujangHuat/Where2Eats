import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../configs/Const';
export const IconButton = ({title, onPress, buttontitle}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{buttontitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
});
