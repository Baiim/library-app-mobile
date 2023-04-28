import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  BookCardComponent,
  BookCardHomeComponent,
  Gap,
  HeaderHomeComponent,
  TabBookComponent,
} from '../../components';
import 'react-native-pager-view';
import {Book1, Book2, Book3} from '../../assets';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderHomeComponent
        title="E-Library"
        subTitle="Universitas Pelita Bangsa"
      />
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            <BookCardHomeComponent
              image={Book1}
              day={3}
              title="Danur"
              author="Risa Saraswati"
            />
            <BookCardHomeComponent
              image={Book2}
              day={9}
              title="Marry Me!"
              author="Agus Susilo"
            />
            <BookCardHomeComponent
              image={Book3}
              day={10}
              title="Burung-Burung"
              author="Michael Santoso"
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Category</Text>
        <View style={styles.contentBook}>
          <TabBookComponent />
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  container: {
    backgroundColor: '#3A3ABF',
    paddingBottom: 18,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  scroll: {
    flex: 1,
  },
  contentBook: {
    flex: 1,
  },
  item: {
    width: '50%',
    height: '50%',
  },
});
