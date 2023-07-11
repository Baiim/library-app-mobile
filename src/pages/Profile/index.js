import {StyleSheet, Text, View} from 'react-native';
import React,{useState,useCallback} from 'react';
import {
  Gap,
  HeaderProfileComponent,
  ProfileCardComponent,
  TabListBookComponent,
} from '../../components';
import COLOR from '../../utils/color';
import {getData} from '@utils/localStorage';
import API from '../../utils/service/homeProvider';
import { useFocusEffect } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';

const ProfilePage = ({navigation}) => {
  const [getProfile, setGetProfile] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const getProfileDetail = async () => {
        const token = await getData('accessToken');
        const decodedToken = jwtDecode(token.accessToken);
        const id = decodedToken.aud;
        const resp = await API.getDetailProfile(token.accessToken,id);
        console.log(resp);
        if (resp.status === 200) {
          setGetProfile(resp?.data?.result || []);
        }
      };
  
      getProfileDetail();
    }, []),
  );
  
  return (
    <View style={styles.page}>
      <HeaderProfileComponent
        title="Profile"
        subTitle="Universitas Pelita Bangsa"
        onPress={() => {
          navigation.navigate('ProfileSetting');
        }}
      />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <ProfileCardComponent 
          imageUrl={getProfile.imgUrl}
          name={getProfile.name}
          nim={getProfile.id_number}
          email={getProfile.email}
          address={getProfile.phoneNumber}
          />
        </View>
      </View>
      <View style={styles.content}>
        <TabListBookComponent />
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: COLOR.blue,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  bookContainer: {
    flex: 1,
    marginVertical: 5,
  },
  content: {
    paddingHorizontal: 24,
    flex: 1,
  },
});
