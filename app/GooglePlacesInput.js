import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const GooglePlacesInput = ({ onResult }) => {
  return (
    <GooglePlacesAutocomplete
      styles={{
        textInputContainer: {
          backgroundColor: EStyleSheet.value('$secondaryBackGroundColor'),
        },
        textInput: {
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
        },
      }}
      placeholder="Searches"
      onPress={(data, details = null) => {
        onResult({ data: data, details: details });
      }}
      query={{
        key: 'AIzaSyCHCZuPLY7PuyG4vBTDYbQfsa2ZNEHwpRs',
      }}
    />
  );
};

export default GooglePlacesInput;
