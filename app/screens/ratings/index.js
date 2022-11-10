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
export const Ratings = ({ navigation, route }) => {
  const rating = ['All', '1', '2', '3', '4', '5'];
  const { id } = route.params || {};
  const userInfo = useSelector(getUser);
  const restaurantInfo = useSelector(getCurrentRestaurant(id));
  const onBackButton = () => navigation.navigate(ConstString.RESTAURANT, { id });
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
  const [ratingCount, setRatingCount] = useState();
  const userReviews = restaurantsRating.find(item => item?.userId === userInfo.ID) ?? '';
  const index = restaurantsRating.indexOf(userReviews);
  useEffect(() => {
    if (userReviews !== '') {
      setFirstTime(false);
    }
    setUserReview(userReviews);
    getTotalCount(restaurantsRating)
    if (index > -1) {
      restaurantsRating.splice(index, 2);
    }
    setRestaurantRemove(restaurantsRating);
  }, [restaurantInfo]);
  const getTotalCount=(restaurantsRating)=>{
    const temp=[]
    rating.forEach((rating)=>{
        if(rating!=="All"){
          const totalCount=restaurantsRating.reduce((acc, cur) => cur.rating === parseInt(rating) ? ++acc : acc, 0);
          temp.push(totalCount)
        }
    })
    setRatingCount(temp.reverse())
  }
  const openModal = () => {
    setModalRate(true);
  };
  const closeModal = (result) => {
    setFirstTime(false);
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
  const submit = async(text, newRate = 1) => {
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
      const result = await dispatch(updateRating({ id, userReview, userReviewResult, avg, restaurantRemove }));
      const {error}=result
      closeModal(error?ConstString.FAILED:ConstString.SUCCESS);

  };
  const props = {
    onBackButton,
    restaurantInfo,
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
