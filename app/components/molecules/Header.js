import {
  Animated,
  Dimensions,
  Easing,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, {
  useRef,
  useState
} from 'react';
import { ConstString } from '../../Strings';
import LottieView from 'lottie-react-native';
// import ThemeButton from '../../assets/dark.json';
import ThemeButton from '../../assets/lightNdark.json';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../store/thunks';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width } = Dimensions.get('window');
const currentTheme = EStyleSheet.value('$theme');
let theme;
let color;

export const Header = ({ source, onPress, reRender }) => {
  const animationProgress = useRef(new Animated.Value(currentTheme === ConstString.LIGHT ? .5 : 0));
  const [isCurrentTheme, setCurrentTheme] = useState(currentTheme);
  const [isRender, setRender] = useState(false);
  const dispatch = useDispatch();
  const onChangeTheme = () => {
    if (isCurrentTheme === ConstString.LIGHT) {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
      color = ConstString.DARK;
      setCurrentTheme(ConstString.DARK);
    } else if (isCurrentTheme === ConstString.DARK) {
      Animated.timing(animationProgress.current, {
        toValue: 0.5,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
      color = ConstString.LIGHT;
    }
    setCurrentTheme(color);
    // EStyleSheet.build(theme);
    dispatch(changeTheme(color));
    reRender();
    //Disable Button for 2 Seconds after changing Theme
    setRender(true);
    setTimeout(() => setRender(false), 2000);
  };
  return (
    <View style={styles.section}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.icons} source={source} />
      </TouchableOpacity>
      <Text style={styles.title}>{ConstString.QUOTES}</Text>
      <TouchableOpacity onPress={onChangeTheme} disabled={isRender}>
        <LottieView style={styles.lottieButton} source={ThemeButton}
                    progress={animationProgress.current}
        />
      </TouchableOpacity>
    </View>

  );
};
const styles = EStyleSheet.create({
  section: {
    flexDirection: 'row',
    maxHeight: width * 0.15,
    alignItems: 'center'
  },
  icons: {
    height: 35,
    width: 35,
    marginStart: 20,
    borderRadius: 40,
  },
  lottieButton: {
    height: width * .2,
    width: width * .2,
    right: 10,
  },
  title: {
    fontSize: 15,
    color: '$primaryTextColor',
    fontWeight: 'bold',
    marginStart: 10,
    width: width * 0.65
  },

});
