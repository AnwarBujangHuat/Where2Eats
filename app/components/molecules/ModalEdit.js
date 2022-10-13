import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Colors } from '../../Colors';
const { width } = Dimensions.get('window');

export const ModalEdit = ({ isModalVisible, CloseModal, onDone, Title, setUpdatedInfo }) => {

  return (
    <>
      {
        isModalVisible &&
        <SafeAreaView style={styles.screen}>
          <Modal animationType="slide"
            transparent visible={isModalVisible}
            presentationStyle="overFullScreen">
            <View style={styles.viewWrapper}>
              <View style={styles.modalView}>
                <Text style={styles.header}>{'Change ' + Title}</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Enter ' + Title}
                  clearButtonMode={'always'}
                  placeholderTextColor={Colors.secondaryTextColor}
                  onChangeText={(text) => setUpdatedInfo(text)}
                  overflow="hidden"
                  keyboardAppearance="dark"
                  autoCorrect={false} />
                <View style={{
                  flexDirection: 'row',
                }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={CloseModal}>
                    <Text style={styles.buttonTextSpin}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonVisit}
                    onPress={onDone}>
                    <Text style={styles.buttonTextMenu}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      }
    </>

  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondaryBackGroundColor,
    alignItems: 'center',
    padding: 5,
    width: '50%',
    borderColor: Colors.secondaryBackGroundColor,
    borderRightColor: Colors.primaryColor,
    borderWidth: .5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  buttonVisit: {
    backgroundColor: Colors.secondaryBackGroundColor,
    alignItems: 'center',
    padding: 5,
    width: '50%',
    borderColor: Colors.secondaryBackGroundColor,
    borderWidth: .5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  buttonTextSpin: {
    fontSize: 16,
    color: Colors.tertiaryColor,
    fontWeight: 'normal',
  },
  buttonTextMenu: {
    fontSize: 16,
    color: Colors.primaryColor,
    fontWeight: 'normal',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: -2, height: 2 },
    shadowColor: Colors.primaryColor,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  modalView: {
    padding: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: '30%',
    left: '50%',
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) },
    { translateY: -90 }],
    width: width * 0.8,
    backgroundColor: Colors.secondaryBackGroundColor,
    borderRadius: 7,
  },
  textInput: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    color: Colors.secondaryTextColor,
    borderBottomColor: Colors.primaryColor,
    borderColor: Colors.backGroundColor,
    textAlignVertical: 'center',
    backgroundColor: Colors.secondaryBackGroundColor,
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 15,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.tertiaryColor,
    shadowOffset: { width: -2, height: 1 },
    shadowColor: Colors.primaryColor,
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  descriptionInput: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    borderBottomColor: Colors.primaryColor,
    color: Colors.secondaryTextColor,
    borderColor: Colors.backGroundColor,
    textAlignVertical: 'center',
    backgroundColor: Colors.secondaryBackGroundColor,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15,
  },
});
