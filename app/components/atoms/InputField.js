import React from 'react';

import { TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const InputField = ({ placeholder, multiline, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      multiline={multiline}
      onChangeText={(text) => onChange(text)}
      overflow="hidden"
      color={EStyleSheet.value('$secondaryTextColor')}
      placeholderTextColor={EStyleSheet.value('$secondaryTextColor')}
      keyboardAppearance="dark"
      autoCorrect={false} />);
};
const styles = EStyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderBottomColor: '$primaryColor',
    borderColor: '$secondaryBackGroundColor',
    textAlignVertical: 'center',
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 5,
    paddingVertical: 15,
  },
});
