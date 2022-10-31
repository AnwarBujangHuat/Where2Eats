import {
  Image,
  TextInput,
  View
} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

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
        placeholderTextColor={EStyleSheet.value('$secondaryTextColor')}
        keyboardAppearance="dark"
        secureTextEntry={secret}
        color={EStyleSheet.value('$primaryTextColor')}
        autoCorrect={false} />
    </View>

  );
};
const styles = EStyleSheet.create({
  section: {
    backgroundColor: '$backGroundColor',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  input: {
    fontSize: 14,
    fontWeight: 'normal',
    marginHorizontal: 10,
    textAlignVertical: 'center',
    backgroundColor: '$backGroundColor',
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
    tintColor: '$primaryTextColor',
    height: 25,
    width: 25,
    margin: 10,
  },
});
