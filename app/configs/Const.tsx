import { ConstString } from "./Strings";

const theme = 0;
export const icons = {
  [ConstString.WESTERN]: require("../assets/images/cheeseburger.png"),
  [ConstString.MALAY]: require("../assets/images/nasi-lemak.png"),
  [ConstString.CHINESE]: require("../assets/images/buns.png"),
  [ConstString.INDIAN]: require("../assets/images/masala-dosa.png"),
  [ConstString.BORNEO]: require("../assets/images/bakso.png"),
  [ConstString.JAPANESE]: require("../assets/images/ramen.png"),
  [ConstString.DRINKS]: require("../assets/images/drinks.png"),
  [ConstString.DESSERT]: require("../assets/images/fruit.png"),
  [ConstString.MAINDISH]: require("../assets/images/mainDish.png"),
  [ConstString.SIDEDISH]: require("../assets/images/sides.png"),
  [ConstString.DESSERT]: require("../assets/images/dessert.png"),
  [ConstString.APPETIZER]: require("../assets/images/appetizer.png"),
  [ConstString.BEVERAGES]: require("../assets/images/beverages.png"),
  [ConstString.GOOGLE]: require("../assets/images/google.png"),
  [ConstString.FACEBOOK]: require("../assets/images/facebook.png"),
  def: require("../assets/images/cheeseburger.png"),
  defMenu: require("../assets/images/sides.png")
};
export const Const = [
  {
    title: ConstString.WESTERN,
    icon: require("../assets/images/cheeseburger.png")
  },
  {
    title: ConstString.MALAY,
    icon: require("../assets/images/nasi-lemak.png")
  },
  {
    title: ConstString.CHINESE,
    icon: require("../assets/images/buns.png")
  },
  {
    title: ConstString.INDIAN,
    icon: require("../assets/images/masala-dosa.png")
  },
  {
    title: ConstString.BORNEO,
    icon: require("../assets/images/bakso.png")
  },
  {
    title: ConstString.JAPANESE,
    icon: require("../assets/images/ramen.png")
  },
  {
    title: ConstString.DRINKS,
    icon: require("../assets/images/drinks.png")
  },
  {
    title: ConstString.DESSERT,
    icon: require("../assets/images/fruit.png")
  }
];
export const colors = {
  black: "#000",
  white: theme ? "#fff" : "#000",
  primary: "#915bff",
  secondBg: theme ? "#1C1424" : "#fff",
  // secondBg: theme ? '#1b1424' : '#fff',
  bg: theme ? "#1A1125" : "#fefefe",
  darkPurple: "#9c6bff",
  lightPurple: "#DED8E1",
  offPurple: "#e2d5f0"
};
