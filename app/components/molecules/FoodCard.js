import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import nasiAyam from '../../assets/salad.jpg';

export const FoodCard = ({ onPress, name, price, image, desc }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <View>
            <ImageBackground
              source={image !== undefined ? { uri: image } : nasiAyam}//image ? image : addImage
              style={
                {
                  height: 150,
                  resizeMode: 'contain',
                }}>
              <View style={styles.containerPrice}>
                <Text style={styles.textPrice}>{'RM ' + price}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text numberOfLines={3} style={styles.desc}>{desc}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>

  );
};
const styles = EStyleSheet.create(
  {
    iconCategory: {
      width: 25,
      height: 25,
      alignSelf: 'center'
    },
    container: {
      justifyContent: 'center',
      margin: 10,
      shadowOffset: { width: -2, height: 4 },
      shadowColor: '$primaryColor',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
    },
    card: {
      backgroundColor: '$secondaryBackGroundColor',
      borderRadius: 10,
      width: 220,
      height: 250,
      alignSelf: 'baseline',
      overflow: 'hidden',
      paddingBottom: 10,
      shadowOffset: { width: -2, height: 4 },
      shadowColor: '$primaryColor',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    titleContainer: {
      padding: 10,
    },
    desc: {
      color: '$secondaryTextColor', paddingTop: 5,
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
    containerPrice: {
      flexDirection: 'row',
      borderRadius: 20,
      margin: 5,
      paddingHorizontal: 5,
      paddingVertical: 5,
      backgroundColor: '$backGroundColor',
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginStart: 10,
      marginTop: 5,
    },
    textPrice: {
      padding: 2,
      color: '$secondaryTextColor',
      fontWeight: 'bold',
      fontSize: 12,
    },

  });
