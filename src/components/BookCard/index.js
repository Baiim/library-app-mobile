import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Book1, ICBookmark} from '../../assets';

const BookCardComponent = ({onPress}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.bookContainer}>
            <ImageBackground source={Book1} style={styles.bookStyle}>
              <View style={styles.icon}>
                <ICBookmark />
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookCardComponent;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    width: 155,
    height: 175,
    borderRadius: 8,
  },
  bookStyle: {
    width: 117,
    height: 145,
  },
  bookContainer: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  icon: {
    alignItems: 'flex-end',
    paddingBottom: -100,
  },
});
