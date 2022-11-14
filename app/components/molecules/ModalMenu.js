import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import addIcon from '../../assets/plus.png';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ConstString } from '../../Strings';
import { launchImagePicker } from '../../ImagePicker';

const { width } = Dimensions.get('window');
export const ModalMenu = ({
  Category, isModalVisible, closeModal, addFoodItem, foodItem, updateFoodItem, editorMode = false
}) => {
  const [itemName, setItemName] = useState(!Category ? foodItem.name : '');
  const [itemDesc, setItemDesc] = useState(!Category ? foodItem.desc : '');
  const [itemPrice, setItemPrice] = useState(!Category ? foodItem.price : '');
  const [imageUri, setImageUri] = useState(!Category ? foodItem.image : undefined);
  let reUpload = false;
  const launchImageLibrary = async() => {
    const response = await launchImagePicker();
    //* Exit if response empty *//
    if (!response) {
      return Alert.alert('Please Pick Image in JPG or PNG format',
        '',
        [
          { text: 'Okay' },
        ],
        { cancelable: true }
      );
    }

    //* Exit if there's error *//
    const { errorCode, assets } = response;
    if (errorCode || assets === []) {
      return Alert.alert('Please Pick Image in JPG or PNG format',
        '',
        [
          { text: 'Okay' },
        ],
        { cancelable: true }
      );
    }

    //* Code proccessing *//
    setImageUri(assets[0].uri);
    reUpload = true;
  };
  const addItem = () => {
    if (itemName === '' || itemDesc === '' || imageUri === undefined || itemPrice === '') return alert('Please Complete Input');
    const newItem = {
      desc: itemDesc,
      image: imageUri,
      name: itemName,
      price: itemPrice,
      category: Category ? Category : foodItem.category,
    };
    // If user add new item to menu
    if (Category) return addFoodItem(newItem);

    // User update food item
    //If User change image then upload new image to Firebase storage
    updateFoodItem(ConstString.UPDATE, newItem, reUpload);
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
              <Text style={styles.header}>{'Item Name'}</Text>
              <TextInput
                style={styles.textInput}
                placeholder={'Enter Item Name'}
                value={itemName}
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
                value={itemDesc}
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
                value={itemPrice}
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
    width: width * 0.8,
    height: 180,
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

  modalView: {
    padding: 20,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: width * 0.9,
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
