import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ButtonComponent, Gap, RatingComponent} from '../../components';
import {ILRating} from '../../assets';

const Rating = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <ILRating />
      </View>
      <Gap height={30} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Rate your book !! </Text>
        <Text style={styles.subTitle}>
          Give your book to share what are you feeling about your book
        </Text>
      </View>
      <RatingComponent />
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <ButtonComponent
          color="#FFC700"
          textColor="#020202"
          text="Send"
          onPress={() => {
            navigation.navigate('RatingSuccess');
          }}
        />
      </View>
      <Gap height={30} />
    </View>
  );
};

export default Rating;

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
