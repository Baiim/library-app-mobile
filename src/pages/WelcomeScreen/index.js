import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Welcome} from '../../assets';
import {ButtonComponent} from '../../components';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Welcome />
      <View style={styles.content}>
        <Text style={styles.title}>Read book to Improve your knowledge</Text>
        <View style={styles.subContent}>
          <Text style={styles.subTitle}>
            We collected and distilled the knowledge of
          </Text>
          <Text style={styles.subTitle}>
            several experienced design , We collected
          </Text>
          <Text style={styles.subTitle}>and distilled the knowledge</Text>
        </View>
        <View style={styles.button}>
          <ButtonComponent text="Start" textColor="#020202" />
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
    backgroundColor: '#3A3ABF',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    flex: 1,
    paddingTop: 26,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 83,
    marginTop: 52,
    paddingBottom: 24,
  },
  subContent: {
    paddingTop: 15,
  },
});
