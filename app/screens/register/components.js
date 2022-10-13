import React from 'react';

import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { DetailsHeader } from '../../components/molecules/DetailsHeader';
import { ConstFoodCategory } from '../home/ConstFoodCategory';
import { ImageButton } from '../../components/atoms/ImageButton';
import { InputField } from '../../components/atoms/InputField';

import { Colors } from '../../Colors';

export const RegisterComponents = props => {
  const {
    selectedTypes,
    goToMenu,
    goBack,
    setName,
    setDescription,
    categorySelected
  } = props;
  return (
    <View style={styles.container}>
      <DetailsHeader back={goBack} disabled={false} />
      <View style={styles.inputContainer}>
        <Text style={styles.header}>{'Restaurant Name'}</Text>
        <InputField placeholder={'Please Input Name'} multiline={false} onChange={(text) => setName(text)} />
        <Text style={styles.header}>{'Description'}</Text>
        <InputField placeholder={'Please Input Description'} multiline={true}
          onChange={(text) => setDescription(text)} />
        <Text style={styles.header}>{'Category'}</Text>
        <FlatList
          data={ConstFoodCategory}
          renderItem={({ item }) => {
            return (
              <ImageButton item={item} onPress={() => categorySelected({ item })} selected={selectedTypes} />
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.header}>{'Location'}</Text>
        <TouchableOpacity
          style={styles.buttonLocation}
          onPress={() => console.log('j')}>
          <Text style={{ color: Colors.primaryColor, fontWeight: 'bold' }}>Location</Text>
        </TouchableOpacity>
        <Text style={styles.desc}>{'Location inserted'}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={goToMenu}>
        <Text style={styles.buttonText}>Go to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backGroundColor,
    flex: 1,
  },
  descriptionInput: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderBottomColor: Colors.primaryColor,
    borderColor: 'white',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: Colors.primaryTextColor,
    shadowOffset: { width: -2, height: 2 },
    shadowColor: Colors.primaryColor,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: Colors.lightPrimaryColor,
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    width: Dimensions.get('screen').width - 30,
    textTransform: 'uppercase',
    bottom: 30,
    position: 'absolute',
    marginHorizontal: 15,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonLocation: {
    borderColor: Colors.lightPrimaryColor,
    borderWidth: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    textTransform: 'uppercase',
  },
  inputContainer: {
    marginTop: 30,
    marginHorizontal: 15,
  },
  desc: {
    color: Colors.secondaryTextColor, paddingTop: 5,
    fontSize: 12,
    marginVertical: 5,
  },
});
