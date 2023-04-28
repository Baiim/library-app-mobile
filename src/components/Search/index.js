import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ICSearch} from '../../assets/Icon';

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Find your book" />
      <ICSearch />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#3A3ABF',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
