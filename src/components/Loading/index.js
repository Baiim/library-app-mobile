import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import COLOR from '../../utils/color';

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLOR.blue} size="large" />
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginTop: 12,
    color: COLOR.white,
    textAlign: 'center',
  },
});
