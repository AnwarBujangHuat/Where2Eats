import * as React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { icons } from '../../Const';
import EStyleSheet from 'react-native-extended-stylesheet';

export const ItemListRestaurant = ({ onPress, name, category, index }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{index + 1 + '. ' + name}</Text>
            </View>
            <Image source={category ? icons[category] : icons.def}
                   style={styles.iconCategory} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>

  );
};
const styles = EStyleSheet.create(
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
      shadowColor: '$primaryColor',
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    card: {
      backgroundColor: '$secondaryBackGroundColor',
      borderRadius: 10,
      width: Dimensions.get('screen').width - 50,
      overflow: 'hidden',
      padding: 5,
      shadowOffset: { width: -2, height: 6 },
      shadowColor: EStyleSheet.value('$primaryColor'),
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    titleContainer: {
      padding: 10,
      width: '90%'
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '$secondaryTextColor',
    },
    containerIcon: {
      flexDirection: 'row',
      marginTop: 5,
    },
  });
