import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DetailsHeader } from '../../components/molecules/DetailsHeader';
import { DescriptionLabel } from '../../components/molecules/DescriptionLabel';
import { FoodCard } from '../../components/molecules/FoodCard';
import { ModalMenuDetails } from '../../components/molecules/ModalMenuDetails';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ModalWinner } from '../../components/molecules/ModalWinner';
import { FloatingActionButton } from '../../components/atoms/FloatingActionButtom';
import rouletteIcon from '../../assets/bet.png';
import addIcon from '../../assets/plus.png';
import { Colors } from '../../Colors';

export const RestaurantComponents = props => {
  const {
    isModalVisible,
    foodItem,
    onPress,
    current,
    onBack,
    restaurantIcon,
    closeModal,
    menuIcon,
    isPreview,
    closePreviewModal,
    openPreviewModal,
    goToRating
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <DetailsHeader image={current.image} back={onBack} disabled={true} rate={true} />
      <DescriptionLabel name={current.restaurant} location={current.address} icon={restaurantIcon} onPress={openPreviewModal}/>
      <SectionList
        sections={current.food}
        keyExtractor={(item, index) => item + index}
        renderItem={(item) => { return null; }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { item, data } }) => (
          <>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.header}>{item}</Text>
              <Image style={styles.icon} source={menuIcon(item)}></Image>
            </View>
            <FlatList
              data={data}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <FoodCard onPress={() => onPress(item)} name={item.name} price={item.price} desc={item.desc}
                          image={item.image} />
              )} />
          </>
        )
        } />
      {isModalVisible &&
        <ModalMenuDetails closeModal={closeModal} isModalVisible={isModalVisible} foodItem={foodItem} />}
      {isPreview&&
        <ModalWinner closeModal={closePreviewModal} isModalVisible={isPreview}
                     selectedRestaurant={current} isPreview={true}/>
      }
      <View
        style={styles.fab}>
        <TouchableOpacity
          style={styles.fabContainer}
          onPress={goToRating}>
          <Image style={styles.addIcon} source={addIcon} />
          <Text style={{
            padding: 5,
            color: 'white',
            fontWeight: 'bold',
            alignSelf:'center',
            fontSize: 14,
          }}>Reviews</Text>
        </TouchableOpacity>
      </View>

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
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  fabContainer: {
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 40,
    padding: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    flexDirection: 'row',

  },
  fab: {
    position: 'absolute',
    bottom: 35,
    right: 20,
  },
  addIcon: {
    width: 10,
    height: 10,
    marginStart: 5,
    alignSelf: 'center',
  },
});
