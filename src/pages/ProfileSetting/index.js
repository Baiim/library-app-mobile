import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ButtonComponent, HeaderComponent} from '../../components';
import {ICNext} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import API from '@utils/service/authProvider';
import {removeData, getData} from '@utils/localStorage';

const ProfileSetting = () => {
  const [loading, setLoading] = useState(false);
  const logout = async () => {
      setLoading(true);
      const token = await getData('accessToken');
      if (Object.keys(token).length) {
        const resp = await API.logout({dataToken: {...token}}, token.accessToken);
        console.log('LOGOUT', resp);
        if (resp.status === 200) {
            await Promise.resolve(removeData('accessToken'));
            navigation.navigate('SignIn');
        }
      }
      setLoading(false);
  };
  
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
          <ButtonComponent text="Logout" color="#FF0000" textColor="white" onPress={logout} />
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
