import { View } from 'react-native';
import React from 'react';
import { FloatingAction } from 'react-native-floating-action';
import Menu from '../../assets/cheeseburger.png';
import Details from '../../assets/details.png';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../Colors';
import { ConstString } from '../../Strings';

const actions = [
  {
    text: 'Restaurant Details',
    icon: Details,
    name: ConstString.EDIT,
    position: 2,
    color: Colors.primaryTextColor,
    textBackground: Colors.primaryTextColor,
    textColor: 'white',
  },
  {
    text: 'Menu',
    icon: Menu,
    name: ConstString.MENU,
    position: 1,
    color: Colors.primaryTextColor,
    textBackground: Colors.primaryTextColor,
    textColor: 'white',
  },
];
export const ExpandableFloatingButton = ({ onPressItem }) => {
  return (
    <View style={styles.fab}>

      <FloatingAction
        actions={actions}
        tintColor={'#fff'}
        buttonSize={55}
        // floatingIcon={Edit}
        iconWidth={20}
        iconHeight={20}
        color={Colors.primaryTextColor}
        onPressItem={onPressItem}
      />
    </View>
  );
};
const styles = EStyleSheet.create({
  fabContainer: {
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 40,
    padding: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: -10,
  }
});
