import {StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {ICBackWhite, ICNotif, ICProfile} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderProfileComponent = ({title, subTitle, onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <ICProfile />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderProfileComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3A3ABF',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: 'white',
  },
  icon: {
    alignItems: 'flex-end',
    marginLeft: 130,
  },
});
