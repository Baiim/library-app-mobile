import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Book1, ICBookmark, ICStar} from '../../assets';

const BookCardComponent = ({onPress, year, imageUrl}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={{flex: 1}}>
        <View style={{marginBottom: 21, marginHorizontal: 6}}>
          <View style={styles.container}>
            <View style={styles.bookContainer}>
              <ImageBackground source={{uri:imageUrl}} style={styles.bookStyle}>
                <View style={styles.icon}>
                  <View style={styles.iconContainer}>
                      {/* <ICStar /> */}
                    <Text style={styles.ratingText}>{year}</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookCardComponent;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: '#F5F5F5',
    width: 140,
    height: 160,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookStyle: {
    width: 107,
    height: 135,
  },
  bookContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    alignItems: 'flex-end',
  },
  iconContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 8,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
});
