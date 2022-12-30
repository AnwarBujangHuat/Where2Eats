import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { BackButton } from "components/atoms/BackButton";
import { RateLabel } from "components/atoms/RateLabel";
import { SearchButton } from "components/atoms/SearchButton";
import { GStyles } from "configs/styles";
import { colors } from "configs/Const";

const { width } = Dimensions.get("window");

export const DetailsHeader = ({
                                image,
                                back,
                                disabled,
                                rating,
                                rate = false,
                                onPress,
                                goToRating,
                                onSearch,
                                onChangeText,
                                onPressSearch
                              }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <ImageBackground
          source={image !== undefined ? { uri: image } : require("../../assets/images/addImage.png")} //image ? image : addImage
          style={{
            height: "100%"
          }}>
          <View style={styles.rowContainer}>
            <View style={{ width: width * 0.8, flexDirection: "row" }}>
              <BackButton onPress={back} />
              {disabled && (
                <SearchButton
                  onSearch={onSearch}
                  onChangeText={onChangeText}
                  onPress={onPressSearch}
                />
              )}
            </View>
            {rate && <RateLabel rating={rating} goToRating={goToRating} />}
          </View>

          <TouchableOpacity style={styles.logoContainer} disabled={disabled}>
            <Image style={styles.icons} source={require("../../assets/images/allfood.png")} />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  logoContainer: {
    ...GStyles.shadowContainer,
    alignSelf: "flex-start",
    backgroundColor: colors.secondBg,
    borderRadius: 80,
    padding: 10,
    marginStart: "3%",
    marginTop: 90
  },
  container: {
    zIndex: 2,
    height: 220,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowColor: colors.primary,
    shadowOpacity: 0.2,
    borderBottomColor: colors.primary,
    elevation: 10
  },
  icons: {
    height: 90,
    width: 90
  }
});
