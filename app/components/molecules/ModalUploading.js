import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import logoIcon from '../../assets/Logo.png';
import locationIcon from '../../assets/location.png';

import { ConstFoodCategory } from '../../screens/home/ConstFoodCategory';
import EStyleSheet from 'react-native-extended-stylesheet';
import LottieView from 'lottie-react-native';
import Uploading from '../../assets/uploading.json';

const { width } = Dimensions.get('window');
export const ModalUploading = ({ isModalVisible, closeModal, isFinished }) => {
  return (
    <>
      {
        isModalVisible &&
        <SafeAreaView style={styles.screen}>
          <Modal animationType="none"
                 transparent visible={isModalVisible}
                 presentationStyle="overFullScreen"
          >
            <View style={styles.viewWrapper}>
              <View style={styles.modalView}>
                <LottieView style={styles.lottieButton} source={Uploading} autoPlay={true}
                />
                <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
                  <Text style={styles.header}>{"Uploading"}</Text>
                </View>

                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                  <TouchableOpacity
                    style={styles.button}
                    >
                    <Text style={styles.buttonTextSpin}>{isFinished ? 'Spin Again' : 'Go Back'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonVisit}
                    >
                    <Text style={styles.buttonTextMenu}>Visit Restaurant</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.logoContainer}>
                <Image style={styles.logoIcon} source={logoIcon} />
              </TouchableOpacity>
            </View>
          </Modal>
        </SafeAreaView>
      }
    </>
  );
};
const styles = EStyleSheet.create({
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
  container: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  icon: {

    alignSelf: 'center',
    marginTop: 5,
    marginEnd: 5,
  },
  lottieButton:{
    width: 200,
    height: 200,
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
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '$primaryColor',
  },
  modalView: {
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    top: '35%',
    left: '50%',
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) },
      { translateY: -90 }],
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '$primaryColor',
    shadowOffset: { width: -2, height: 1 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    paddingStart: 10,
    width: '90%'
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
