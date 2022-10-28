import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { DetailsHeader } from '../../components/molecules/DetailsHeader';
import { DescriptionLabel } from '../../components/molecules/DescriptionLabel';
import { FoodCard } from '../../components/molecules/FoodCard';
import { ModalMenuDetails } from '../../components/molecules/ModalMenuDetails';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ConstString } from '../../Strings';

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
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <DetailsHeader image={current.image} back={onBack} disabled={true} rate={true} />
      <DescriptionLabel name={current.restaurant} location={current.address} icon={restaurantIcon} />
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
});
