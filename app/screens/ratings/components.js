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
import {
  PopulateRestaurantList,
  updateRating
} from '../../store/thunks';
import { restaurantLoading } from '../../store/reducer';
import { BarChart } from 'react-native-chart-kit';

const rating = ['All', '1', '2', '3', '4', '5'];

export const RatingComponents = props => {
  const userInfo = useSelector(getUser);
  const {
    onBackButton,
    restaurantInfo
  } = props;
  const arrayRating={
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
  }
  const { id } = restaurantInfo;
  const dispatch = useDispatch();
  const restaurantsRating = [...restaurantInfo.rating ?? []];
  const overallRate = [...restaurantInfo.rating ?? []];
  const [ratingCount,setRatingCount]=useState(arrayRating)
  const [restaurantList, setRestaurantList] = useState(restaurantsRating);
  const [isSelectedRating, setSelectedRating] = useState(rating[0]);
  const onSelectedRating = (item) => {
    let selectedRestaurantRate=[];
    switch(item){
      case "All":
        selectedRestaurantRate=restaurantsRating
        break;
      case "1":
        selectedRestaurantRate=ratingCount[1]
        break;
      case "2":
        selectedRestaurantRate=ratingCount[2]
        break;
      case "3":
        selectedRestaurantRate=ratingCount[3]
        break;
      case "4":
        selectedRestaurantRate=ratingCount[4]
        break;
      case "5":
        selectedRestaurantRate=ratingCount[5]
        break;
    }
    setRestaurantList(selectedRestaurantRate)
    setSelectedRating(item);
  };
  const userReviews = restaurantsRating.find(item => item?.userId === userInfo.ID) ?? '';
  const index = restaurantsRating.indexOf(userReviews);
  const [isModalRateOpen, setModalRate] = useState(false);
  const [userReview, setUserReview] = useState(userReviews);
  const [isFirstTimeRate, setFirstTime] = useState(true);
  const [isCurrentRating, setCurrentRating] = useState(restaurantInfo.rate ?? 3.5);

  const sortRate=(restaurantsRating)=>{
    // const ratings = restaurantsRating?.map(item=>item.rating)
    // let rate =[]
    // //loop five times for each rating level
    // //filter corresponding and get the count
    // for (let i = 0; i < 5; i++) {
    // const temp= ratings.filter(item=>item===i+1).length
    //   rate.push(temp)
    // }
    // console.log({rate,test})
    // setRatingCount(rate.reverse())
    restaurantsRating.forEach((obj,index)=>
    {
      const currentItem=restaurantsRating[index]
      switch(obj.rating){
        case 1:
          arrayRating[1].push(currentItem)
          break;
        case 2:
          arrayRating[2].push(currentItem)
          break;
        case 3:
          arrayRating[3].push(currentItem)
          break;
        case 4:
          arrayRating[4].push(currentItem)
          break;
        case 5:
          arrayRating[5].push(currentItem)
          break;
      }
    })
    setRatingCount(arrayRating)
  }
  useEffect(() => {
    if (userReviews !== '') {
      setFirstTime(false);
    }
    sortRate(overallRate);
  }, []);
  if (index > -1) {
    restaurantsRating.splice(index, 1);
  }
  const openModal = () => {
    setModalRate(true);
  };
  const closeModal = () =>{
    setModalRate(false);
  };
  const SelfReview = () => {
    return (
      !isFirstTimeRate ?
        <RatingCard userReview={userReview} />
        :
        <Text style={styles.reviewText}>No Review</Text>
    );
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
    dispatch(updateRating({ id, userReview, userReviewResult, avg })).then(() => {
        setUserReview(userReviewResult);
        setTimeout(() => {
          dispatch(restaurantLoading());
          dispatch(PopulateRestaurantList()).then(()=>{
            sortRate([...restaurantsRating,userReviewResult])
            closeModal()
          });
        }, 3000);
      },
      () => {
        console.log('There Was An Error While Sending Your Review');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <BackButton onPress={onBackButton}></BackButton>
        <Text style={styles.header}>{restaurantInfo.restaurant + ' Customer Review'}</Text>
      </View>
      <View style={{marginHorizontal: 15}}>
        <View style={{ flexDirection:'row'}}>
          <View style={{alignSelf:'center',alignContent:'center', paddingRight: 30}}>
          <Text style={styles.rating}> {isCurrentRating.toFixed(1)}
          </Text>
          <Rating
            type="star"
            fractions={1}
            startingValue={isCurrentRating}
            readonly={true}
            showReadOnlyText={false}
            tintColor={EStyleSheet.value('$backGroundColor')}
            style={{paddingStart:10}}
            imageSize={18}
            ratingTextColor={EStyleSheet.value('$secondaryTextColor')}
          />
          <View style={{paddingStart:10,}}>
            <Text style={{fontSize:12,color:EStyleSheet.value('$secondaryTextColor'),paddingVertical:5,alignSelf:'flex-start'}}> {restaurantsRating.length+(!isFirstTimeRate?1:0)+" Reviews"}
            </Text>
          </View>

        </View>
          <BarChart
            style={{
              transform: [{ rotate: '90deg'}],
              marginStart:30,
              paddingRight: 0,
            }}
            data={{
              labels: [5,4,3,2,1],
              datasets: [
                {
                  data: [ratingCount[5].length,ratingCount[4].length,ratingCount[3].length,ratingCount[2].length,ratingCount[1].length]
                // data:ratingCount
                }
              ]
            }}
            chartConfig={{
              backgroundGradientFrom: "transparent",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "transparent",
              fillShadowGradient:EStyleSheet.value('$secondaryTextColor'),
              fillShadowGradientFrom:EStyleSheet.value('$secondaryTextColor'),
              fillShadowGradientFromOpacity:1,
              fillShadowGradientOpacity:1,
              fillShadowGradientTo:EStyleSheet.value('$secondaryTextColor'),
              fillShadowGradientToOffset:1,
              fillShadowGradientFromOffset:1,
              backgroundGradientToOpacity: 0,
              color: (opacity = 1) => EStyleSheet.value('$secondaryTextColor'),
              labelColor: (opacity = 1) => EStyleSheet.value('$secondaryTextColor'),
              strokeWidth: 1,
              barPercentage: 0.4,
            }}
            withHorizontalLabels={false}
            width={120} // from react-native
            height={180}
            verticalLabelRotation={270}
            withInnerLines={false}
            hideLegend
          />
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
          <Text style={styles.header}>Your Review</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={openModal}>
            <Image style={styles.addIcon} source={addIcon} />
            <Text style={{
              padding: 5,
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
              fontSize: 12,
            }}>{!isFirstTimeRate ? 'Update Review' : 'Add Review'}</Text>
          </TouchableOpacity>
        </View>
        <SelfReview />
        <FlatList
          data={rating}
          renderItem={RenderItem}
          horizontal={true}
          style={{ marginVertical: 5, }}
          showsHorizontalScrollIndicator={false}
        />

        <FlatList
          data={restaurantList}
          renderItem={renderRateCard}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {isModalRateOpen &&
        <ModalGiveRating closeModal={closeModal} isModalVisible={isModalRateOpen}
                         submit={(text, newRate) => submit(text, newRate)} userReview={userReview} />}
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
    alignSelf: 'center',
    color: '$primaryTextColor',
  },
  rating: {
    fontSize: 60,
    color: '$secondaryTextColor',
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
    alignSelf:'center',
    alignItems:'center',
    backgroundColor:'white',
    alignContent:'center'
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
