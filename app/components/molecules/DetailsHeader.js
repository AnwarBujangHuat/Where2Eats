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

export const DetailsHeader = ({ image, back, disabled, rate = false, onPress }) => {
  const changeLogo = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <ImageBackground
          source={image !== undefined ? { uri: image } : addImage}//image ? image : addImage
          style={{ height: '100%', resizeMode: 'cover' }}>
          <View style={styles.rowContainer}>
            <View style={{ width: '80%' }}>
              <BackButton onPress={back}></BackButton>
            </View>
            {rate && <RateLabel rating={4.1} />}
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
    alignContent: 'center',
    marginTop: 20,
  },
  logoContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 80,
    padding: 15,
    marginStart: '3%',
    elevation:5,
    shadowOffset: { width: -2, height: -4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: 60,
  },
  container: {
    height: 200,
    zIndex: 2,
  },
  icons: {
    height: 80,
    width: 80,
  },
});
