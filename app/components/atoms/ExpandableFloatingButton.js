import {View} from 'react-native';
import React from 'react';
import {FloatingAction} from 'react-native-floating-action';
import Menu from '../../assets/cheeseburger.png';
import Details from '../../assets/details.png';
import Edit from '../../assets/edit.png';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../configs/Colors';
import {ConstString} from '../../configs/Strings';

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
export const ExpandableFloatingButton = ({onPressItem}) => {
  return (
    <View style={styles.fab}>
      <FloatingAction
        actions={actions}
        buttonSize={60}
        floatingIcon={Edit}
        iconWidth={28}
        iconHeight={28}
        color={Colors.primaryTextColor}
        onPressItem={item => onPressItem({item})}
      />
    </View>
  );
};
const styles = EStyleSheet.create({
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
    bottom: 20,
    right: -10,
  },
});
