import React from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Colors } from '../../Colors';

const { width } = Dimensions.get('window');

export const ModalMenuButton = ({ isModalVisible, onPress }) => {
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
      title: 'Settings',
    },

  ];
  return (
    <>
      {
        { isModalVisible } &&
        <View>
          <Modal animationType="fade"
            transparent visible={isModalVisible}
            presentationStyle="overFullScreen">
            <View style={styles.viewWrapper}>
              <View style={styles.modalView}>
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
            </View>
          </Modal>
        </View>
      }
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.lightPrimaryColor,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    padding: 10,
    color: Colors.primaryTextColor,
    fontWeight: 'normal',
  },
  container: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: Colors.primaryColor,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
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
    padding: 20,
    justifyContent: 'center',
    top: 30,
    radius: 20,
    elevation: 5,
    width: width * 0.5,
    backgroundColor: Colors.greyBackground,
    borderRadius: 7,
  },

});
