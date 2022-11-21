import React from 'react';
import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { DetailsHeader } from '../../components/molecules/DetailsHeader';
import { Const } from '../../Const';
import { ImageButton } from '../../components/atoms/ImageButton';
import { InputField } from '../../components/atoms/InputField';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Location } from '../location';
import { ModalMenuDetails } from '../../components/molecules/ModalMenuDetails';

export const RegisterComponents = props => {
  const {
    selectedTypes,
    restaurantName,
    restaurantDesc,
    restaurantLocation,
    initialIndex,
    goToMenu,
    goBack,
    setName,
    setDescription,
    categorySelected,
    launchImageLibrary,
    imageUri,
    updateRestaurantInfo,
    editorMode,
    locationPicker,
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <DetailsHeader back={goBack} disabled={false} onPress={launchImageLibrary} image={imageUri} />
      <View style={styles.inputContainer}>
        <Text style={styles.header}>{'Restaurant Name'}</Text>
        <InputField placeholder={'Please Input Name'} multiline={false} onChange={(text) => setName(text)} value={restaurantName} />
        <Text style={styles.header}>{'Description'}</Text>
        <InputField placeholder={'Please Input Description'} multiline={true}
                    onChange={(text) => setDescription(text)} value={restaurantDesc}/>
        <Text style={styles.header}>{'Category'}</Text>
        <FlatList
          style={{ maxHeight: 60 }}
          data={Const}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              Const.current?.scrollToIndex({index: info.index, animated: true });
            });
          }}
          initialScrollIndex={initialIndex??0}
          renderItem={({ item }) => {
            return (
              <ImageButton item={item} onPress={() => categorySelected({ item })} selected={selectedTypes} />
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.header}>{'Location'}</Text>
        <TouchableOpacity
          style={styles.buttonLocation}
          onPress={locationPicker}>
          <Text style={{ color: EStyleSheet.value('$primaryColor'), fontWeight: 'bold' }}>Location</Text>
        </TouchableOpacity>
        <Text style={styles.desc}>{restaurantLocation}</Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableOpacity
          style={styles.button}
          onPress={editorMode?updateRestaurantInfo:goToMenu}>
          <Text style={styles.buttonText}>{editorMode?"Update Restaurant Info":"goToMenu"}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};
const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$backGroundColor',
    flex: 1,
  },
  descriptionInput: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderBottomColor: '$primaryColor',
    borderColor: 'white',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '$primaryTextColor',
    shadowOffset: { width: -2, height: 2 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: '$lightPrimaryColor',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    width: Dimensions.get('screen').width - 30,
    textTransform: 'uppercase',
    bottom: 10,
    // position: 'absolute',
    marginHorizontal: 15,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonLocation: {
    borderColor: '$lightPrimaryColor',
    borderWidth: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    textTransform: 'uppercase',
  },
  inputContainer: {
    marginTop: 30,
    height: '60%',
    marginHorizontal: 15,
  },
  desc: {
    color: '$secondaryTextColor',
    paddingTop: 5,
    fontSize: 12,
    marginVertical: 5,
  },
});
