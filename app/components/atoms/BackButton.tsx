import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { GStyles } from "../../configs/styles";
import React from "react";

export const BackButton = ({ onPress }) => {
  return (<TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.icons} source={require("../../assets/images/back.png")}></Image>
    </TouchableOpacity>
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
