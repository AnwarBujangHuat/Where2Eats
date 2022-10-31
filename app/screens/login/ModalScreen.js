import * as React from 'react';
import {
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Colors } from '../../Colors';
import { ConstString } from '../../Strings';
import { restaurantLoading } from '../../store/reducer';
import { PopulateRestaurantList } from '../../store/thunks';
import { useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import Welcome from '../../assets/welcome.json';

const { width } = Dimensions.get('window');

export const ModalScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  dispatch(restaurantLoading());
  dispatch(PopulateRestaurantList());
  setTimeout(() => navigation.navigate(ConstString.HOME)
    , 2000);
  return (
    <SafeAreaView style={{
      backgroundColor: Colors.secondaryPurple, justifyContent: 'center'
      , flex: 1, alignItems: 'center', alignContent: 'center'
    }}>
      <LottieView style={{
        height: width * .7,
        width: width * .7,
      }} source={Welcome} autoPlay={true}
      />
    </SafeAreaView>
  );
};
