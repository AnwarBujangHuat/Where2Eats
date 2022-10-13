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

export const DetailsHeader = ({ image, back, disabled, rate = false }) => {
  const changeLogo = () => {};
  const changeImage = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeImage} disabled={disabled}>
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
    marginTop: 40,
  },
  logoContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 80,
    padding: 15,
    marginStart: '3%',
    shadowOffset: { width: -2, height: -4 },
    shadowColor: Colors.primaryColor,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: '25%',
  },
  container: {
    height: '30%',
    zIndex: 2,
  },
  icons: {
    height: 80,
    width: 80,
  },
});
