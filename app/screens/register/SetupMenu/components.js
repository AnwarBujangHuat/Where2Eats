import React, {
  useEffect,
  useState
} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
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

// export const SetupMenuComponents=()=>{
//   return(
//     <SafeAreaView style={styles.container}>
//       <View style={styles.rowContainer}>
//         <BackButton onPress={onBackButton}></BackButton>
//         <Text style={styles.title}>{ConstString.MENU_BOOK}</Text>
//       </View>
//       <Text style={{
//         marginTop: 20,
//         fontSize: 16,
//         fontWeight: 'bold',
//         paddingStart: 15,
//         color: EStyleSheet.value('$tertiaryColor')
//       }}>Add
//         Category</Text>
//       <View style={styles.inputContainer}>
//         <SelectBox
//           label="Select Menu Category"
//           options={categoryList}
//           labelStyle={styles.label}
//           inputFilterStyle={styles.label}
//           listEmptyLabelStyle={styles.label}
//           selectedValues={selectedCategory}
//           onMultiSelect={(item) => setSelectedCategory(xorBy(selectedCategory, [item], 'id'))}
//           onTapClose={(item) => setSelectedCategory(xorBy(selectedCategory, [item], 'id'))}
//           isMulti
//           arrowIconColor={EStyleSheet.value('$primaryColor')}
//           searchIconColor={EStyleSheet.value('$primaryColor')}
//           toggleIconColor={EStyleSheet.value('$primaryColor')}
//           multiOptionContainerStyle={{ backgroundColor: EStyleSheet.value('$primaryColor') }}
//           multiOptionsLabelStyle={{ fontSize: 16, color: 'white' }}
//           selectedItemStyle={{ fontSize: 16, color: EStyleSheet.value('$primaryTextColor') }}
//           optionsLabelStyle={{ fontSize: 16, color: EStyleSheet.value('$primaryTextColor') }}
//         />
//       </View>
//       <SectionList style={{ marginHorizontal: 10, marginTop: 20, marginBottom: id === undefined ? 55 : 10, }}
//                    sections={selectedCategory}
//                    showsVerticalScrollIndicator={false}
//                    keyExtractor={(item, index) => item + index}
//                    renderItem={(item) => { return null; }}
//                    stickySectionHeadersEnabled={false}
//                    renderSectionHeader={({ section: { item, data } }) => (
//                      <>
//                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>
//                          <Text style={styles.header}>{item}</Text>
//                          <Image style={styles.icon} source={menuIcon(item)}></Image>
//                          <View style={{ flexDirection: 'row', right: 5, position: 'absolute' }}>
//                            <TouchableOpacity style={styles.buttonContainer} onPress={() => {
//                              // console.log({item})
//                              openModal({ item });
//                            }}>
//                              <Image style={styles.addIcon} source={addIcon} />
//                              <Text style={{
//                                padding: 5,
//                                color: 'white',
//                                fontWeight: 'bold',
//                                fontSize: 12,
//                              }}>New Item</Text>
//                            </TouchableOpacity>
//                          </View>
//                        </View>
//                        <View>
//                          <FlatList
//                            data={data}
//                            horizontal={true}
//                            showsHorizontalScrollIndicator={false}
//                            renderItem={renderItem}>
//                          </FlatList>
//                        </View>
//                      </>
//                    )}
//       />
//       {id === undefined &&
//         <TouchableOpacity
//           style={styles.button}
//           onPress={addMenu}>
//           <Text style={styles.buttonText}>Finish Setup Store</Text>
//         </TouchableOpacity>
//       }
//       {
//         isModalVisible &&
//         <ModalMenu isModalVisible={isModalVisible} closeModal={closeModal} selectedCategory={selectedCategory}
//                    setFinalMenu={setSelectedCategory} Category={Category} foodItem={selectedFoodItem}
//                    updateFoodItem={updateFoodItem} editorMode={editorMode} />
//       }
//       {
//         isActionModalVisible &&
//         <ModalUploading isModalVisible={isActionModalVisible} closeModal={closeActionModal} action={action}
//                         goBack={goBack} isSuccess={isSuccessful} />
//       }
//       {
//         isModalMenuVisible &&
//         <ModalMenuDetails closeModal={closeMenuDetails} isModalVisible={isModalMenuVisible}
//                           foodItem={selectedFoodItem} />
//       }
//     </SafeAreaView>
//
//   )
// }
// const styles = EStyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '$backGroundColor',
//   },
//   label: {
//     color: '$secondaryTextColor',
//     fontSize: 13,
//   },
//   buttonContainer: {
//     padding: 7,
//     alignSelf: 'center',
//     flexDirection: 'row',
//     backgroundColor: '$primaryColor',
//     borderRadius: 20,
//     shadowOffset: { width: -2, height: 4 },
//     shadowColor: '$primaryColor',
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 10,
//   },
//   icon: {
//     width: 25,
//     height: 25,
//     alignSelf: 'center',
//   },
//   addIcon: {
//     width: 10,
//     height: 10,
//     marginStart: 5,
//     alignSelf: 'center',
//   },
//   inputContainer: {
//     marginTop: 10,
//     marginHorizontal: 20,
//     shadowOffset: { width: -2, height: 2 },
//     shadowColor: '$primaryColor',
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   header: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     margin: 10,
//     color: '$primaryTextColor',
//   },
//   button: {
//     backgroundColor: '$lightPrimaryColor',
//     alignItems: 'center',
//     padding: 15,
//     borderRadius: 10,
//     width: Dimensions.get('screen').width - 30,
//     textTransform: 'uppercase',
//     bottom: 30,
//     position: 'absolute',
//     marginHorizontal: 15,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '$primaryTextColor',
//     alignSelf: 'center',
//     marginStart: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   rowContainer: {
//     marginTop: 10,
//     flexDirection: 'row',
//     alignContent: 'center',
//   },
// });
