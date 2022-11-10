import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { DetailsHeader } from '../../../components/molecules/DetailsHeader';
import { DescriptionLabel } from '../../../components/molecules/DescriptionLabel';
import { FoodCard } from '../../../components/molecules/FoodCard';
import { ModalMenuDetails } from '../../../components/molecules/ModalMenuDetails';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ModalWinner } from '../../../components/molecules/ModalWinner';
import { defaultValue } from '../../../store/defaultValue';
import { ExpandableFloatingButton } from '../../../components/atoms/ExpandableFloatingButton';
import { ConstString } from '../../../Strings';

export const SortedRestaurantComponents = props => {
  const {
    isModalVisible,
    foodItem,
    current,
    onPress,
    // foodItemList,
    // selectedCategory,
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
  const foodItemList = defaultValue[1].food;
  const selectedCategory = [
    { id: 1, item: ConstString.MAINDISH },
    { id: 2, item: ConstString.SIDEDISH },
    { id: 3, item: ConstString.DESSERT },
    { id: 4, item: ConstString.APPETIZER },
    { id: 5, item: ConstString.DRINKS },
  ];
  let menu = {
    'Main Dish': [],
    'Side Dish': [],
    'Dessert': [],
    'Appetizer': [],
    'Drinks': []
  };
  foodItemList.forEach(food => {
    console.log({path:"foodItem-ForEach",data:food.category})
    switch(food.category) {
      case ConstString.MAINDISH:
        menu[ConstString.MAINDISH].push(food);
        break;
      case ConstString.SIDEDISH:
        menu[ConstString.SIDEDISH].push(food);
        break;
      case ConstString.DESSERT:
        menu[ConstString.DESSERT].push(food);
        break;
      case ConstString.APPETIZER:
        menu[ConstString.APPETIZER].push(food);
        break;
      case ConstString.DRINKS:
        menu[ConstString.DRINKS].push(food);
        break;
    }
  });

  const renderItem = ({ item }) => {
    return (
      <FoodCard onPress={() => onPress(item)} name={item.name} price={item.price} desc={item.desc}
                image={item.image} />
    );
  };
  const renderMenu=(category)=>{
    return menu[category]
  }
  return (
    <SafeAreaView style={styles.container}>
      <DetailsHeader image={current.image} back={onBack} disabled={true} rate={true} goToRating={goToRating}
                     rating={current.rate} />
      <DescriptionLabel name={'Sorted: ' + current.restaurant} location={current.address} icon={restaurantIcon}
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
