import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Book4, ICAvailable, ICBackWhite} from '../../assets';
import {
  ButtonCategoryComponent,
  ButtonComponent,
  DatePicker,
  Gap,
} from '../../components';

const BookDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Book4} style={styles.cover}>
        <TouchableOpacity style={styles.iconBack}>
          <ICBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContent}>
            <View style={styles.bookContainer}>
              <View>
                <Text style={styles.bookTitle}>A Leader</Text>
                <Text style={styles.bookSubTitle}>By Yosef Gunawan</Text>
              </View>
              <View style={styles.available}>
                <ICAvailable />
                <Text style={styles.bookAvailable}>Available</Text>
              </View>
            </View>
            <View style={styles.buttonCategory}>
              <ButtonCategoryComponent
                width={101}
                height={37}
                text="Fiction"
                color="white"
                borderWidth={1}
              />
              <ButtonCategoryComponent
                width={101}
                height={37}
                text="Romance"
                color="white"
                borderWidth={1}
              />
              <ButtonCategoryComponent
                width={101}
                height={37}
                text="Action"
                color="white"
                borderWidth={1}
              />
            </View>
            <View style={styles.sinopsis}>
              <Text style={styles.titleSinopsis}>Sinopsis</Text>
              <Text style={styles.contentSinopsis}>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
              </Text>
            </View>
            <View>
              <Text style={styles.titleSinopsis}>Info</Text>
              <View style={styles.info}>
                <View>
                  <Text style={styles.contentSinopsis}>Risa Saraswati</Text>
                  <Text style={styles.contentSinopsis}>2018</Text>
                </View>
                <View>
                  <Text style={styles.contentSinopsis}>325 Page</Text>
                  <Text style={styles.contentSinopsis}>
                    PT. Indah Permata Buku
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.titleSinopsis}>Loan</Text>
              <View style={styles.info}>
                <View>
                  <Text style={styles.titleSinopsis}>From:</Text>
                  <DatePicker />
                </View>
                <View>
                  <Text style={styles.titleSinopsis}>To:</Text>
                  <DatePicker />
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.button}>
                <ButtonComponent
                  text="Read"
                  textColor="white"
                  color="#3A3ABF"
                  onPress={() => {
                    navigation.navigate('PDFReader');
                  }}
                />
              </View>
              <Gap width={8} />
              <View style={styles.button}>
                <ButtonComponent
                  text="Continue"
                  onPress={() => {
                    navigation.navigate('OrderDetail');
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 380,
    width: 382,
    paddingTop: 26,
    paddingLeft: 22,
  },
  iconBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -150,
    flex: 1,
    paddingTop: 19,
    paddingHorizontal: 22,
  },
  mainContent: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  bookSubTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#C4C4C4',
  },
  bookAvailable: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  available: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCategory: {
    paddingTop: 4,
    flexDirection: 'row',
  },
  contentSinopsis: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#C4C4C4',
  },
  titleSinopsis: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'justify',
  },
  sinopsis: {
    paddingTop: 12,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    paddingTop: 23,
    paddingBottom: 23,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 1,
    width: '100%',
  },
});
