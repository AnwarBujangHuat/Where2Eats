import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import React from 'react';
import {BackButton} from '../../components/atoms/BackButton';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RatingCard} from '../../components/molecules/RatingCard';
import addIcon from '../../assets/plus.png';
import {ModalGiveRating} from '../../components/molecules/ModalGiveRating';
import {BarChart} from 'react-native-chart-kit';
import {RatingButton} from '../../components/atoms/RatingButton';

export const RatingComponents = props => {
  const {
    onBackButton,
    restaurantInfo,
    isModalRateOpen,
    closeModal,
    submit,
    userReview,
    isCurrentRating,
    ratingCount,
    openModal,
    isFirstTimeRate,
    restaurantList,
    ratingChipButton,
    onSelectedRating,
    isSelectedRating,
  } = props;
  const {ratings} = restaurantInfo;
  const RenderItem = ({item}) => {
    return (
      <RatingButton
        rating={item}
        onPress={onSelectedRating}
        selected={isSelectedRating}
      />
    );
  };
  const renderRateCard = ({item}) => {
    return <RatingCard userReview={item} />;
  };
  const SelfReview = () => {
    return !isFirstTimeRate ? (
      <RatingCard userReview={userReview} />
    ) : (
      <Text style={styles.reviewText}>No Review</Text>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <BackButton onPress={onBackButton} />
        <Text style={styles.header}>
          {restaurantInfo.restaurant + ' Customer Review'}
        </Text>
      </View>
      <View style={{marginHorizontal: 15}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              paddingRight: 30,
            }}>
            <Text style={styles.rating}> {isCurrentRating.toFixed(1)}</Text>
            <Rating
              type="star"
              fractions={1}
              startingValue={isCurrentRating}
              readonly={true}
              showReadOnlyText={false}
              tintColor={EStyleSheet.value('$backGroundColor')}
              style={{paddingStart: 10}}
              imageSize={18}
              ratingTextColor={EStyleSheet.value('$secondaryTextColor')}
            />
            <View style={{paddingStart: 10}}>
              <Text
                style={{
                  fontSize: 12,
                  color: EStyleSheet.value('$secondaryTextColor'),
                  paddingVertical: 5,
                  alignSelf: 'flex-start',
                }}>
                {ratings?.length ?? 0 + ' Reviews'}
              </Text>
            </View>
          </View>
          <BarChart
            style={{
              transform: [{rotate: '90deg'}],
              marginStart: 30,
              paddingRight: 0,
            }}
            data={{
              labels: [5, 4, 3, 2, 1],
              datasets: [
                {
                  data: ratingCount ?? [],
                },
              ],
            }}
            chartConfig={{
              backgroundGradientFrom: 'transparent',
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: 'transparent',
              fillShadowGradient: EStyleSheet.value('$secondaryTextColor'),
              fillShadowGradientFrom: EStyleSheet.value('$secondaryTextColor'),
              fillShadowGradientFromOpacity: 1,
              fillShadowGradientOpacity: 1,
              fillShadowGradientTo: EStyleSheet.value('$secondaryTextColor'),
              fillShadowGradientToOffset: 1,
              fillShadowGradientFromOffset: 1,
              backgroundGradientToOpacity: 0,
              color: (opacity = 1) => EStyleSheet.value('$secondaryTextColor'),
              labelColor: (opacity = 1) =>
                EStyleSheet.value('$secondaryTextColor'),
              strokeWidth: 1,
              barPercentage: 0.4,
            }}
            withHorizontalLabels={false}
            width={120}
            height={180}
            verticalLabelRotation={270}
            withInnerLines={false}
            hideLegend
          />
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.header}>Your Review</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={openModal}>
            <Image style={styles.addIcon} source={addIcon} />
            <Text
              style={{
                padding: 5,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 12,
              }}>
              {!isFirstTimeRate ? 'Update Review' : 'Add Review'}
            </Text>
          </TouchableOpacity>
        </View>
        <SelfReview />
        <FlatList
          data={ratingChipButton}
          renderItem={RenderItem}
          horizontal={true}
          style={{marginVertical: 5}}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={restaurantList}
          renderItem={renderRateCard}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {isModalRateOpen && (
        <ModalGiveRating
          closeModal={closeModal}
          isModalVisible={isModalRateOpen}
          submit={(text, newRate) => submit(text, newRate)}
          userReview={userReview}
        />
      )}
    </SafeAreaView>
  );
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
    alignSelf: 'center',
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
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  reviewText: {
    fontSize: 14,
    color: '$secondaryTextColor',
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '$primaryColor',
    borderRadius: 20,
    shadowOffset: {width: -2, height: 2},
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    right: 0,
    position: 'absolute',
    elevation: 10,
  },
});
