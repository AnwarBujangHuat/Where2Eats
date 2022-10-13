import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text as RNText,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import { BackButton } from '../../components/atoms/BackButton';
import { Colors } from '../../Colors';
import personIcon from '../../assets/programmer.png';
import { EditableLabel } from '../../components/atoms/EditableLabel';
import { ModalEdit } from '../../components/molecules/ModalEdit';

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
                title={item.title} information={item.information} onPress={() => editInformation(item.id)} icon={item.icon} index={index}
              ></EditableLabel>);
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {
        isModalVisible &&
        <ModalEdit isModalVisible={isModalVisible} closeModal={closeModal} Title={selectedInfo} setUpdatedInfo={setUpdatedInfo}
          onDone={onDone} />
      }
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backGround: {
    backgroundColor: Colors.backGroundColor,
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
    color: Colors.primaryTextColor,
    margin: 10,
  },
  profileImage: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: Colors.secondaryBackGroundColor,
  },

});
