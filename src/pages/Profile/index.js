import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Gap,
  HeaderProfileComponent,
  ProfileCardComponent,
  TabListBookComponent,
} from '../../components';
import COLOR from '../../utils/color';

const ProfilePage = ({navigation}) => {
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
          <ProfileCardComponent />
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
