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
import { defaultValue } from '../../store/defaultValue';
import { ExpandableFloatingButton } from '../../components/atoms/ExpandableFloatingButton';
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
    goToRating,
    onPressItem
  } = props;
  const getCurrent=  current!==undefined?current:defaultValue[0];
  return (
    <SafeAreaView style={styles.container}>
      <DetailsHeader image={getCurrent.image} back={onBack} disabled={true} rate={true} goToRating={goToRating} rating={current.rate} />
      <DescriptionLabel name={getCurrent.restaurant} location={getCurrent.address} icon={restaurantIcon} onPress={openPreviewModal}/>
      <SectionList
        sections={getCurrent.food}
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
          </>)} />

      <ExpandableFloatingButton onPressItem={onPressItem}/>
      {isModalVisible &&
        <ModalMenuDetails closeModal={closeModal} isModalVisible={isModalVisible} foodItem={foodItem} />}
      {isPreview&&
        <ModalWinner closeModal={closePreviewModal} isModalVisible={isPreview}
                     selectedRestaurant={current} isPreview={true}/>
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
  fabText:{
    padding: 5,
    color: '$secondaryTextColor',
    fontWeight: 'bold',
    alignSelf:'center',
    fontSize: 14,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
