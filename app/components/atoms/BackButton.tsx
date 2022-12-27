import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import backButton from "../../assets/images/back.png";
import { GStyles } from "../../configs/styles";
import React from "react";

export const BackButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.icons} source={backButton} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...GStyles.shadowContainer,
    alignSelf: "flex-start",
    borderRadius: 40,
    padding: 10,
    marginStart: 10
  },
  icons: {
    height: 20,
    width: 20
  }
});
