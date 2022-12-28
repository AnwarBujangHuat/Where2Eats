import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../..//configs/Const";
import { GStyles } from "../..//configs/styles";
import TestIDs from "../../../e2e/TestIDs";

export const FloatingActionButton = ({ onPress }) => {
  return (
    <View style={styles.fab}>
      <TouchableOpacity
        testID={TestIDs.BtnRoulette}
        style={styles.fabContainer}
        onPress={onPress}>
        <Image
          source={require("../../assets/images/bet.png")}
          style={styles.addIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  addIcon: {
    padding: 15,
    height: 50,
    width: 50
  },
  fabContainer: {
    ...GStyles.shadowContainer,
    backgroundColor: colors.secondBg,
    borderRadius: 40,
    padding: 10
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20
  }
});
