import {
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

export const Header = ({source, onPress, title}) => {
  return (
    <View style={styles.section}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.icons} source={source} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    maxHeight: width * 0.15,
    alignItems: 'center',
  },
  icons: {
    height: 35,
    width: 35,
    marginStart: 20,
    borderRadius: 40,
  },
});
