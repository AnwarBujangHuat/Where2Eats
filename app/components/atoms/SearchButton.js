import {Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import searchIcon from '../../assets/search.png';

const {width} = Dimensions.get('window');

export const SearchButton = ({onPress, onChangeText, onSearch}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.icons} source={searchIcon} />
      {onSearch && (
        <TextInput
          style={styles.input}
          placeholder={'Search....'}
          onChangeText={text => onChangeText(text)}
          color={EStyleSheet.value('$secondaryTextColor')}
          placeholderTextColor={EStyleSheet.value('$secondaryTextColor')}
          keyboardAppearance="dark"
          autoCorrect={false}
        />
      )}
    </TouchableOpacity>
  );
};
const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryBackGroundColor',
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 10,
    marginStart: 10,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  icons: {
    height: 20,
    width: 20,
    tintColor: '$primaryColor',
  },
  input: {
    fontSize: 14,
    width: width * 0.5,
    paddingHorizontal: 10,
  },
});
