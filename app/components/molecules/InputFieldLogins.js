import {
  Image,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import React from 'react';
import { Colors } from '../../Colors';

export const InputFieldLogins = ({ onChangeText1, defvalue, source, secret }) => {
  return (
    <View style={styles.section}>
      <Image style={styles.icons} source={source} />
      <TextInput
        style={styles.input}
        placeholder={defvalue}
        clearButtonMode={'always'}
        onChangeText={(text) => onChangeText1(text)}
        overflow="hidden"
        placeholderTextColor={Colors.secondaryTextColor}
        keyboardAppearance="dark"
        secureTextEntry={secret}
        color={Colors.primaryTextColor}
        autoCorrect={false} />
    </View>

  );
};
const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.backGroundColor,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 14,
    fontWeight: 'normal',
    marginHorizontal: 10,
    textAlignVertical: 'center',
    backgroundColor: Colors.backGroundColor,
    marginVertical: 2,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 0,
    width: '80%'
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'center',
    tintColor: Colors.primaryTextColor,
    height: 25,
    width: 25,
    margin: 10,
  },
});
