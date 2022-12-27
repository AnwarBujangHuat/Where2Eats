import * as ImagePicker from "react-native-image-picker";

export const launchImagePicker = () =>
  new Promise(async (resolve, reject) =>
    ImagePicker.launchImageLibrary(
      {
        mediaType: "photo",
        quality: 1,
        maxWidth: 600,
        maxHeight: 300
      }
    )
      .catch(e => reject({ result: 0 }))
      .then(r => resolve({ result: r }))
  );
