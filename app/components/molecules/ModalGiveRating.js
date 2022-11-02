import React, { useState } from 'react';
import {
  Dimensions,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AirbnbRating } from 'react-native-ratings';

const { width } = Dimensions.get('window');

export const ModalGiveRating = ({ closeModal, isModalVisible, submit, userReview }) => {
  const { review, rating, updatedAt,createdAt } = userReview|| {};
  const [textReview,setReview]=useState(review)
  const [newRate,setRate]=useState(rating)
  let status;
  if(updatedAt===undefined&&createdAt===undefined)
  {
  status="First Time";
  }
  else if(updatedAt!==undefined){
    status="Updated At: "+ updatedAt;
  }
  else{
    status="Created At: "+ createdAt;
  }
  return (
    <>
      {
        isModalVisible &&
        <SafeAreaView style={styles.screen}>
          <Modal animationType="none"
                 transparent visible={isModalVisible}
                 presentationStyle="overFullScreen">
            <View style={styles.viewWrapper}>
              <View style={styles.modalView}>
                <Text style={styles.header}>{'What\'s Your Review?'}</Text>
                <AirbnbRating
                  count={5}
                  isDisabled={false}
                  showRating={true}
                  onFinishRating={(rate)=>setRate(rate)}
                  reviews={['Terrible', 'Hmm...', 'OK', 'Quite Good', 'Excellent']}
                  defaultRating={rating!==undefined?rating:1}
                  ratingContainerStyle={{ marginVertical: 20, }}
                  size={30} />
                <TextInput
                  style={styles.descriptionInput}
                  placeholder={'Enter Review'}
                  value={textReview}
                  multiline={true}
                  onChangeText={setReview}
                  placeholderTextColor={EStyleSheet.value('$secondaryTextColor')}
                  overflow="hidden"
                  keyboardAppearance="dark"
                  autoCorrect={false} />
                <Text style={styles.desc}>{status}</Text>

                <View style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginVertical: 5,
                }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={closeModal}
                  >
                    <Text style={styles.buttonTextSpin}>Go Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonVisit}
                    onPress={()=>submit(textReview,newRate)}>
                    <Text style={styles.buttonTextMenu}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      }
    </>
  );
};
const styles = EStyleSheet.create({
  buttonVisit: {
    backgroundColor: '$secondaryBackGroundColor',
    alignItems: 'center',
    padding: 5,
    width: '50%',
    borderLeftColor: '$primaryColor',
    borderColor: '$secondaryBackGroundColor',
    borderWidth: .5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  button: {
    backgroundColor: '$secondaryBackGroundColor',
    alignItems: 'center',
    padding: 5,
    width: '50%',
    borderColor: '$secondaryBackGroundColor',
    borderWidth: .5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  buttonTextSpin: {
    fontSize: 16,
    color: '$tertiaryColor',
    fontWeight: 'normal',
  },
  buttonTextMenu: {
    fontSize: 16,
    color: '$primaryColor',
    fontWeight: 'normal',
  },

  changeButton:
    {
      position: 'absolute',
      left: 0,
      fontWeight: 'bold',
      fontSize: 12,
      color: 'white',
      backgroundColor: '$primaryColor',
      padding: 5,
    },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'normal',
  },
  container: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    position: 'absolute',
    top: '30%',
    left: '50%',
    elevation: 5,
    transform: [{ translateX: -(width * 0.45) },
      { translateY: -90 }],
    width: width * 0.9,
    backgroundColor: '$secondaryBackGroundColor',
    borderRadius: 7,
  },
  header: {
    fontSize: 18,
    paddingTop: 20,
    fontWeight: 'bold',
    color: '$primaryTextColor',
    shadowOffset: { width: -2, height: 1 },
    shadowColor: '$primaryColor',
    shadowOpacity: 0.1,
    alignSelf: 'center',
    shadowRadius: 2,
  },
  desc: {
    color: '$tertiaryTextColor', paddingEnd: 5, marginTop: 5,
    fontSize: 12, fontWeight: 'normal', textAlign: 'justify'
  },

  descriptionInput: {
    fontSize: 14,
    fontWeight: 'normal',
    borderWidth: 1,
    borderBottomColor: '$primaryColor',
    color: '$secondaryTextColor',
    borderColor: 'transparent',
    textAlignVertical: 'center',
    backgroundColor: '$secondaryBackGroundColor',
    paddingTop: 20,
    paddingBottom:10,
  },
});
