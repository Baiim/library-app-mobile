import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCOrder} from '../../assets';
import {ButtonComponent, Gap} from '../../components';
import COLOR from '../../utils/color';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <SCOrder />
      </View>
      <Gap height={30} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Yeay! Completed</Text>
        <Text style={styles.subTitle}>
          now you can bring your book to the officer for further verification
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

export default SuccessOrder;

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
