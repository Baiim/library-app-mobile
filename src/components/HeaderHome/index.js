import {StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {ICBackWhite, ICNotif} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../utils/color';

const HeaderHomeComponent = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.icon}>
        <ICNotif />
      </View>
    </View>
  );
};

export default HeaderHomeComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.blue,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: COLOR.white,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: COLOR.white,
  },
  icon: {
    alignItems: 'flex-end',
    marginLeft: 130,
  },
});
