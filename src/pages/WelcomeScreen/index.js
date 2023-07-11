import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import { Welcome2 } from '../../assets';
import {ButtonComponent} from '../../components';
import COLOR from '../../utils/color';
import {getData, storeData} from '@utils/localStorage';
import { useState } from 'react';

const WelcomeScreen = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(false);

  const checkToken = async () => {
    const token = await getData('accessToken');
    if (token?.accessToken && token?.refreshToken) {
      // refreshToken();
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  
  // const refreshToken = async () => {
  //   try {
  //     const refreshedToken = await api.refreshToken(token?.refreshToken);
  //     console.log(refreshedToken);
  //     await storeData('accessToken', refreshedToken.accessToken);
  //     await storeData('refreshToken', refreshedToken.refreshToken);
  //     setIsLogin(true);
  //   } catch (error) {
  //     navigation.navigate('SignIn');
  //   }
  // };
  
  useEffect(() => {
    checkToken();
  }, []);
  
  const navigate = ()=>{
    if (isLogin) {
      return navigation.navigate('MainApp')
    }
    navigation.navigate('SignIn')
  }
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
            onPress={navigate}
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
