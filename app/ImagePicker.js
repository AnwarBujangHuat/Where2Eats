import * as ImagePicker from 'react-native-image-picker';

export const launchImagePicker = async() => {
  let result = '';
  try {
    await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      maxWidth: 600,
      maxHeight: 300,
      skipBackup: true,
      path: 'images',
    }, (response) => {
      if (response.didCancel) {
        result = 'cancel';
      } else {
        result = response.assets[0].uri;
      }
    }).then();
  }
  catch(e) {
    result = 'error';
  }
  return result;
};

