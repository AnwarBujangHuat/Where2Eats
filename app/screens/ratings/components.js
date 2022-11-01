import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Rating } from 'react-native-ratings';

import React, {
  useEffect,
  useState
} from 'react';
import { BackButton } from '../../components/atoms/BackButton';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RatingCard } from '../../components/molecules/RatingCard';
import addIcon from '../../assets/plus.png';
import { RatingButton } from '../../components/atoms/RatingButton';
import { ModalGiveRating, } from '../../components/molecules/ModalGiveRating';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { getUser } from '../../store/selector';
import { updateRating } from '../../store/thunks';
const rating=["All","1","2","3","4","5"]

export const RatingComponents = props => {
  const userInfo=useSelector(getUser);
  const dispatch=useDispatch();
  const dummyRating=[{
    userId:1,
    userName:"Mohamad Abu Lutut",
    review:'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
    rating:4,
    createdAt:'10/31/2022, 1:17:51 PM',
    updatedAt:'10/31/2022, 1:17:51 PM'
  },{
    userId:2,
    userName:"Mohamad Abu Lutut Kanan",
    review:"Sedap Wooo",
    rating:4,
    createdAt:'10/31/2022, 1:17:51 PM',
    updatedAt:undefined
  },
    {
    userId:3,
    userName:"Mohamad Abu Lutut Kiri",
    review:'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
    rating:4,
    createdAt:'10/31/2022, 1:17:51 PM',
    updatedAt:undefined
  },{
    userId:4,
    userName:"Mohamad Abu Lutut Depan Senget",
    review:"Sedap Wooo",
    rating:5,
    createdAt:'10/31/2022, 1:17:51 PM',
    updatedAt:undefined
  }]
  const [isSelectedRating,setSelectedRating]=useState(rating[0])
  const onSelectedRating=(item)=>{setSelectedRating(item)}
  const {
    onBackButton,
    restaurantInfo
  } = props;
  const userReviews=dummyRating.find(item=>item.userId===0);
  const [isModalRateOpen,setModalRate]=useState(false)
  const [userReview,setUserReview]=useState(userReviews);
  const index = dummyRating.indexOf(userReviews);
  const [isFirstTimeRate,setFirstTime]=useState(true)
  const [ratingAverage,setRatingAverage]=useState(3.5)
  if (index > -1) {
    dummyRating.splice(index, 1);
  }
  useEffect(()=>{
    if(userReview!==undefined)
      return setFirstTime(false)
  },[])

  const openModal=()=>{
    setModalRate(true)
  }
  const SelfReview = () => {
    return (
      !isFirstTimeRate?
        <RatingCard userReview={userReview} />
        :
        <Text style={styles.reviewText}>No Review</Text>
    );
  };
  const RenderItem=({item})=>{
    return (
      <RatingButton rating={item} onPress={onSelectedRating} selected={isSelectedRating}/>
    );
  }
  const renderRateCard=({item})=>{
    return(
      <RatingCard userReview={item} />
    )
  }
  const submit=(text,newRate)=>{
    const currentDate=new Date().toLocaleString();
    const userReviewResult={
      userId:userInfo.ID,
      userName:userInfo.NAME,
      review:text,
      rating:newRate,
      createdAt:isFirstTimeRate?currentDate:userReview.createdAt,
      updatedAt:isFirstTimeRate?undefined:currentDate
    }
    setUserReview(userReviewResult)
    setFirstTime(false);
    dispatch(updateRating(userReviewResult))

    calculateNewRate(newRate);
    closeModal()
  }
  //Finish Upload to Firebase
  const calculateNewRate=(newRate)=>{
    const recalculateAverage=(dummyRating.reduce((r, c) => r + c.rating, 0) + newRate) / (dummyRating.length + 1);
    // setRatingAverage(recalculateAverage);
    dispatch(updateRating({userReview,recalculateAverage}))

  }
  const closeModal=()=>setModalRate(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <BackButton onPress={onBackButton}></BackButton>
        <Text style={styles.header}>{restaurantInfo.restaurant + ' Customer Review'}</Text>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 15, }}>
        <Text style={styles.reviewHeader}>Overall Rating</Text>
        <Rating
          type="star"
          fractions={1}
          startingValue={ratingAverage}
          readonly={true}
          showReadOnlyText={false}
          showRating
          ratingBackgroundColor={'#000'}
          tintColor={EStyleSheet.value('$backGroundColor')}
          imageSize={45}
          ratingTextColor={EStyleSheet.value('$secondaryTextColor')}
          style={styles.ratingContainer}
        />
        <View style={{flexDirection:'row', marginBottom:10,}}>
          <Text style={styles.header}>Your Review</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={openModal}>
            <Image style={styles.addIcon} source={addIcon} />
            <Text style={{
              padding: 5,
              color: 'white',
              fontWeight: 'bold',
              alignSelf:'center',
              fontSize: 12,
            }}>{!isFirstTimeRate?"Update Review":"Add Review"}</Text>
          </TouchableOpacity>
        </View>
        <SelfReview />
        <FlatList
          data={rating}
          renderItem={RenderItem}
          horizontal={true}
          style={{marginVertical:5,}}
          showsHorizontalScrollIndicator={true}
        />

        <FlatList
          data={dummyRating}
          renderItem={renderRateCard}
          showsHorizontalScrollIndicator={false}
        />
        {isModalRateOpen&&
        <ModalGiveRating closeModal={closeModal} isModalVisible={isModalRateOpen} submit={(text,newRate)=>submit(text,newRate)} userReview={userReview}/>}
      </View>
    </SafeAreaView>);
};
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backGroundColor',
  },
  label: {
    color: '$secondaryTextColor',
    fontSize: 13,
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  addIcon: {
    width: 10,
    height: 10,
    marginStart: 5,
    alignSelf: 'center',
  },
  header: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf:'center',
    color: '$primaryTextColor',
  },
  reviewHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '$primaryTextColor',
  },
  button: {
    backgroundColor: '$lightPrimaryColor',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    width: Dimensions.get('screen').width - 30,
    textTransform: 'uppercase',
    alignSelf: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$primaryTextColor',
    alignSelf: 'center',
    marginStart: 10,
  },
  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
  },
  ratingContainer: {
    paddingVertical: 15,
    backGroundColor: '$backGroundColor'
  },

  reviewText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '$primaryColor',
    borderRadius: 20,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    right: 0, position: 'absolute',
    elevation: 10,
  },
});
