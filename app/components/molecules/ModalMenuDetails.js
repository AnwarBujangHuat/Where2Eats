import React from 'react';
import {
  Button,
  Dimensions,
  ImageBackground,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import nasiAyam from '../../assets/NasiAyam.jpg';
import EStyleSheet from 'react-native-extended-stylesheet';

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
                <ImageBackground
                  source={image !== undefined ? { uri: image } : nasiAyam}
                  style={
                    {
                      height: 200,
                      resizeMode: 'contain',
                    }}>
                </ImageBackground>
                <View style={styles.container}>
                  <Text style={styles.header}>{name}</Text>
                  <Text style={styles.price}>{'RM' + price}</Text>
                  <Text style={styles.desc}>{desc}</Text>
                </View>
                <Button title="OK" color={EStyleSheet.value('$primaryColor')} onPress={closeModal} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: -2, height: 10 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  modalView: {
    paddingBottom: 10,
    justifyContent: 'center',
    position: 'absolute',
    top: '30%',
    left: '50%',
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) },
      { translateY: -90 }],
    width: width * 0.8,
    backgroundColor: '$backGroundColor',
    borderRadius: 10
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
