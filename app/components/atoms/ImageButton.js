import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../configs/Const';
import {GStyles} from '../../Styles';

export const ImageButton = ({onPress, item, selected}) => {
  let backGroundColor = selected.includes(item.title)
    ? colors.primary
    : colors.secondBg;
  let color = selected.includes(item.title) ? colors.white : colors.primary;
  return (
    <View>
      <TouchableOpacity
        style={{...styles.buttonContainer, backgroundColor: backGroundColor}}
        onPress={onPress}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={{...styles.text, color: color}}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    padding: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    ...GStyles.shadowContainer,
    flexDirection: 'row',
    borderRadius: 20,
    margin: 5,
    padding: 10,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
