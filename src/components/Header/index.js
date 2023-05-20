import {StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {ICBackWhite} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../utils/color';

const HeaderComponent = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.back}>
            <ICBackWhite />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

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
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});
