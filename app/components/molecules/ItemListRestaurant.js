import * as React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ConstFoodCategory } from '../../screens/home/ConstFoodCategory';
import { Colors } from '../../Colors';

export const ItemListRestaurant = ({ onPress, name, category, index }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{index + 1 + '. ' + name}</Text>
            </View>
            <Image source={ConstFoodCategory.find(icons => icons.title === category).icon}
              style={styles.iconCategory} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>

  );
};
const styles = StyleSheet.create(
  {
    iconCategory: {
      width: 20,
      height: 20,
      alignSelf: 'center'
    },
    container: {
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 5,
      alignSelf: 'center',
      shadowOffset: { width: -2, height: 4 },
      shadowColor: Colors.primaryColor,
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
    },
    card: {
      backgroundColor: Colors.secondaryBackGroundColor,
      borderRadius: 10,
      width: Dimensions.get('screen').width - 50,
      overflow: 'hidden',
      padding: 5,
    },
    titleContainer: {
      padding: 10,
      width: '90%'
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: Colors.secondaryTextColor,
    },
    containerIcon: {
      flexDirection: 'row',
      marginTop: 5,
    },
  });
