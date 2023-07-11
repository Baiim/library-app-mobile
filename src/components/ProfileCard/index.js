import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Book1, ICAvailable, Profile} from '../../assets';
import ButtonComponent from '../Button';
import Gap from '../Gap';
import ButtonCategoryComponent from '../ButtonCategory';
import COLOR from '../../utils/color';
import {useNavigation} from '@react-navigation/native';

const ProfileCardComponent = ({name,nim,email,address,imageUrl}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.detailProfile}>
          <View style={styles.verified}>
            <ICAvailable />
            <Text style={styles.text}>Verified</Text>
          </View>
          <View style={styles.detail}>
            <Image source={{uri:imageUrl}} style={styles.profilePic} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.text}>{nim}</Text>
              <Text style={styles.text}>{email}</Text>
              <Text style={styles.text}>{address}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.button}>
              <ButtonCategoryComponent
                text="Detail"
                onPress={() => {
                  navigation.navigate('MaintenancePage');
                }}
              />
            </View>
            <Gap width={8} />
            <View style={styles.button}>
              <ButtonCategoryComponent
                style={styles.buttonStyle}
                text="Edit"
                textColor="white"
                color="#3A3ABF"
                borderWidth={1}
                onPress={() => {
                  navigation.navigate('PDFReader');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCardComponent;

const styles = StyleSheet.create({
  page: {
    paddingTop: 0,
  },
  container: {
    paddingHorizontal: 29,
    paddingTop: 18,
    paddingBottom: 20,
  },
  profilePic: {
    width: 67,
    height: 75,
    borderRadius: 8,
  },
  detailProfile: {
    backgroundColor: COLOR.blue2,
    paddingHorizontal: 19,
    paddingTop: 12,
    width: 308,
    height: 180,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  detail: {
    flexDirection: 'row',
  },
  verified: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  number: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNumber: {
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  footer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    paddingTop: 16,
  },
  button: {
    flex: 1,
  },
});
