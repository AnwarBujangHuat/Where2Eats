import { ConstString } from '../../Strings';
import mainDishIcon from '../../assets/mainDish.png';
import sideIcon from '../../assets/sides.png';
import beveragesIcon from '../../assets/beverages.png';
import dessertIcon from '../../assets/dessert.png';
import appetizerIcon from '../../assets/appetizer.png';

export const menuCategories = [
  {
    title: ConstString.MAINDISH,
    icon: mainDishIcon
  },
  {
    title: ConstString.SIDEDISH,
    icon: sideIcon
  },
  {
    title: ConstString.DESSERT,
    icon: dessertIcon
  },
  {
    title: ConstString.APPETIZER,
    icon: appetizerIcon
  },
  {
    title: ConstString.DRINKS,
    icon: beveragesIcon
  },

];
