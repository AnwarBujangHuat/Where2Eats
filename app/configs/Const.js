import { ConstString } from './Strings';
import burgerIcon from '../assets/cheeseburger.png';
import malayIcon from '../assets/nasi-lemak.png';
import chineseIcon from '../assets/buns.png';
import indianIcon from '../assets/masala-dosa.png';
import borneoIcon from '../assets/bakso.png';
import japaneseIcon from '../assets/ramen.png';
import drinksIcon from '../assets/drinks.png';
import fruitsIcon from '../assets/fruit.png';
import mainDishIcon from '../assets/mainDish.png';
import sideIcon from '../assets/sides.png';
import beveragesIcon from '../assets/beverages.png';
import dessertIcon from '../assets/dessert.png';
import appetizerIcon from '../assets/appetizer.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import googleIcon from '../assets/google.png';

const theme = 1;
export const icons = {
  [ConstString.WESTERN]: burgerIcon,
  [ConstString.MALAY]: malayIcon,
  [ConstString.CHINESE]: chineseIcon,
  [ConstString.INDIAN]: indianIcon,
  [ConstString.BORNEO]: borneoIcon,
  [ConstString.JAPANESE]: japaneseIcon,
  [ConstString.DRINKS]: drinksIcon,
  [ConstString.DESSERT]: fruitsIcon,
  [ConstString.MAINDISH]: mainDishIcon,
  [ConstString.SIDEDISH]: sideIcon,
  [ConstString.DESSERT]: dessertIcon,
  [ConstString.APPETIZER]: appetizerIcon,
  [ConstString.BEVERAGES]: beveragesIcon,
  [ConstString.GOOGLE]: googleIcon,
  [ConstString.TWITTER]: twitterIcon,
  [ConstString.FACEBOOK]: facebookIcon,
  def: burgerIcon,
  defMenu: sideIcon,
};
export const Const = [
  {
    title: ConstString.WESTERN,
    icon: burgerIcon,
  },
  {
    title: ConstString.MALAY,
    icon: malayIcon,
  },
  {
    title: ConstString.CHINESE,
    icon: chineseIcon,
  },
  {
    title: ConstString.INDIAN,
    icon: indianIcon,
  },
  {
    title: ConstString.BORNEO,
    icon: borneoIcon,
  },
  {
    title: ConstString.JAPANESE,
    icon: japaneseIcon,
  },
  {
    title: ConstString.DRINKS,
    icon: drinksIcon,
  },
  {
    title: ConstString.DESSERT,
    icon: fruitsIcon,
  },
];
export const colors = {
  black: '#000',
  white: theme ? '#fff' : '#000',
  primary: '#915bff',
  secondBg: theme ? '#1C1424' : '#fff',
  // secondBg: theme ? '#1b1424' : '#fff',
  bg: theme ? '#1A1125' : '#fefefe',
  darkPurple: '#9c6bff',
  lightPurple: '#DED8E1',
  offPurple: '#e2d5f0',
};
