import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, ButtonComponent} from '../../components';
import {SCSignUp} from '../../assets';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <SCSignUp />
      </View>
      <Gap height={30} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Yeay! Completed</Text>
        <Text style={styles.subTitle}>
          now you can go to the library to verify your membership
        </Text>
      </View>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <ButtonComponent
          color="#FFC700"
          textColor="#020202"
          text="Explore"
          onPress={() => {
            navigation.navigate('MainApp');
          }}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

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
