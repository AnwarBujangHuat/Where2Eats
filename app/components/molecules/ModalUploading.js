import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';

import Uploading from '../../assets/uploading.json';
import Sleepy from '../../assets/sleepycat.json';
import { ConstString } from '../../Strings';

const { width } = Dimensions.get('window');
let icon;
let text;
let showButton = false;
export const ModalUploading = ({ isModalVisible, closeModal, goBack, action }) => {
  if (action === ConstString.GO_BACK) {
    icon = Sleepy;
    text = 'All Your Progress in This Page Will Be Lost';
    showButton = true;
  } else {
    icon = Uploading;
    text = 'Please Wait While We Upload your Photos';
    showButton = false;
  }
  return (
    <>
      {
        isModalVisible &&
        <SafeAreaView style={styles.screen}>
          <Modal animationType="none"
                 transparent visible={isModalVisible}
                 onDismiss={closeModal}
                 style={styles.viewWrapper}>

            <View style={styles.modalView}>
              <LottieView style={styles.lottieButton} source={icon} autoPlay={true}
              />
              <Text style={styles.header}>{text}</Text>
              {showButton &&
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                  <TouchableOpacity style={styles.button} onPress={goBack}>
                    <Text style={styles.buttonTextGoBack}>Go Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonVisit} onPress={closeModal}>
                    <Text style={styles.buttonTextStay}>Stay</Text>
                  </TouchableOpacity>
                </View>
              }
            </View>
          </Modal>
        </SafeAreaView>
      }
    </>
  );
};
const styles = EStyleSheet.create({
  buttonTextGoBack: {
    fontSize: 16,
    color: '$tertiaryColor',
    fontWeight: 'normal',
  },
  buttonTextStay: {
    fontSize: 16,
    color: '$primaryColor',
    fontWeight: 'normal',
  },
  container: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  icon: {

    alignSelf: 'center',
    marginTop: 5,
    marginEnd: 5,
  },
  lottieButton: {
    width: width * .6,
    height: width * .6,
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
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: -2, height: 2 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  modalView: {
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: width * 0.8,
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 10
  },
  button: {
    backgroundColor: '$secondaryBackGroundColor',
    alignItems: 'center',
    padding: 5,
    width: '50%',
    borderColor: '$secondaryBackGroundColor',
    borderRightColor: '$primaryColor',
    borderWidth: .5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  buttonVisit: {
    backgroundColor: '$secondaryBackGroundColor',
    alignItems: 'center',
    padding: 5,
    width: '50%',
    borderColor: '$secondaryBackGroundColor',
    borderWidth: .5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  header: {
    fontSize: 17,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$primaryColor',
    width: width * .7
  },
  desc: {
    color: '$tertiaryTextColor', paddingEnd: 5, marginTop: 5,
    fontSize: 14, fontWeight: 'normal', textAlign: 'justify'
  },
  descContainer: { paddingHorizontal: 10, },
  logoIcon: {
    height: 60,
    width: 60,
  },
  iconCategory: {
    width: 20,
    height: 20,
    alignSelf: 'center'
  },
  containerIcon: {
    flexDirection: 'row',
    marginTop: 5,
  },
});
