import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Book1, ICAvailable, Profile} from '../../assets';
import ButtonComponent from '../Button';
import Gap from '../Gap';
import ButtonCategoryComponent from '../ButtonCategory';

const ProfileCardComponent = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.detailProfile}>
          <View style={styles.verified}>
            <ICAvailable />
            <Text style={styles.text}>Verified</Text>
          </View>
          <View style={styles.detail}>
            <Image source={Profile} style={styles.profilePic} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Sektiawan Bimo Prihpambudi</Text>
              <Text style={styles.text}>311810250</Text>
              <Text style={styles.text}>Sektia7@gmail.com</Text>
              <Text style={styles.text}>Kp. Pulojahe RT/RW 007/014</Text>
            </View>
          </View>
          <View style={styles.number}>
            <Text style={styles.textNumber}>23-123-123-197</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.button}>
              <ButtonCategoryComponent
                text="Detail"
                onPress={() => {
                  navigation.navigate('OrderDetail');
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
    backgroundColor: '#6161E7',
    paddingHorizontal: 19,
    paddingTop: 12,
    width: 308,
    height: 240,
    borderRadius: 5,
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
    paddingBottom: 18,
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
  },
  button: {
    flex: 1,
  },
});
