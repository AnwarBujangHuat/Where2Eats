import * as React from 'react';
import { useEffect } from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Colors } from '../../Colors';
import { ConstString } from '../../Strings';
import {
  fetchUserInformation,
  PopulateRestaurantList,
  verifyUserToken
} from '../../store/thunks';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import LottieView from 'lottie-react-native';
import Welcome from '../../assets/welcome.json';
import {
  getToken,
  getUser
} from '../../store/selector';

const { width } = Dimensions.get('window');
import {getDeviceId,getUniqueId} from 'react-native-device-info';

export const ModalScreen = ({ navigation }) => {
  //Verify User Token
  const token=useSelector(getToken)
  const deviceId=getDeviceId();
  const dispatch = useDispatch();
  const fetch = async() => {
    const response = await dispatch(PopulateRestaurantList());
    const { payload } = response;
    if (!payload.result) {
      return Alert.alert('Make Sure You Have Internet Connection',
        'Opps',
        {
          text: 'OK',
          onPress: () => navigation.navigate(ConstString.HOME),
        },
        { cancelable: true });
    }
    navigation.navigate(ConstString.HOME);
  };

  useEffect(()=>{
    const verifyToken=async()=>{
      const { payload } = await dispatch(verifyUserToken({token,deviceId}));
      const { result, data } = payload;
      if(!result) return navigation.navigate(ConstString.LOGIN);

      const {userId}=data
      const { payload:userPayload } = await dispatch(fetchUserInformation({ userId }));
      const { result: onSuccessUserInformation }=userPayload
      if (!onSuccessUserInformation) return navigation.navigate(ConstString.LOGIN);
      //fetch Restaurant List
      fetch().then();

    }
    verifyToken().then()
  })

  return (
    <SafeAreaView style={{
      backgroundColor: Colors.secondaryPurple,
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      alignContent: 'center' }}>
      <LottieView
        source={Welcome}
        autoPlay={true}
        style={{
        height: width * .7,
        width: width * .7,
      }}
      />
    </SafeAreaView>
  );
};
