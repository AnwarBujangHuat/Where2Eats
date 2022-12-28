import * as ImagePicker from "react-native-image-picker";
import { image } from "././components/molecules/ModalMenu";

export const launchImagePicker = () =>
  new Promise<image>(async (resolve, reject) =>
    ImagePicker.launchImageLibrary(
      {
        mediaType: "photo",
        quality: 1,
        maxWidth: 600,
        maxHeight: 300
      },
      ({ assets }) => {
        const { uri, type, fileName } = assets[0];
        return resolve({ uri: uri, type: type, fileName: fileName, request: 1 });
      }
    )
      .catch(e => reject({ result: e, request: 0 }))
      .then()
  );
