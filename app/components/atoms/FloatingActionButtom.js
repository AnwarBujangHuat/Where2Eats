import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import rouletteIcon from '../../assets/bet.png';

import EStyleSheet from 'react-native-extended-stylesheet';

export const FloatingActionButton = ({onPress}) => {
  return (
    <View style={styles.fab}>
      <TouchableOpacity style={styles.fabContainer} onPress={onPress}>
        <Image
          source={rouletteIcon}
          style={styles.addIcon}
          size={25}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = EStyleSheet.create({
  addIcon: {
    padding: 15,
    height: 50,
    width: 50,
  },
  fabContainer: {
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 40,
    padding: 10,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});
