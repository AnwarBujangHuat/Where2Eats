import React, {
  useEffect,
  useState
} from 'react';
import { HomeComponents } from './components';
import { ConstString } from '../../Strings';
import { getRestaurant, getUser, } from '../../store/selector';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { restaurantLoading } from '../../store/reducer';
import { defaultValue } from '../../store/defaultValue';
import { PopulateRestaurantList } from '../../store/thunks';

export const Home = ({ navigation }) => {
  const restaurant = useSelector(getRestaurant);
  const dispatch = useDispatch();
  const [currentRestaurant, setCurrentRestaurant] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    if (restaurant.length === 0 || restaurant.length === undefined) {
      dispatch(restaurantLoading());
      dispatch(PopulateRestaurantList(defaultValue));
    }
    setCurrentRestaurant(restaurant);
  }, [restaurant]);

  const setRestaurant = (category) => {
    if (selectedTypes.includes(category)) {
      const tempSelected = selectedTypes.filter(item => item !== category);
      setSelectedTypes(tempSelected);
      const updateRestaurant = currentRestaurant.filter(currentRestaurant => currentRestaurant.category !== category);
      setCurrentRestaurant(updateRestaurant);
      if (tempSelected.length <= 0) {
        setCurrentRestaurant(restaurant);
      }
    } else {
      const temp = [category, ...selectedTypes];
      setSelectedTypes(temp);
      const updateRestaurant = restaurant.filter(currentRestaurant => currentRestaurant.category === category);
      const tempRestaurant = selectedTypes.length < 1 ? [...updateRestaurant] : [...updateRestaurant, ...currentRestaurant];
      setCurrentRestaurant(tempRestaurant);
    }
  };
  const onSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      return setCurrentRestaurant(restaurant);
    }
    const updateRestaurant = restaurant.filter(item => item.restaurant.toLowerCase().includes(searchQuery.toLowerCase()));
    setCurrentRestaurant(updateRestaurant);
  };
  const gotoRoulette = () => {
    navigation.navigate(ConstString.ROULETTE, currentRestaurant);
  };
  const openMenu = () => {
    setOpenMenu(!isOpenMenu)
  };
  const closeModal = (id) => {
    id === 1 ? navigation.navigate(ConstString.REGISTER) : navigation.navigate(ConstString.PROFILE)
    setOpenMenu(false)
  }
  const goToRestaurant = (id) => {
    navigation.navigate(ConstString.RESTAURANT, { id });
  };
  const props = {
    selectedTypes,
    currentRestaurant,
    searchQuery,
    isOpenMenu,
    setRestaurant,
    onSearch,
    gotoRoulette,
    openMenu,
    goToRestaurant,
    closeModal,
  };
  return (<HomeComponents{...props} />);
};
