import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { Welcome2 } from '../../assets';
import {ButtonComponent} from '../../components';
import COLOR from '../../utils/color';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Welcome2 />
      <View style={styles.content}>
        <Text style={styles.title}>Open Book and Open the World</Text>
        <View style={styles.subContent}>
          <Text style={styles.subTitle}>
            Open your book to improve
          </Text>
          <Text style={styles.subTitle}>
            your knowledge
          </Text>
        </View>
        <View style={styles.button}>
          <ButtonComponent
            text="Start"
            textColor="#020202"
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: COLOR.blue,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    flex: 1,
    paddingTop: 26,
    paddingHorizontal: 42,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: COLOR.white,
    textAlign: 'center',
    marginTop: 25,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.white,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 83,
    marginTop: 52,
    flex: 1,
  },
  subContent: {
    paddingTop: 15,
  },
});
