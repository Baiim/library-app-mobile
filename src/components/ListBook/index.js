import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import COLOR from '../../utils/color';

const ListBookComponent = ({
  image,
  title,
  author,
  onPress,
  items,
  status,
  date,
  rating,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={image} style={styles.foodImage} />
          <View style={{flex: 1}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>By {author}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.date}>{date}</Text>
            {status && <Text style={styles.status}>{status}</Text>}
            {rating && (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Rating');
                }}>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>Rating</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListBookComponent;

const styles = StyleSheet.create({
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  page: {
    paddingTop: 8,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  author: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  subTitle: {
    flexDirection: 'column',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E',
  },
  content: {
    alignItems: 'flex-end',
    alignItems: 'center',
  },
  rating: {
    backgroundColor: COLOR.yellow,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
