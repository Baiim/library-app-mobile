import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Book4, ICAvailable, ICBackWhite} from '../../assets';
import {
  ButtonCategoryComponent,
  ButtonComponent,
  DatePicker,
  Gap,
} from '../../components';
import { useFocusEffect } from '@react-navigation/native';
import {getData} from '@utils/localStorage';
import API from '../../utils/service/homeProvider';

const BookDetail = ({navigation, route}) => {
  const { id } = route.params;
  const [getBookDetail, setGetBookDetail] = useState([]);

  useFocusEffect(
      useCallback(() => {
          const getDataDetailBook = async () => {
              const token = await getData('accessToken');
              const resp = await API.getDetailBook(token.accessToken,id);
              if (resp.status === 200) {
                  setGetBookDetail(resp?.data?.result || []);
              }
          };

          getDataDetailBook();
      }, [id]),
  );

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: getBookDetail.imgUrl}} style={styles.cover}>
        <TouchableOpacity style={styles.iconBack} onPress={handleGoBack}>
          <ICBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContent}>
            <View style={styles.bookContainer}>
              <View style={{flex: 1}}>
                <Text style={styles.bookTitle}>{getBookDetail.title}</Text>
                <Text style={styles.bookSubTitle}>By {getBookDetail.author}</Text>
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
                  {getBookDetail.synopsis}
              </Text>
            </View>
            <View>
              <Text style={styles.titleSinopsis}>Info</Text>
              <View style={styles.info}>
                <View>
                  <Text style={styles.contentSinopsis}>{getBookDetail.author}</Text>
                  <Text style={styles.contentSinopsis}>{getBookDetail.year}</Text>
                </View>
                <View>
                  <Text style={styles.contentSinopsis}>{getBookDetail.pageSize} Page</Text>
                  <Text style={styles.contentSinopsis}>
                    {getBookDetail.publisher}
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
                    navigation.navigate('PDFReader', {uri: getBookDetail.pdfUrl,title: getBookDetail.title, author: getBookDetail.author});
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
    flex:1,
    flexWrap: 'wrap'
  },
  bookSubTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#C4C4C4',
  },
  bookAvailable: {
    fontSize: 14,
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
    marginLeft: 8
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
