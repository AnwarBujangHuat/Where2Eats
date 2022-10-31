import React, {
  useEffect,
  useState
} from 'react';
import { HomeComponents } from './components';
import { ConstString } from '../../Strings';
import { getRestaurant, } from '../../store/selector';
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
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurant);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRender, setisRender] = useState(false);
  const[isFetching,setIsFetching]=useState(false)
  const setRestaurant = (category) => {
    const isRestaurantIncluded = selectedTypes.includes(category);
    const tempSelected = isRestaurantIncluded ? selectedTypes.filter(item => item !== category) : [category, ...selectedTypes];
    setSelectedTypes(tempSelected);
    if (tempSelected.length <= 0) return setCurrentRestaurant(restaurant);

    if (isRestaurantIncluded) {
      const updateRestaurant = currentRestaurant.filter(currentRestaurant => currentRestaurant.category !== category);
      setCurrentRestaurant(updateRestaurant);
    } else {
      const updateRestaurant = restaurant.filter(currentRestaurant => currentRestaurant.category === category);
      const tempRestaurant = selectedTypes.length === 0 ? [...updateRestaurant] : [...updateRestaurant, ...currentRestaurant];
      setCurrentRestaurant(tempRestaurant);
    }
  };
  const fetchData=()=>{
    dispatch(restaurantLoading());
    dispatch(PopulateRestaurantList());
    setIsFetching(false)
  }
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
    setOpenMenu(!isOpenMenu);
  };
  const closeModal = (id) => {
    switch(id){
      case 1:
        navigation.navigate(ConstString.REGISTER);
        break;
      case 2:
        navigation.navigate(ConstString.PROFILE);
        break;
      case 3:
        navigation.navigate(ConstString.LOGIN);
        break;
    }
    setOpenMenu(false);
  };
  const goToRestaurant = (id) => {
    navigation.navigate(ConstString.RESTAURANT, { id });
  };
  const reRender = () => {
    setTimeout(function() {setisRender(!isRender);}, 100);
  };
  const reFresh=()=>{
    setIsFetching(true)
    fetchData()
  }
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
    reRender,
    reFresh,
    isFetching
  };
  return (<HomeComponents{...props} />);
};
