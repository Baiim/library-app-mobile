import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, ButtonComponent} from '../../components';
import {Maintenace} from '../../assets';
import COLOR from '../../utils/color';

const MaintenancePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Maintenace />
      </View>
      <Gap height={30} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Sorry :(</Text>
        <Text style={styles.subTitle}>
          This Feature not available for now , maybe next time
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

export default MaintenancePage;

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
