import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  Gap,
  HeaderComponent,
  SelectInputComponent,
  TextInputComponent,
} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HeaderComponent
          title="Additional"
          subTitle="Make sure it’s valid"
          onBack
        />
        <View style={styles.container}>
          <TextInputComponent
            label="Phone Number"
            placeholder="Type your phone number"
          />
          <Gap height={16} />
          <TextInputComponent label="Address" placeholder="Type your address" />
          <Gap height={16} />
          <SelectInputComponent label="Gender" />
          <Gap height={16} />
          <TextInputComponent
            label="NIM/NIDN"
            placeholder="Type your NIM/NIDN"
          />
          <Gap height={24} />
          <View>
            <ButtonComponent
              text="Sign Up Now"
              onPress={() => {
                navigation.replace('SuccessSignUp');
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
