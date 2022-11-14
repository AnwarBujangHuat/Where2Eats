import React, {
  useEffect,
  useState
} from 'react';
import { ConstString } from '../../Strings';
import { useSelector } from 'react-redux';
import { icons } from '../home/ConstFoodCategory';
import { getCurrentRestaurant } from '../../store/selector';
import { menuCategories } from '../register/MenuCategories';
import { RestaurantComponents } from './components';

const categories = [
  { id: 1, item: ConstString.MAINDISH },
  { id: 2, item: ConstString.SIDEDISH },
  { id: 3, item: ConstString.DESSERT },
  { id: 4, item: ConstString.APPETIZER },
  { id: 5, item: ConstString.DRINKS }];

export const Restaurant = ({ navigation, route }) => {
  const { id } = route.params || {};
  const restaurantInfo = useSelector(getCurrentRestaurant(id));
  const { category, food: foodItemList } = restaurantInfo;
  const [isModalVisible, setModalVisible] = useState(false);
  const [foodItem, setFoodItem] = useState();
  const [isPreview, setIsPreview] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const restaurantIcon = category ? icons[category] : icons.def;

  useEffect(() => {
    const tempCategory = categories.filter(category => foodItemList.find(food => food.category === category.item));
    setSelectedCategory(tempCategory);
  }, [restaurantInfo]);

  const onPress = (item) => {
    setFoodItem(item);
    setModalVisible(!isModalVisible);
  };
  const closePreviewModal = () => {
    setIsPreview(false);
  };
  const menuIcon = (item) => menuCategories.find(icons => icons.item === item).icon; // icon mapping & make utils function
  const closeModal = () => setModalVisible(false);
  const openPreviewModal = () => setIsPreview(true);
  const goToRating = () => navigation.navigate(ConstString.RATINGS, { id });
  const onBack = () => navigation.navigate(ConstString.HOME);
  const onPressFloatingButton = ({ item: action }) => {
    //If edit then go to Edit Restaurant general Information
    if (action === ConstString.EDIT) return navigation.navigate(ConstString.REGISTER, { id });

    //else go to Edit Menu Page
    navigation.navigate(ConstString.MENU, { id });
  };
  const props = {
    isModalVisible,
    foodItem,
    restaurantInfo,
    onPress,
    selectedCategory,
    onBack,
    restaurantIcon,
    closeModal,
    menuIcon,
    isPreview,
    closePreviewModal,
    openPreviewModal,
    goToRating,
    onPressFloatingButton,
  };
  return (<RestaurantComponents {...props} />
  );
};
