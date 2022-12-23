import * as ImagePicker from 'react-native-image-picker';

export const launchImagePicker = () =>
  new Promise((resolve, reject) => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        maxWidth: 600,
        maxHeight: 300,
        skipBackup: true,
        path: 'images',
      },
      response => {
        if (response.didCancel) {
          reject({ result: 'cancel' });
        }
        return resolve({ result: response });
      },
    )
      .then(r => reject('Error'))
      .catch();
  });
