import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BookCardComponent,
  HeaderHomeComponent,
  SearchComponent,
} from '../../components';

const BookmarkPage = () => {
  return (
    <View style={styles.page}>
      <HeaderHomeComponent
        title="Bookmark"
        subTitle="Universitas Pelita Bangsa"
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.search}>
            <SearchComponent />
          </View>
          <View style={styles.content}>
            <BookCardComponent
              onPress={() => {
                navigation.navigate('BookDetail');
              }}
              rating={5.0}
            />
            <BookCardComponent rating={4.5} />
            <BookCardComponent rating={3.0} />
            <BookCardComponent rating={2.0} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookmarkPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  search: {
    paddingVertical: 17,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  container: {
    paddingHorizontal: 25,
  },
});
