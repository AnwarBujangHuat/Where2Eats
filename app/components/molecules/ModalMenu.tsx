import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";
import { ConstString } from "../../configs/Strings";
import { launchImagePicker } from "../../ImagePicker";
import { colors } from "../../configs/Const";
import { GStyles } from "../../configs/styles";

const { width } = Dimensions.get("window");
export type image = {
  fileName: string,
  type: string,
  uri: string,
  request: number,
};

export const ModalMenu = ({
                            Category,
                            isModalVisible,
                            closeModal,
                            addFoodItem,
                            foodItem,
                            updateFoodItem
                          }) => {
  const [itemName, setItemName] = useState(!Category ? foodItem.name : "");
  const [itemDesc, setItemDesc] = useState(!Category ? foodItem.desc : "");
  const [itemPrice, setItemPrice] = useState(!Category ? foodItem.price : "");
  const [imageUri, setImageUri] = useState(
    !Category ? foodItem.image : undefined
  );
  let reUpload = false;
  const showErrorAlert = ({ message }) => {
    Alert.alert("Error", message, [{ text: "Okay" }], { cancelable: true });
  };
  const launchImageLibrary = async () => {
    const { uri, fileName, type, request }: image = await launchImagePicker();
    //* Exit if response empty *//
    if (!request) {
      return showErrorAlert({
        message: "Please Pick Image in JPG or PNG format"
      });
    }

    //* Exit if there's error *//
    if (type !== "image/jpg" && type !== "image/png" && type !== "image/gif") {
      return showErrorAlert({
        message: "Please Pick Image in JPG or PNG format"
      });
    }
    setImageUri(uri);
    reUpload = true;
  };
  const addItem = () => {
    if (
      itemName === "" ||
      itemDesc === "" ||
      imageUri === undefined ||
      itemPrice === ""
    ) {
      return showErrorAlert({ message: "Please Complete Input" });
    }

    if (/[a-zA-Z]/.test(itemPrice)) {
      return showErrorAlert({ message: "Please Ensure Price is Only Numbers" });
    }

    const newItem = {
      desc: itemDesc,
      image: imageUri,
      name: itemName,
      price: itemPrice,
      category: Category ? Category : foodItem.category
    };
    // If user add new item to menu
    if (Category) {
      return addFoodItem(newItem);
    }

    // User update food item
    //If User change image then upload new image to Firebase storage
    updateFoodItem(ConstString.UPDATE, newItem, reUpload);
  };
  return (
    <>
      {{ isModalVisible } && (
        <SafeAreaView style={styles.screen}>
          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => closeModal()}
            onDismiss={closeModal}>
            <View style={styles.modalView}>
              <Text style={styles.header}>{"Item Name"}</Text>
              <TextInput
                style={styles.textInput}
                placeholder={"Enter Item Name"}
                value={itemName}
                clearButtonMode={"always"}
                placeholderTextColor={colors.white}
                onChangeText={setItemName}
                keyboardAppearance="dark"
                autoCorrect={false}
              />
              <Text style={styles.header}>{"Description"}</Text>
              <TextInput
                style={styles.descriptionInput}
                placeholder={"Enter Description"}
                multiline={true}
                value={itemDesc}
                onChangeText={setItemDesc}
                placeholderTextColor={colors.white}
                keyboardAppearance="dark"
                autoCorrect={false}
              />
              <Text style={styles.header}>{"Price"}</Text>
              <TextInput
                style={styles.textInput}
                placeholder={"Enter Price RM"}
                clearButtonMode={"always"}
                value={itemPrice}
                placeholderTextColor={colors.white}
                onChangeText={setItemPrice}
                keyboardType={"numeric"}
                keyboardAppearance="dark"
                autoCorrect={false}
              />
              <Text style={styles.header}>{"Add Image"}</Text>
              <TouchableOpacity
                onPress={launchImageLibrary}
                style={styles.container}>
                {imageUri === undefined ? (
                  <Image style={styles.icons} source={require("../../assets/images/plus.png")} />
                ) : (
                  <View>
                    <Image style={styles.image} source={{ uri: imageUri }} />
                    <Text style={styles.changeButton}>Change Image</Text>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={addItem}>
                <Text style={styles.buttonText}>Add Item</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </SafeAreaView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  changeButton: {
    position: "absolute",
    left: 0,
    fontWeight: "bold",
    fontSize: 12,
    color: colors.primary,
    backgroundColor: colors.secondBg,
    padding: 5
  },
  button: {
    backgroundColor: colors.primary,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    textTransform: "uppercase",
    marginTop: 15
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "normal"
  },
  container: {
    ...GStyles.shadowContainer,
    backgroundColor: colors.primary,
    alignSelf: "flex-start",
    borderRadius: 10,
    marginTop: 10
  },
  image: {
    width: width * 0.8,
    height: 180,
    borderRadius: 10
  },

  icons: {
    height: 20,
    width: 20,
    margin: 10
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  modalView: {
    ...GStyles.shadowContainer,
    padding: 20,
    justifyContent: "center",
    position: "absolute",
    alignSelf: "center",
    width: width * 0.9,
    borderRadius: 7
  },
  textInput: {
    fontSize: 14,
    fontWeight: "normal",
    borderWidth: 1,
    color: colors.white,
    borderBottomColor: colors.primary,
    borderColor: colors.secondBg,
    textAlignVertical: "center",
    backgroundColor: colors.secondBg,
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 15
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.lightPurple,
    shadowOffset: { width: -2, height: 1 },
    shadowColor: colors.primary,
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  descriptionInput: {
    fontSize: 14,
    fontWeight: "normal",
    borderWidth: 1,
    borderBottomColor: colors.primary,
    color: colors.white,
    borderColor: colors.bg,
    textAlignVertical: "center",
    backgroundColor: colors.secondBg,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15
  }
});
