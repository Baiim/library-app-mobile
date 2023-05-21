import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  Gap,
  HeaderComponent,
  TextInputComponent,
} from '../../components';
import {useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../redux/action';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(form);
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <HeaderComponent title="Login" subTitle="Find your best book" />
      <ScrollView>
        <View style={styles.container}>
          <TextInputComponent
            label="Email"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInputComponent
            label="Password"
            placeholder="Type your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={24} />
          <View>
            <ButtonComponent
              text="Login"
              textColor="#020202"
              onPress={() => {
                navigation.navigate('MainApp');
              }}
              // onPress={onSubmit}
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
      </ScrollView>
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
