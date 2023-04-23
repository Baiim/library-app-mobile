import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Splash} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeScreen');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3A3ABF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
