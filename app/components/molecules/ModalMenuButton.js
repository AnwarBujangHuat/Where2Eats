import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';

import EStyleSheet from 'react-native-extended-stylesheet';

const { width } = Dimensions.get('window');

export const ModalMenuButton = ({ isModalVisible, onPress,closeModal}) => {
  const MENU_OPTIONS = [
    {
      id: 1,
      title: 'Register New Restaurant',
    },
    {
      id: 2,
      title: 'Profile',
    },
    {
      id: 3,
      title: 'Log Out',
    },

  ];
  return (
    <>
      {
        { isModalVisible } &&
        <SafeAreaView>
          <Modal animationType="fade"
                 transparent visible={isModalVisible}
                 style={{position:'absolute',
                   top:20,
                   left:-10,
                 }}
                 onBackdropPress={()=>closeModal()}
                 >
            <View
              style={styles.modalView}>
                <FlatList
                  data={MENU_OPTIONS}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => onPress(item.id)}>
                        <Text style={styles.buttonText}>{item.title}</Text>
                      </TouchableOpacity>
                    );
                  }}
                  showsHorizontalScrollIndicator={false} />
              </View>
          </Modal>
        </SafeAreaView>
      }
    </>
  );
};
const styles = EStyleSheet.create({
  button: {
    backgroundColor: '$lightPrimaryColor',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    padding: 10,
    color: '$primaryTextColor',
    fontWeight: 'normal',
  },
  image: {
    width: width * 0.7
    , height: 150,
    borderRadius: 10,
  },

  icons: {
    height: 20,
    width: 20,
    margin: 10,

  },
  modalView: {
    paddingVertical: 20,
    justifyContent: 'center',
    radius: 20,
    elevation: 5,
    backgroundColor: '$ModalBackground',
    borderRadius: 7,
  },

});
