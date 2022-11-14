import React, { useState } from 'react';
import { ConstString } from '../../Strings';
import { RegisterComponents } from './components';
import { launchImagePicker } from '../../ImagePicker';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  getCurrentRestaurant,
  getUser
} from '../../store/selector';
import { ConstFoodCategory } from '../home/ConstFoodCategory';
import { Alert } from 'react-native';
import { updateRestaurantInfoFirestore } from '../../store/thunks';
import { firebase } from '../../../src/firebase/config';

let initialRestaurantname;
let initialRestaurantDesc;
let initialRestaurantLocation;
let initialRestaurantImage;
let initialRestaurantCategory;
let initialIndex=0;
export const Register = ({ navigation,route }) => {
  const { id } = route.params || {};
  const dispatch = useDispatch();
  const editorMode = !!id;
  //initializing Variables
  if(editorMode){
    const restaurantInfo=useSelector(getCurrentRestaurant(id))
    initialRestaurantname=restaurantInfo.restaurant;
    initialRestaurantDesc=restaurantInfo.description;
    initialRestaurantLocation=restaurantInfo.address;
    initialRestaurantImage=restaurantInfo.image;
    initialRestaurantCategory=restaurantInfo.category;
    initialIndex=ConstFoodCategory.findIndex(items=>{
      return items.title === initialRestaurantCategory;
    })
  }else{
    initialRestaurantname="";
    initialRestaurantDesc='';
    initialRestaurantLocation='Jalan Dato Barber';
    initialRestaurantImage=undefined;
    initialRestaurantCategory=ConstString.WESTERN;
  }
  const user=  useSelector(getUser)
  const [selectedTypes, setSelectedTypes] = useState(initialRestaurantCategory??"Western");
  const [restaurantName, setRestaurantName] = useState(initialRestaurantname??'');
  const [restaurantDesc, setRestaurantDesc] = useState(initialRestaurantDesc)??'';
  const [imageUri, setImageUri] = useState(initialRestaurantImage??undefined);
  const [restaurantLocation, setRestaurantLocation] = useState(initialRestaurantLocation??'');
  let reUpload=false;
  const goToMenu = () => {
    const item = {
      restaurant: restaurantName,
      category: selectedTypes,
      address: restaurantLocation,
      description: restaurantDesc,
      image: imageUri,
      rate: 5,
      // rate: undefined,
      userId:user.ID??1,
      createdAt:new Date().toLocaleString(),
      food:[],
    };
    (restaurantName === '' || restaurantDesc === '' || restaurantLocation === '' || imageUri === undefined) ?
      alert('Please Fill in All Information') :
      navigation.navigate(ConstString.MENU, { item, id });
  };
  const launchImageLibrary = async() => {
    const response= await launchImagePicker()
    //* Exit if response empty *//
    if(!response) return Alert.alert('Please Pick Image in JPG or PNG format',
      '',
      [
        { text: 'Okay' },
      ],
      { cancelable: true }
    );

    //* Exit if there's error *//
    const { errorCode, assets } = response
    if(errorCode || assets === []) return Alert.alert('Please Pick Image in JPG or PNG format',
      '',
      [
        { text: 'Okay' },
      ],
      { cancelable: true }
    );

    //* Code proccessing *//
    reUpload=true
    setImageUri(assets[0].uri)

  };

  const showAlert = (result) => {
    result === ConstString.SUCCESS ?
      Alert.alert(
        'Congratulation',
        "Restaurant Information is Successfully Updated",
        [
          {
            onPress: () => navigation.goBack({id}),
            text: 'Okay',
          },
        ],
      )
      :
      //Error Handling Alert
      Alert.alert(
        'Sorry',
        "We did not manage to update Restaurant Information",
        [
          {
            onPress: () => navigation.goBack({id}),
            text: 'Okay',
          },
        ],
      );

  };
  const goBack = () => {
    navigation.goBack({id});
  };
  const updateRestaurantInfo=async()=>{
    let image=initialRestaurantImage;
    //Upload Image if image change
    if(!reUpload){
      const imageUploadResult= await uploadAsFile(imageUri,"profile");
      const {data}=imageUploadResult;
      image=data
    }
    const result= await dispatch(
      updateRestaurantInfoFirestore({id,restaurantName,selectedTypes,restaurantLocation,restaurantDesc,image}))
    const {result:updateResult}=result

    if(updateResult) return showAlert(ConstString.FAILED)
    showAlert(ConstString.SUCCESS)
  }

  const setName = (text) => setRestaurantName(text);
  const setDescription = (text) => setRestaurantDesc(text);
  const categorySelected = ({ item }) => setSelectedTypes(item.title);
  const uploadAsFile = async(uri, folder ,progressCallback) => {
    if (uri !== undefined) {
      const response = await fetch(uri);
      const blob = await response.blob();
      const name = 'profilemedia.jpg'
      const pathName =initialRestaurantname + '/' + folder + '/' + name
      const metadata = {
        contentType: 'image/jpeg',
      };
      const ref = firebase.storage().ref().child(pathName);
      const task = ref.put(blob, metadata);
      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          (snapshot) => {
            progressCallback && progressCallback(snapshot.bytesTransferred / snapshot.totalBytes);
          },
          (error) => {
            reject(error);
          },
          () => {
            task.snapshot.ref.getDownloadURL().then((fileUrl) => {
              resolve({ type: 'profile', data: fileUrl });
              }
            );
          }
        );
      });
    } else {
      showAlert('Missing File' + category);
    }
  };

  const props = {
    selectedTypes,
    restaurantName,
    restaurantDesc,
    initialIndex,
    restaurantLocation,
    goToMenu,
    goBack,
    setName,
    setDescription,
    categorySelected,
    launchImageLibrary,
    imageUri,
    updateRestaurantInfo,
    editorMode
  };
  return (
    <RegisterComponents {...props} />
  );
};
