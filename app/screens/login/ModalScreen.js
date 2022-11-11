import * as React from 'react';
import { useEffect } from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Colors } from '../../Colors';
import { ConstString } from '../../Strings';
import { PopulateRestaurantList } from '../../store/thunks';
import { useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import Welcome from '../../assets/welcome.json';

const { width } = Dimensions.get('window');

export const ModalScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
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
    fetch().then();
  }, []);
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
