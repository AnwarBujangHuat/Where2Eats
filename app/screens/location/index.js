import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text as RNText,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import * as React from 'react';
import { ConstString } from '../../Strings';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../Colors';
import { SearchBar } from '../../components/molecules/SearchBar';
import search from '../../assets/search.png';
import { useState } from 'react';
import { BackButton } from '../../components/atoms/BackButton';

const { width } = Dimensions.get('window');

export const Location = ({ navigation }) => {
  const goBack = () => navigation.goBack()
  const [isLocation,setLocationResult]=useState('')
  // const goBack = () => navigation.navigate(ConstString.REGISTER, { id, location: 'meow' });
  const setLocation = () => {
    console.log(isLocation)
    navigation.navigate(ConstString.REGISTER, {location: isLocation });
  };
  const onSearch = (text) => {
    setLocationResult(text)
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ marginHorizontal: 10, }}>
      <View style={styles.rowContainer}>
        <BackButton onPress={goBack}></BackButton>
        <RNText style={styles.title}>{'Select Location'}</RNText>
      </View>
        <SearchBar placeholder={'Search'} onChangeText={onSearch} source={search} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={setLocation}>
        <Text style={styles.buttonText}>{"Finish Location"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = EStyleSheet.create({
  image: {
    width: width * 0.7
    , height: 150,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '$lightPrimaryColor',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    width: Dimensions.get('screen').width - 30,
    textTransform: 'uppercase',
    position:'absolute',
    bottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  icons: {
    height: 20,
    width: 20,
    margin: 10,
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '$backGroundColor',
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal:10,
    alignContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$primaryTextColor',
    margin: 10,
  },
});
