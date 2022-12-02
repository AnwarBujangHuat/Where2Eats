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
import { ExpandableFloatingButton } from '../../components/atoms/ExpandableFloatingButton';

export const RestaurantComponents = props => {
  const {
    isModalVisible,
    foodItem,
    restaurantInfo,
    onPress,
    selectedCategory,
    onBack,
    restaurantIcon,
    closeModal,
    menuIcon,
    isPreview,
    closePreviewModal,
    openPreviewModal,
    goToRating,
    onPressFloatingButton,
    foodList,
    onChangeText,
  } = props;
  const { restaurant, address, rate, image, food: foodItemList } = restaurantInfo;
  const renderItem = ({ item }) => {
    return (
      <FoodCard onPress={() => onPress(item)} name={item.name} price={item.price} desc={item.desc}
                image={item.image} />
    );
  };
  const renderMenu = (category) => {
    return foodList.filter(foods => foods.category === category);
  };
  return (
    <SafeAreaView style={styles.container}>
      <DetailsHeader image={image} back={onBack} disabled={true} rate={true} goToRating={goToRating}
                     rating={rate} onSearch={true} onChangeText={onChangeText} />
      <DescriptionLabel name={restaurant} location={address} icon={restaurantIcon}
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
      <ExpandableFloatingButton onPressItem={onPressFloatingButton} />
      {isModalVisible &&
        <ModalMenuDetails closeModal={closeModal} isModalVisible={isModalVisible} foodItem={foodItem} />}
      {isPreview &&
        <ModalWinner closeModal={closePreviewModal} isModalVisible={isPreview}
                     selectedRestaurant={restaurantInfo} isPreview={true} />
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
