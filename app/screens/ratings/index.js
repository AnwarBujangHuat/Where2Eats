import React, {
  useEffect,
  useState
} from 'react';
import { RatingComponents } from './components';
import { ConstString } from '../../Strings';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  getCurrentRestaurant,
  getUser
} from '../../store/selector';
import { Alert, } from 'react-native';
import { RatingCard } from '../../components/molecules/RatingCard';
import { RatingButton } from '../../components/atoms/RatingButton';
import { updateRating } from '../../store/thunks';

const rating = ['All', '1', '2', '3', '4', '5'];
export const Ratings = ({ navigation, route }) => {
  const { id } = route.params || {};
  const userInfo = useSelector(getUser);
  const restaurantInfo = useSelector(getCurrentRestaurant(id));
  const onBackButton = () => navigation.navigate(ConstString.RESTAURANT, { id });
  const arrayRating = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };
  const dispatch = useDispatch();
  const restaurantsRating = [...restaurantInfo.rating ?? []];
  const [restaurantRemove, setRestaurantRemove] = useState([]);
  const [restaurantList, setRestaurantList] = useState(restaurantsRating);
  const [isSelectedRating, setSelectedRating] = useState(rating[0]);
  const onSelectedRating = (item) => {
    const selectedRestaurantRate = item !== 'All' ? restaurantRemove.filter(rate => rate.rating === parseInt(item)) : restaurantRemove;
    setRestaurantList(selectedRestaurantRate);
    setSelectedRating(item);
  };
  const [isModalRateOpen, setModalRate] = useState(false);
  const [userReview, setUserReview] = useState({});
  const [isFirstTimeRate, setFirstTime] = useState(true);
  const [isCurrentRating, setCurrentRating] = useState(restaurantInfo.rate ?? 3.5);
  const [ratingCount, setRatingCount] = useState(arrayRating);
  const userReviews = restaurantsRating.find(item => item?.userId === userInfo.ID) ?? '';
  const index = restaurantsRating.indexOf(userReviews);
  const [isRender, setRerender] = useState(false);
  useEffect(() => {
    if (userReviews !== '') {
      setFirstTime(false);
    }
    setUserReview(userReviews);
    sortRate(restaurantsRating);
    if (index > -1) {
      restaurantsRating.splice(index, 2);
    }
    setRestaurantRemove(restaurantsRating);
  }, [restaurantInfo]);
  const sortRate = (restaurantsRating) => {
    restaurantsRating.forEach((obj, index) => {
      const currentItem = restaurantsRating[index];
      switch(obj.rating) {
        case 1:
          arrayRating[1].push(currentItem);
          break;
        case 2:
          arrayRating[2].push(currentItem);
          break;
        case 3:
          arrayRating[3].push(currentItem);
          break;
        case 4:
          arrayRating[4].push(currentItem);
          break;
        case 5:
          arrayRating[5].push(currentItem);
          break;
      }
    });
    setRatingCount(arrayRating);
    setRerender(true);
  };
  const openModal = () => {
    setModalRate(true);
  };
  const closeModal = (result) => {
    setModalRate(false);
    if (result === ConstString.FAILED) {
      Alert.alert('Something Went Wrong While Writing Your Review',
        'Opps',
        { text: 'OK' },
        { cancelable: true }
      );
    }
  };
  const RenderItem = ({ item }) => {
    return (
      <RatingButton rating={item} onPress={onSelectedRating} selected={isSelectedRating} />
    );
  };
  const renderRateCard = ({ item }) => {
    return (
      <RatingCard userReview={item} />
    );
  };
  const submit = (text, newRate = 1) => {
    const currentDate = new Date().toLocaleString();
    const userReviewResult = {
      userId: userInfo.ID,
      userName: userInfo.NAME,
      review: text,
      rating: parseInt(newRate),
      createdAt: isFirstTimeRate ? currentDate : userReview.createdAt,
      updatedAt: isFirstTimeRate ? '' : currentDate
    };
    const avg = Math.round((restaurantsRating.reduce((r, c) => r + c.rating, 0) + newRate) / (restaurantsRating.length + 1) * 10) / 10;
    setCurrentRating(avg !== undefined ? avg : 2.5);
    setFirstTime(false);
    dispatch(updateRating({ id, userReview, userReviewResult, avg, restaurantRemove })).then(() => {
        setTimeout(() => {
          closeModal(ConstString.SUCCESS);
        }, 1500);
      },
      (e) => {
        closeModal(ConstString.FAILED);
      });
  };
  const props = {
    onBackButton,
    restaurantInfo,
    userInfo,
    isModalRateOpen,
    closeModal,
    submit,
    userReview,
    isCurrentRating,
    restaurantRemove,
    ratingCount,
    openModal,
    isFirstTimeRate,
    RenderItem,
    restaurantList,
    renderRateCard,
    rating
  };
  return (<RatingComponents {...props} />);
};
