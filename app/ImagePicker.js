import * as ImagePicker from 'react-native-image-picker';

export const launchImagePicker = () => {
  try {
    return ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
        maxWidth: 600,
        maxHeight: 300,
        skipBackup: true,
        path: 'images',
      },
      (response) => {
        if (response.didCancel) {
          return 'cancel';
        }
        return response.assets !== undefined ? response.assets[0].uri : response;
      })
  }
  catch(e) {
    return 'Error';
  }
};

