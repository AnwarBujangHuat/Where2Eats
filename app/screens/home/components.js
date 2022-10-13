import React from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import { Header } from '../../components/molecules/Header';
import personIcon from '../../assets/programmer.png';
import { SearchBar } from '../../components/molecules/SearchBar';
import search from '../../assets/search.png';
import { ConstFoodCategory } from './ConstFoodCategory';
import { ImageButton } from '../../components/atoms/ImageButton';
import { RestaurantCard } from '../../components/molecules/RestaurantCard';
import { FloatingActionButton } from '../../components/atoms/FloatingActionButtom';
import { ModalMenuDetails } from '../../components/molecules/ModalMenuDetails';
import { ModalMenuButton } from '../../components/molecules/ModalMenuButton';
import { Colors } from '../../Colors';


export const HomeComponents = props => {
  const {
    selectedTypes,
    currentRestaurant,
    setRestaurant,
    isOpenMenu,
    onSearch,
    gotoRoulette,
    openMenu,
    goToRestaurant,
    closeModal,
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Header source={personIcon} onPress={openMenu}></Header>
      {isOpenMenu &&
        <ModalMenuButton isModalVisible={isOpenMenu} onPress={closeModal} />}
      <SearchBar placeholder={'Search'} onChangeText={onSearch} source={search} />
      <View style={styles.buttonContainer}>
        <FlatList
          data={ConstFoodCategory}
          renderItem={({ item }) => {
            return (
              <ImageButton item={item} onPress={() => setRestaurant(item.title)} selected={selectedTypes} />
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={currentRestaurant}
        renderItem={({ item }) => {
          return (
            <RestaurantCard
              onPress={() => goToRestaurant(item.id)}
              name={item.restaurant} category={item.category}
              address={item.address} rate={item.rate} image={item.image} description={item.description}
            ></RestaurantCard>);
        }}
        showsHorizontalScrollIndicator={false} />
      <FloatingActionButton onPress={gotoRoulette}></FloatingActionButton>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGroundColor,
  },
  buttonContainer: {
    marginStart: 10,
  }
});
