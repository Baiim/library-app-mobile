import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  Gap,
  HeaderComponent,
  TextInputComponent,
} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderComponent title="Register" subTitle="Register and read" onBack />
      <View style={styles.container}>
        <TextInputComponent
          label="Full Name"
          placeholder="Type your fullname"
        />
        <Gap height={16} />
        <TextInputComponent label="Email" placeholder="Type your email" />
        <Gap height={16} />
        <TextInputComponent label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <View>
          <ButtonComponent
            text="Continue"
            onPress={() => {
              navigation.navigate('SignUpAddress');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
