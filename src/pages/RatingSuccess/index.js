import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ButtonComponent, Gap} from '../../components';
import {ILRatingSuccess} from '../../assets';
import COLOR from '../../utils/color';

const RatingSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <ILRatingSuccess />
      </View>
      <Gap height={30} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Thanks for your rate !!</Text>
        <Text style={styles.subTitle}>
          The world can be know about your rate and awesome
        </Text>
      </View>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <ButtonComponent
          color={COLOR.yellow}
          textColor="#020202"
          text="Home"
          onPress={() => {
            navigation.navigate('MainApp');
          }}
        />
      </View>
    </View>
  );
};

export default RatingSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 70,
  },
  photo: {
    paddingTop: 100,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
