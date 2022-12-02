import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { BackButton } from '../../../components/atoms/BackButton';
import { ConstString } from '../../../Strings';
import EStyleSheet from 'react-native-extended-stylesheet';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import addIcon from '../../../assets/plus.png';
import { ModalMenu } from '../../../components/molecules/ModalMenu';
import { ModalUploading } from '../../../components/molecules/ModalUploading';
import { ModalMenuDetails } from '../../../components/molecules/ModalMenuDetails';
import { FoodCard } from '../../../components/molecules/FoodCard';
import { SearchButton } from '../../../components/atoms/SearchButton';

export const SetupMenuComponents = props => {
  const {
    onBackButton,
    categories,
    selectedCategory,
    setSelectedCategory,
    menuIcon,
    onPressAdd,
    showMenuDetails,
    editorMode,
    onPressDelete,
    onPressEdit,
    foodItemLists,
    Menu,
    uploadMenu,
    isModalVisible,
    isActionModalVisible,
    isModalMenuVisible,
    closeModal,
    addFoodItem,
    Category,
    selectedFoodItem,
    updateFoodItem,
    closeActionModal,
    goBack,
    isSuccessful,
    closeMenuDetails,
    onSearch,
    onChangeText,
    onPressSearch,
    foodList,
    action
  } = props;
  const renderItem = ({ item }) => {
    return (
      <FoodCard onPress={() => showMenuDetails(item)} name={item.name} price={item.price} desc={item.desc}
                image={item.image} editable={true} onPressDelete={() => onPressDelete(item)}
                onPressEdit={() => onPressEdit(item)} />
    );
  };
  const renderMenu = (category) => {
    return editorMode ?
      //if Restaurant Exist and in Editor Mode then filter existing MENU
      foodList.filter(foods => foods.category === category)
      :
      //First time Create and not Editor Mode then show temp menu
      Menu.filter(foods => foods.category === category);
  };
  const renderSelectedCategory = () => {
    //Sort Category based on id to maintain order {Main Dish, Side Dish, Dessert, Appetizer, Drinks }
    return selectedCategory.sort((a, b) => {return a.id - b.id;});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <BackButton onPress={onBackButton}></BackButton>
        {editorMode &&
          <SearchButton onSearch={onSearch} onChangeText={onChangeText} onPress={onPressSearch}></SearchButton>
        }
        {!onSearch &&
          <Text style={styles.title}>{ConstString.MENU_BOOK}</Text>
        }
      </View>
      <Text style={{
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        paddingStart: 15,
        color: EStyleSheet.value('$tertiaryColor')
      }}>Add
        Category</Text>
      <View style={styles.inputContainer}>
        <SelectBox
          label="Select Menu Category"
          options={categories}
          labelStyle={styles.label}
          inputFilterStyle={styles.label}
          listEmptyLabelStyle={styles.label}
          selectedValues={selectedCategory}
          onMultiSelect={(item) => setSelectedCategory(xorBy(selectedCategory, [item], 'id'))}
          onTapClose={(item) => setSelectedCategory(xorBy(selectedCategory, [item], 'id'))}
          isMulti
          arrowIconColor={EStyleSheet.value('$primaryColor')}
          searchIconColor={EStyleSheet.value('$primaryColor')}
          toggleIconColor={EStyleSheet.value('$primaryColor')}
          multiOptionContainerStyle={{ backgroundColor: EStyleSheet.value('$primaryColor') }}
          multiOptionsLabelStyle={{ fontSize: 16, color: 'white' }}
          selectedItemStyle={{ fontSize: 16, color: EStyleSheet.value('$primaryTextColor') }}
          optionsLabelStyle={{ fontSize: 16, color: EStyleSheet.value('$primaryTextColor') }}
        />
      </View>
      <FlatList
        data={renderSelectedCategory()}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 10 }}
        renderItem={({ item }) => {
          const category = item.item;
          return (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginHorizontal: 10 }}>
                <Text style={styles.header}>{category}</Text>
                <Image style={styles.icon} source={menuIcon(category)}></Image>
                <View style={{ flexDirection: 'row', right: 5, position: 'absolute' }}>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                    onPressAdd({ item: category });
                  }}>
                    <Image style={styles.addIcon} source={addIcon} />
                    <Text style={{
                      padding: 5,
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 12,
                    }}>New Item</Text>
                  </TouchableOpacity>
                </View>
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
      {!editorMode &&
        <TouchableOpacity
          style={styles.button}
          onPress={uploadMenu}>
          <Text style={styles.buttonText}>Finish Setup Store</Text>
        </TouchableOpacity>
      }
      {
        isModalVisible &&
        <ModalMenu isModalVisible={isModalVisible} closeModal={closeModal}
                   addFoodItem={addFoodItem} Category={Category} foodItem={selectedFoodItem}
                   updateFoodItem={updateFoodItem} editorMode={editorMode} />
      }
      {
        isActionModalVisible &&
        <ModalUploading isModalVisible={isActionModalVisible} closeModal={closeActionModal} action={action}
                        goBack={goBack} isSuccess={isSuccessful} />
      }
      {
        isModalMenuVisible &&
        <ModalMenuDetails closeModal={closeMenuDetails} isModalVisible={isModalMenuVisible}
                          foodItem={selectedFoodItem} />
      }
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
  buttonContainer: {
    padding: 7,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '$primaryColor',
    borderRadius: 20,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
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
  inputContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '$primaryTextColor',
  },
  button: {
    backgroundColor: '$lightPrimaryColor',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: Dimensions.get('screen').width - 30,
    textTransform: 'uppercase',
    bottom: 30,
    position: 'absolute',
    marginHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$primaryTextColor',
    marginStart: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
});
