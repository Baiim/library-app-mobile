import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { ICSearch } from '../../assets/Icon';

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <ICSearch style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder="Find your book" />
      </View>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3A3ABF',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});
