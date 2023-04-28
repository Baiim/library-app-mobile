import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ButtonComponent, HeaderComponent} from '../../components';
import {ICNext} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const ProfileSetting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <HeaderComponent
        title="Profile"
        subTitle="E-Library"
        onBack={() => {
          navigation.canGoBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Rate App</Text>
          <ICNext />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Help Center</Text>
          <ICNext />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Privacy & Policy</Text>
          <ICNext />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Terms & Conditions</Text>
          <ICNext />
        </View>
        <View style={styles.footer}>
          <ButtonComponent text="Logout" color="#FF0000" textColor="white" />
          <View style={{alignItems: 'center'}}>
            <Text style={styles.versionText}>version 1.0.0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileSetting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 11,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  footer: {
    paddingTop: 50,
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#E5E5E5',
  },
});
