import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Rating } from 'react-native-ratings';

import React from 'react';
import { BackButton } from '../../components/atoms/BackButton';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RatingCard } from '../../components/molecules/RatingCard';
import addIcon from '../../assets/plus.png';

export const RatingComponents = props => {
  const firstTime = true;
  const {
    onBackButton,
    restaurantInfo
  } = props;
  const SelfReview = () => {
    return (
      firstTime ?
        <RatingCard title={'Mohamad Kasim Bin Abu'}
                    description={'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.'}
                    rating={4.6} timestamp={'10/31/2022, 1:17:51 PM'} />
        :
        <Text style={styles.reviewText}>No Review</Text>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <BackButton onPress={onBackButton}></BackButton>
        <Text style={styles.header}>{restaurantInfo.restaurant + ' Customer Review'}</Text>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 5, }}>
        <Text style={styles.reviewHeader}>Overall Rating</Text>
        <Rating
          type="star"
          fractions={1}
          startingValue={3.7}
          readonly={true}
          showReadOnlyText={false}
          showRating
          ratingBackgroundColor={'#000'}
          tintColor={EStyleSheet.value('$backGroundColor')}
          imageSize={45}
          ratingTextColor={EStyleSheet.value('$secondaryTextColor')}
          style={styles.ratingContainer}
        />
        <View style={{flexDirection:'row'}}>
          <Text style={styles.header}>Your Review</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => {
            console.log("hEl");
          }}>
            <Image style={styles.addIcon} source={addIcon} />
            <Text style={{
              padding: 5,
              color: 'white',
              fontWeight: 'bold',
              alignSelf:'center',
              fontSize: 12,
            }}>Add Review</Text>
          </TouchableOpacity>
        </View>

        <SelfReview />
        {/*<AirbnbRating*/}
        {/*  count={5}*/}
        {/*  isDisabled={true}*/}
        {/*  showRating={true}*/}
        {/*  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}*/}
        {/*  defaultRating={3}*/}
        {/*  size={20}*/}
        {/*/>*/}
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
    margin: 10,
    color: '$primaryTextColor',
  },
  reviewHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
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
    marginStart: 10,
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
    right: 5, position: 'absolute',
    elevation: 10,
  },
});
