import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ButtonCategoryComponent = ({
  text,
  color = '#FFC700',
  textColor = '#020202',
  onPress,
  width,
  height,
  fontSize,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color, width, height)}>
        <Text style={styles.text(textColor, fontSize)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCategoryComponent;

const styles = StyleSheet.create({
  container: (color, width, height) => ({
    backgroundColor: color,
    padding: 3,
    borderRadius: 8,
    width: width,
    height: height,
    marginRight: 3,
    marginTop: 3,
    alignItems: 'center',
  }),
  text: (color, fontSize) => ({
    fontSize: fontSize,
    fontFamily: 'Poppins-Medium',
    color: color,
    paddingTop: 3,
  }),
});
