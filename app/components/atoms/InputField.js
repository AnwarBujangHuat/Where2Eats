import React from 'react';

import {
  StyleSheet,
  TextInput
} from 'react-native';
import { Colors } from '../../Colors';

export const InputField = ({ placeholder, multiline, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      multiline={multiline}
      onChangeText={(text) => onChange(text)}
      overflow="hidden"
      color={Colors.secondaryTextColor}
      placeholderTextColor={Colors.secondaryTextColor}
      keyboardAppearance="dark"
      autoCorrect={false} />);
};
const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderBottomColor: Colors.primaryColor,
    borderColor: Colors.secondaryBackGroundColor,
    textAlignVertical: 'center',
    backgroundColor: Colors.secondaryBackGroundColor,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15,
  },
});
