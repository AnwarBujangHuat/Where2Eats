import * as React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { RateLabel } from '../atoms/RateLabel';
import locationIcon from '../../assets/location.png';
import res1 from '../../assets/res1.jpg';
import { ConstFoodCategory } from '../../screens/home/ConstFoodCategory';
import { Colors } from '../../Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import addImage from '../../assets/addImage.png';
import { firebase } from '../../../src/firebase/config';
let imageUrl;
export const RestaurantCard = ({ onPress, name, category, address, description, rate, image }) => {
  const findIcon = () => {
    const icon = ConstFoodCategory.find(icons => icons.title === (category !== null ? category : 'Western'));
    try {return icon.icon;}
    catch(Exception) {return ConstFoodCategory[0].icon;}
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <View>
            <ImageBackground
              source={image!==undefined?{uri:image}:addImage}//image ? image : addImage
              style={{ height: 140, marginBottom: 5, resizeMode: 'contain', }}>
              <RateLabel rating={rate} />
            </ImageBackground>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>{category + ' - ' + description}</Text>
              <View style={styles.containerIcon}>
                <Image style={styles.icon} source={locationIcon} />
                <Text style={styles.desc}>{address}</Text>
              </View>
            </View>
            <Image source={findIcon()}
                   style={styles.iconCategory} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>

  );
};
const styles = EStyleSheet.create(
  {
    icon: {
      width: 11,
      height: 11,
      alignSelf: 'center',
      marginTop: 5,
      marginEnd: 5,
    },
    iconCategory: {
      width: 25,
      height: 25,
      alignSelf: 'center'
    },
    container: {
      justifyContent: 'center',
      margin: 15,
      shadowOffset: { width: -2, height: 4 },
      shadowColor: '$primaryColor',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
    },
    card: {
      backgroundColor: '$secondaryBackGroundColor',
      borderRadius: 10,
      width: Dimensions.get('screen').width - 30,
      overflow: 'hidden',
      paddingBottom: 10,

    },
    titleContainer: {
      padding: 10,
      width: '90%'
    },
    desc: {
      color: '$secondaryTextColor',
      paddingTop: 5,
      fontSize: 12,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '$primaryTextColor',
    },
    containerIcon: {
      flexDirection: 'row',
      marginTop: 5,
    },
  });
