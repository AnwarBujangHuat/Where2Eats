import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { apiKey } from "../../../secret";

const GooglePlacesInput = ({ onResult }) => {
  return (
    <GooglePlacesAutocomplete
      styles={{
        container: {
          zIndex: 1
        },
        textInput: {
          height: 38,
          color: "#5d5d5d",
          fontSize: 16
        }
      }}
      placeholder="Searches"
      fetchDetails={true}
      onPress={(data, details) => {
        onResult({ data: data, details: details });
      }}
      query={{
        key: apiKey
      }}
    />
  );
};

export default GooglePlacesInput;
