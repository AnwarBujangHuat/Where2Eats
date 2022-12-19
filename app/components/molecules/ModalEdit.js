import React from 'react';
import {
  Dimensions,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {width} = Dimensions.get('window');

export const ModalEdit = ({
  isModalVisible,
  closeModal,
  onDone,
  Title,
  setUpdatedInfo,
}) => {
  return (
    <>
      {isModalVisible && (
        <SafeAreaView style={styles.screen}>
          <Modal
            animationType="slide"
            transparent
            visible={isModalVisible}
            presentationStyle="overFullScreen">
            <View style={styles.viewWrapper}>
              <View style={styles.modalView}>
                <Text style={styles.header}>{'Change ' + Title}</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Enter ' + Title}
                  clearButtonMode={'always'}
                  placeholderTextColor={EStyleSheet.value(
                    '$secondaryTextColor',
                  )}
                  onChangeText={text => setUpdatedInfo(text)}
                  overflow="hidden"
                  keyboardAppearance="dark"
                  autoCorrect={false}
                />
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={styles.button} onPress={closeModal}>
                    <Text style={styles.buttonTextSpin}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonVisit} onPress={onDone}>
                    <Text style={styles.buttonTextMenu}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      )}
    </>
  );
};
const styles = EStyleSheet.create({
  button: {
    backgroundColor: '$secondaryBackGroundColor',
    alignItems: 'center',
    padding: 5,
    width: '50%',
    borderColor: '$secondaryBackGroundColor',
    borderRightColor: '$primaryColor',
    borderWidth: 0.5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  buttonVisit: {
    backgroundColor: '$secondaryBackGroundColor',
    alignItems: 'center',
    padding: 5,
    width: '50%',
    borderColor: '$secondaryBackGroundColor',
    borderWidth: 0.5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  buttonTextSpin: {
    fontSize: 16,
    color: '$tertiaryColor',
    fontWeight: 'normal',
  },
  buttonTextMenu: {
    fontSize: 16,
    color: '$primaryColor',
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
    shadowOffset: {width: -2, height: 2},
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  modalView: {
    padding: 20,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: width * 0.8,
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 7,
  },
  textInput: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    color: '$secondaryTextColor',
    borderBottomColor: '$primaryColor',
    borderColor: '$backGroundColor',
    textAlignVertical: 'center',
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 15,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$tertiaryColor',
    shadowOffset: {width: -2, height: 1},
    shadowColor: '$primaryColor',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  descriptionInput: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    borderBottomColor: '$primaryColor',
    color: '$secondaryTextColor',
    borderColor: '$backGroundColor',
    textAlignVertical: 'center',
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15,
  },
});
