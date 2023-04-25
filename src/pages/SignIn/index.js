import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  Gap,
  HeaderComponent,
  TextInputComponent,
} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderComponent title="Login" subTitle="Find your best book" />
      <View style={styles.container}>
        <TextInputComponent
          label="Email"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInputComponent
          label="Email"
          placeholder="Type your email address"
        />
        <Gap height={24} />
        <View>
          <ButtonComponent
            text="Login"
            textColor="#020202"
            onPress={() => {
              navigation.navigate('MainApp');
            }}
          />
          <Gap height={12} />
          <ButtonComponent
            text="Create New Account"
            textColor="white"
            color="#8D92A3"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
