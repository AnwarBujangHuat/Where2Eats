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
import addIcon from '../../assets/plus.png';
import * as ImagePicker from 'react-native-image-picker';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width } = Dimensions.get('window');

export const ModalMenu = props => {
  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [imageUri, setImageUri] = useState(undefined);

  const { selectedCategory, Category, isModalVisible, closeModal, setFinalMenu } = props;

  const launchImageLibrary = () => {
    ImagePicker.launchImageLibrary({
      storageOptions: {
        quality:1,
        maxWidth: 600,
        maxHeight: 300,
        allowsEditing: false,
        skipBackup: true,
        saveToPhotos: true,
        path: 'images',
      },
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        setImageUri(response.assets[0].uri);
      }
    }).then();
  };
  const addItem = () => {
    if (itemName === '' && itemDesc === '') return alert('Please Complete Input');
    const menu = selectedCategory.filter(restaurant => restaurant.item === Category);
    const tempMenu = selectedCategory.filter(restaurant => restaurant.item !== Category);
    const newItem = {
      desc: itemDesc,
      image: imageUri,
      name: itemName,
      price: itemPrice,
    };
    menu[0].data = [...menu[0].data, newItem];
    //update whole Menu
    const finalMenu = [...tempMenu, menu[0]];
    setFinalMenu(finalMenu);
    closeModal();
  };
  return (
    <>
      {
        { props } &&
        <SafeAreaView style={styles.screen}>
          <Modal animationType="slide"
                 transparent visible={isModalVisible}
                 presentationStyle="overFullScreen">
            <View style={styles.viewWrapper}>
              <View style={styles.modalView}>
                <Text style={styles.header}>{'Item Name'}</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Enter Item Name'}
                  clearButtonMode={'always'}
                  placeholderTextColor={EStyleSheet.value('$secondaryTextColor')}
                  onChangeText={setItemName}
                  overflow="hidden"
                  keyboardAppearance="dark"
                  autoCorrect={false} />
                <Text style={styles.header}>{'Description'}</Text>
                <TextInput
                  style={styles.descriptionInput}
                  placeholder={'Enter Description'}
                  multiline={true}
                  onChangeText={setItemDesc}
                  placeholderTextColor={EStyleSheet.value('$secondaryTextColor')}
                  overflow="hidden"
                  keyboardAppearance="dark"
                  autoCorrect={false} />
                <Text style={styles.header}>{'Price'}</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Enter Price RM'}
                  clearButtonMode={'always'}
                  placeholderTextColor={EStyleSheet.value('$secondaryTextColor')}
                  onChangeText={setItemPrice}
                  keyboardType={'numeric'}
                  overflow="hidden"
                  keyboardAppearance="dark"
                  autoCorrect={false} />
                <Text style={styles.header}>{'Add Image'}</Text>
                <TouchableOpacity onPress={launchImageLibrary} style={styles.container}>
                  {imageUri === undefined ? <Image style={styles.icons} source={addIcon} /> :
                    <View>
                      <Image style={styles.image} source={{ uri: imageUri, }} />
                      <Text style={styles.changeButton}>Change Image</Text>
                    </View>}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={addItem}>
                  <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
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
      color: '$primaryTextColor',
      backgroundColor: '$secondaryBackGroundColor',
      padding: 5,
    },
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
    backgroundColor: '$backGroundColor',
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
    shadowOffset: { width: -2, height: 1 },
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
