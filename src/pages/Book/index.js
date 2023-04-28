import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  HeaderHomeComponent,
  SearchComponent,
  TabBookComponent,
} from '../../components';

const BookPage = () => {
  return (
    <View style={styles.page}>
      <HeaderHomeComponent title="Book" subTitle="Universitas Pelita Bangsa" />
      <View style={styles.search}>
        <SearchComponent />
      </View>
      <View style={styles.content}>
        <View style={styles.contentBook}>
          <TabBookComponent />
        </View>
      </View>
    </View>
  );
};

export default BookPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  search: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  content: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  contentBook: {
    flex: 1,
  },
});
