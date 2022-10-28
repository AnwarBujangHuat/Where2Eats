import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Text as RNText,
  TouchableOpacity,
  View
} from 'react-native';
import { BackButton } from '../../components/atoms/BackButton';
import { Colors } from '../../Colors';
import personIcon from '../../assets/programmer.png';
import { EditableLabel } from '../../components/atoms/EditableLabel';
import { ModalEdit } from '../../components/molecules/ModalEdit';
import EStyleSheet from 'react-native-extended-stylesheet';
import { firebase } from '../../../src/firebase/config'
import { defaultValue } from '../../store/defaultValue';
import { ConstString } from '../../Strings';

export const ProfileComponents = props => {

  const {
    goBackHome,
    InformationList,
    editInformation,
    isModalVisible,
    selectedInfo,
    closeModal,
    onDone,
    setUpdatedInfo
  } = props;
  const guid = () => {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4();
  };
const onPress=()=>{
  const db = firebase.firestore();
  const batch = db.batch()
  defaultValue.forEach((doc) => {
    const docRef = db.collection(ConstString.RESTAURANT).doc(guid()); //automatically generate unique id
    batch.set(docRef, doc);
  });
  batch.commit().then(()=>console.log("Congrats"))
}
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.rowContainer}>
        <BackButton onPress={goBackHome}></BackButton>
        <RNText style={styles.title}>{'My Profile'}</RNText>
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Image style={styles.profileImage} source={personIcon} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={{ marginTop: 15, }}
          data={InformationList}
          renderItem={({ item, index }) => {
            return (
              <EditableLabel
                title={item.title} information={item.information} onPress={() => editInformation(item.id)}
                icon={item.icon} index={index}
              ></EditableLabel>);
          }}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={{
          backgroundColor: Colors.primaryColor,
          alignContent: 'center',
          alignSelf: 'center',
          padding:20,
          borderRadius:20,
          marginTop:20,
        }} onPress={onPress}>
          <Text style={{ color: 'white', fontSize: 16, alignSelf: 'center' }}>My Intern is Too Lazy</Text>
        </TouchableOpacity>
      </View>
      {
        isModalVisible &&
        <ModalEdit isModalVisible={isModalVisible} closeModal={closeModal} Title={selectedInfo}
                   setUpdatedInfo={setUpdatedInfo}
                   onDone={onDone} />
      }
    </SafeAreaView>
  );
};
const styles = EStyleSheet.create({
  backGround: {
    backgroundColor: '$backGroundColor',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$primaryTextColor',
    margin: 10,
  },
  profileImage: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: '$secondaryBackGroundColor',
  },

});
