import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';

const SelectInputComponent = ({label,value, ...restProps}) => {
  const handleValueChange = (value) => {
    onValueChange(value);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
      <Picker
          selectedValue={value}
          onValueChange={handleValueChange}
          {...restProps}
        >
          {value === '' && (
            <Picker.Item
              label="Select your gender"
              value=""
              enabled={false}
            />
          )}
          <Picker.Item label="Laki-Laki" value="laki-laki"  />
          <Picker.Item label="Perempuan" value="perempuan" />
        </Picker>
      </View>
    </View>
  );
};

export default SelectInputComponent;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
