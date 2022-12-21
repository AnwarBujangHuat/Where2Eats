import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  Text as RNText,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {BackButton} from '../../components/atoms/BackButton';
import personIcon from '../../assets/programmer.png';
import {EditableLabel} from '../../components/atoms/EditableLabel';
import {ModalEdit} from '../../components/molecules/ModalEdit';
import {firebase} from '../../../src/firebase/config';
import {defaultValue} from '../../store/defaultValue';
import {ConstString} from '../../configs/Strings';
import {colors} from '../../configs/Const';

export const ProfileComponents = props => {
  const {
    goBackHome,
    InformationList,
    editInformation,
    isModalVisible,
    selectedInfo,
    closeModal,
    onDone,
    setUpdatedInfo,
  } = props;
  // const onPress = () => {
  //   const db = firebase.firestore();
  //   const batch = db.batch();
  //   defaultValue.forEach(doc => {
  //     const docRef = db.collection(ConstString.RESTAURANT).doc(); //automatically generate unique id
  //     batch.set(docRef, doc);
  //   });
  //   batch.commit().then(() => console.log('Congrats'));
  // };
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.rowContainer}>
        <BackButton onPress={goBackHome} />
        <RNText style={styles.title}>{'My Profile'}</RNText>
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Image style={styles.profileImage} source={personIcon} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={{marginTop: 15}}
          data={InformationList}
          renderItem={({item, index}) => {
            return (
              <EditableLabel
                title={item.title}
                information={item.information}
                onPress={() => editInformation(item.id)}
                icon={item.icon}
              />
            );
          }}
          showsHorizontalScrollIndicator={false}
        />
        {/*<TouchableOpacity*/}
        {/*  style={{*/}
        {/*    backgroundColor: colors.primary,*/}
        {/*    alignContent: 'center',*/}
        {/*    alignSelf: 'center',*/}
        {/*    padding: 20,*/}
        {/*    borderRadius: 20,*/}
        {/*    marginTop: 20,*/}
        {/*  }}*/}
        {/*  onPress={onPress}*/}
        {/*  disabled={true}>*/}
        {/*  <Text*/}
        {/*    style={{color: colors.white, fontSize: 16, alignSelf: 'center'}}>*/}
        {/*    My Intern is Too Lazy*/}
        {/*  </Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
      {isModalVisible && (
        <ModalEdit
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          Title={selectedInfo}
          setUpdatedInfo={setUpdatedInfo}
          onDone={onDone}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backGround: {
    backgroundColor: colors.bg,
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
    color: colors.white,
    margin: 10,
  },
  profileImage: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: colors.secondBg,
  },
});
