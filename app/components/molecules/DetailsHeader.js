import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import { BackButton } from '../atoms/BackButton';
import addImage from '../../assets/addImage.png';
import logoIcon from '../../assets/Logo.png';

import { RateLabel } from '../atoms/RateLabel';
import { Colors } from '../../Colors';

export const DetailsHeader = ({ image, back, disabled, rating,rate = false, onPress ,goToRating}) => {
  const changeLogo = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <ImageBackground
          source={image !== undefined ? { uri: image } : addImage}//image ? image : addImage
          style={{
            height: '100%', resizeMode: 'cover'
          }}>
          <View style={styles.rowContainer}>
            <View style={{ width: '80%' }}>
              <BackButton onPress={back}></BackButton>
            </View>
            {rate && <RateLabel rating={rating} goToRating={goToRating} />}
          </View>
          <TouchableOpacity style={styles.logoContainer} disabled={disabled} onPress={changeLogo}>
            <Image style={styles.icons} source={logoIcon} />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  logoContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 80,
    padding: 15,
    marginStart: '3%',
    elevation: 5,
    shadowOffset: { width: -2, height: -4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: 90,
  },
  container: {
    height: 220,
    zIndex: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: Colors.primaryColor,
    shadowOpacity: .2,
    borderBottomColor: Colors.primaryColor,
    elevation: 10,
  },
  icons: {
    height: 80,
    width: 80,
  },
});
