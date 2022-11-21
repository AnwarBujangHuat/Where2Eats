import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
const { width } = Dimensions.get('window');


export const SearchBar = ({ onChangeText, placeholder, source }) => {
  return (
    <SafeAreaView style={styles.section}>
      <View style={styles.searchbar}>
        <Image style={styles.icons} source={source} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          clearButtonMode={'while-editing'}
          placeholderTextColor={EStyleSheet.value('$primaryTextColor')}
          onChangeText={onChangeText}
          autoCorrect={false}
          color={EStyleSheet.value('$primaryTextColor')}
          overflow="hidden"
          keyboardAppearance="dark"
        />
      </View>
      <View>
        {/*<TouchableOpacity style={styles.sortButton}*/}
        {/*>*/}
        {/*  <Text style={styles.text}>{'Sort By'}</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    </SafeAreaView>
  );
};
const styles = EStyleSheet.create({
  searchbar: {
    backgroundColor: '$secondaryBackGroundColor',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    width: width-30,
    padding: 5,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  text: {
    color: '$primaryTextColor',
    fontSize: 14,
    fontWeight: 'bold'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  input: {
    fontSize: 14,
    padding: 10,
    width: '90%'
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    tintColor: '$primaryColor',
  },
});
