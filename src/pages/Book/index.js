import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useCallback} from 'react';
import {
  HeaderHomeComponent,
  SearchComponent,
  BookCardComponent,
} from '../../components';
import { useFocusEffect } from '@react-navigation/native';
import {getData} from '@utils/localStorage';
import API from '../../utils/service/homeProvider';

const BookPage = ({navigation}) => {
  const [isLoading,setIsLoading] = useState(true);
  const [getBook, setGetBook] = useState([]);

  useFocusEffect(
      useCallback(() => {
          const getDataBook = async () => {
              const params = {page:1, limit:10};
              const token = await getData('accessToken');
              const resp = await API.getBook(token.accessToken,params);
              setIsLoading(true);
              if (resp.status === 200) {
                  setGetBook(resp?.data?.result?.content || []);
                  setIsLoading(false);
              }
          };

          getDataBook();
      }, []),
  );
  return (
    <View style={styles.page}>
      <HeaderHomeComponent title="Book" subTitle="Universitas Pelita Bangsa" />
      <View style={styles.search}>
        <SearchComponent />
      </View>
      <View style={styles.content}>
        <View style={styles.contentBook}>
        <View style={styles.container}>
        {isLoading ? (
        <View style={styles.LoadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={getBook}
          numColumns={2}
          keyExtractor={(item) => item._id?.toString()}
          renderItem={({ item, index }) => (
            <BookCardComponent
              imageUrl={item.imgUrl}
              year={item.year}
              onPress={() => {
                navigation.navigate('BookDetail', { id: item._id });
              }}
            />
          )}
        />
      )}
        </View>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1
  }
});
