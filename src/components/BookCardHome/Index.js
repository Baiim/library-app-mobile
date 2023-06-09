import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ButtonCategoryComponent from '../ButtonCategory';
import Gap from '../Gap';
import ButtonComponent from '../Button';
import {useNavigation} from '@react-navigation/native';
import {ICStar} from '../../assets';
import COLOR from '../../utils/color';

const BookCardHomeComponent = ({image, title, onPress, day, author}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={image} style={styles.foodImage} />
          <View style={{flex: 1}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.rating}>
                <ICStar />
                <Text style={styles.ratingTitle}>4.5</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>By {author}</Text>
            <View style={styles.buttonCategory}>
              <ButtonCategoryComponent
                text="Fiction"
                textColor="#020202"
                color="white"
                fontSize={8}
              />
              <ButtonCategoryComponent
                text="Romance"
                textColor="#020202"
                color="white"
                fontSize={8}
              />
              <ButtonCategoryComponent
                text="Mystery"
                textColor="#020202"
                color="white"
                fontSize={8}
              />
            </View>
            <Gap height={20} />
            <View style={styles.footer}>
              <View style={styles.priceContainer}>
                <Text style={styles.title}>Due Date :</Text>
                <Text style={styles.subTitle}>{day} Days left</Text>
              </View>
              <View style={styles.button}>
                <ButtonCategoryComponent
                  width={84}
                  height={28}
                  text="Detail"
                  fontSize={10}
                  onPress={() => {
                    navigation.navigate('BookDetail');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookCardHomeComponent;

const styles = StyleSheet.create({
  foodImage: {
    width: 93,
    height: 121,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
    borderRadius: 5,
  },
  page: {
    paddingTop: 8,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR.blue2,
    paddingHorizontal: 19,
    paddingVertical: 19,
    width: 308,
    height: 159,
    borderRadius: 5,
    marginRight: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  subTitle: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  content: {
    alignItems: 'flex-end',
  },
  buttonCategory: {
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    flex: 1,
  },
  labelTotal: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  priceTotal: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  priceContainer: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rating: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 3,
    paddingVertical: 3,
    flexDirection: 'row',
  },
  ratingTitle: {
    fontSize: 8,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
});
