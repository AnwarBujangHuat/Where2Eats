import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import EStyleSheet from 'react-native-extended-stylesheet';
import GooglePlacesInput from '../../GooglePlacesInput';
import MapView from 'react-native-maps';

const { width } = Dimensions.get('window');

export const ModalLocation = ({ submitLocation, isModalVisible, closeModal }) => {
  const [location, setLocation] = useState('Restaurant Location');
  const mapRef = React.createRef();
  const onResult = ({ data, details }) => {
    const { location } = details.geometry;
    const latitude = location.lat;
    const longitude = location.lng;
    mapRef.current.animateToRegion({
      latitude,
      longitude,
      // latitudeDelta: 0.0005,
      // longitudeDelta: 0.0005
      latitudeDelta: 0.0009,
      longitudeDelta: 0.0009
    })
    setLocation(data.description);

  };
  return (
    <>
      {
        { isModalVisible } &&
        <SafeAreaView style={styles.screen}>
          <Modal animationType="slide"
                 transparent visible={isModalVisible}
                 onBackdropPress={() => closeModal()}
                 onDismiss={closeModal}>
            <View style={styles.modalView}>
                <View style={{width:300,height:400, zIndex:2,alignSelf:'center'}}>
                  <Text style={styles.header}>{'Pick Restaurant Location'}</Text>
                  <Text style={styles.desc}>{location}</Text>
                  <GooglePlacesInput onResult={onResult} />
                </View>

              <MapView
                style={{ height: 280, width: 300, zIndex: 0,alignSelf:'center', position: 'absolute' }}
                //specify our coordinates.
                ref={mapRef}
                initialRegion={{
                  latitude: 6.86,
                  longitude: 6.86,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                liteMode={true}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => submitLocation(location)}>
                <Text style={styles.buttonText}>Add Location</Text>
              </TouchableOpacity>


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
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'normal',
  },
  container: {
    alignSelf: 'flex-start',
    backgroundColor: '$primaryColor',
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    marginBottom:0,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  modalView: {
    padding: 20,
    // height:width*.3,
    height: 500,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: width * 0.9,
    backgroundColor: '$backGroundColor',
    // backgroundColor: '$primaryColor',
    borderRadius: 7,
  },

  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$tertiaryColor',
    marginBottom: 5,
  },
  desc: {
    color: '$secondaryTextColor',
    paddingTop: 5,
    fontSize: 14,
    marginBottom: 10,
  },
});
