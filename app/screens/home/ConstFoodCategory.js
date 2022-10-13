import burgerIcon from '../../assets/cheeseburger.png';
import malayIcon from '../../assets/nasi-lemak.png';
import chineseIcon from '../../assets/buns.png';
import indianIcon from '../../assets/masala-dosa.png';
import borneoIcon from '../../assets/bakso.png';
import japaneseIcon from '../../assets/ramen.png';
import drinksIcon from '../../assets/drinks.png';
import fruitsIcon from '../../assets/fruit.png';
import { ConstString } from '../../Strings';

export const ConstFoodCategory = [
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
  }
];
