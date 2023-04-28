import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  ICStarGrey,
  ICStarYellow,
  ICStartGrey,
  ICStartYellow,
} from '../../assets';

const RatingComponent = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const STAR_FILLED =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const STAR_CORNER =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  return (
    <View style={{flex: 1}}>
      <View style={styles.customRatingStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              {item <= defaultRating ? <ICStarYellow /> : <ICStarGrey />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default RatingComponent;

const styles = StyleSheet.create({
  customRatingStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  imageStar: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
