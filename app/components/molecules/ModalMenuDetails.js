import React from 'react';
import {
  Dimensions,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import FastImage from 'react-native-fast-image';

import nasiAyam from '../../assets/NasiAyam.jpg';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../Colors';

const { width } = Dimensions.get('window');

export const ModalMenuDetails = ({ closeModal, isModalVisible, foodItem }) => {
  const { image, name, price, desc } = foodItem;
  return (
    <>
      {
        isModalVisible &&
        <SafeAreaView style={styles.screen}>
          <Modal animationType="none"
                 transparent visible={isModalVisible}
                 presentationStyle="overFullScreen">
            <View style={styles.viewWrapper}>
              <View style={styles.modalView}>
                <FastImage
                  resizeMode={FastImage.resizeMode.cover}
                  source={image !== undefined ? {
                    uri: image,
                    priority: FastImage.priority.high,
                  } : nasiAyam}
                  style={
                    {
                      height: 270,
                    }}>

                </FastImage>
                <View style={styles.container}>
                  <Text style={styles.header}>{name}</Text>
                  <Text style={styles.price}>{'RM' + price}</Text>
                  <Text style={styles.desc}>{desc}</Text>
                </View>
                <TouchableOpacity style={{
                  backgroundColor: 'transparent',
                  alignContent: 'center',
                  alignSelf: 'center',
                  paddingTop: 5,
                  minHeight: 30,
                }} onPress={closeModal}>
                  <Text style={{ color: Colors.primaryColor, fontSize: 18, alignSelf: 'center' }}>OK</Text>
                </TouchableOpacity>
                {/*<Button title="OK" color={Colors.primaryColor} onPress={closeModal} />*/}
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      }
    </>
  );
};
const styles = EStyleSheet.create({
  changeButton:
    {
      position: 'absolute',
      left: 0,
      fontWeight: 'bold',
      fontSize: 12,
      color: 'white',
      backgroundColor: '$primaryColor',
      padding: 5,
    },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'normal',
  },
  container: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  icons: {
    height: 20,
    width: 20,
    margin: 10,
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
  },
  modalView: {
    paddingBottom: 10,
    justifyContent: 'center',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: [{ translateX: -(width * 0.4) },
      { translateY: -90 }],
    width: width * 0.8,
    backgroundColor: '$backGroundColor',
    borderRadius: 10,
    shadowOffset: { width: -2, height: 6 },
    shadowColor: EStyleSheet.value('$primaryColor'),
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '$primaryTextColor',
    shadowOffset: { width: -2, height: 1 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  price: {
    color: '$tertiaryTextColor', marginVertical: 5,
    fontSize: 14, fontWeight: 'bold', textAlign: 'justify'
  },
  desc: {
    color: '$tertiaryTextColor', paddingEnd: 5, marginTop: 5,
    fontSize: 14, fontWeight: 'normal', textAlign: 'justify'
  },
});
