import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { DetailsHeader } from '../../components/molecules/DetailsHeader';
import { DescriptionLabel } from '../../components/molecules/DescriptionLabel';
import { FoodCard } from '../../components/molecules/FoodCard';
import { ModalMenuDetails } from '../../components/molecules/ModalMenuDetails';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ModalWinner } from '../../components/molecules/ModalWinner';
import { defaultValue } from '../../store/defaultValue';
import { ExpandableFloatingButton } from '../../components/atoms/ExpandableFloatingButton';
import { ConstString } from '../../Strings';

export const RestaurantComponents = props => {
  const {
    isModalVisible,
    foodItem,
    current,
    onPress,
    foodItemList,
    selectedCategory,
    onBack,
    restaurantIcon,
    closeModal,
    menuIcon,
    isPreview,
    closePreviewModal,
    openPreviewModal,
    goToRating,
    onPressItem,
  } = props;
  // const foodItemList=defaultValue[1].food
  // const selectedCategory=[
  //   { id: 1, item: ConstString.MAINDISH },
  //   { id: 2, item: ConstString.SIDEDISH },
  //   { id: 3, item: ConstString.DESSERT },
  //   { id: 4, item: ConstString.APPETIZER },
  //   { id: 5, item: ConstString.DRINKS },
  // ]
  const renderItem = ({ item }) => {
    return (
      <FoodCard onPress={() => onPress(item)} name={item.name} price={item.price} desc={item.desc}
                image={item.image} />
    );
  };
  const renderMenu=(category)=>{
    return foodItemList.filter(foods => foods.category === category)
    // return foodItemList.filter(foods => console.log(foods.category))
  }
  return (
    <SafeAreaView style={styles.container}>
      <DetailsHeader image={current.image} back={onBack} disabled={true} rate={true} goToRating={goToRating}
                     rating={current.rate} />
      <DescriptionLabel name={current.restaurant} location={current.address} icon={restaurantIcon}
                        onPress={openPreviewModal} />
      <FlatList
        data={selectedCategory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const category = item.item;
          return (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>
                <Text style={styles.header}>{category}</Text>
                <Image style={styles.icon} source={menuIcon(category)}></Image>
              </View>
              <View>
                <FlatList
                  data={renderMenu(category)}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderItem}>
                </FlatList>
              </View>
            </>
          );
        }
        } />
      <ExpandableFloatingButton onPressItem={onPressItem} />
      {isModalVisible &&
        <ModalMenuDetails closeModal={closeModal} isModalVisible={isModalVisible} foodItem={foodItem} />}
      {isPreview &&
        <ModalWinner closeModal={closePreviewModal} isModalVisible={isPreview}
                     selectedRestaurant={current} isPreview={true} />
      }
    </SafeAreaView>
  );
};
const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$backGroundColor',
    paddingBottom: 20,
    flex: 1
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: '$primaryTextColor',
  },
  fabText: {
    padding: 5,
    color: '$secondaryTextColor',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 14,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
