import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import backButton from '../../assets/back.png';
import EStyleSheet from 'react-native-extended-stylesheet';

export const BackButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.icons} source={backButton} />
      </TouchableOpacity>
    </View>

  );
};
const styles = EStyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 40,
    padding: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    marginStart: 20,
  },
  icons: {
    height: 20,
    width: 20,
  },
});
