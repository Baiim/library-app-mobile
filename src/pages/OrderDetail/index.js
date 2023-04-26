import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {ButtonComponent, Gap, HeaderComponent} from '../../components';
import {Book1} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderComponent title="Detail Loan" subTitle="Check your order" onBack />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Item Detail</Text>
          <View style={styles.containerLoan}>
            <Text style={styles.subTitle}>Loan ID</Text>
            <Text style={styles.title}>#300231</Text>
          </View>
          <View style={styles.detailContainer}>
            <Image source={Book1} style={styles.bookImage} />
            <View style={{paddingLeft: 24}}>
              <Text style={styles.detailText}>Danur</Text>
              <Text style={styles.detailText}>By Risa Saraswati</Text>
              <Text style={styles.detailText}>PT. Indah Nusa Permata</Text>
              <Text style={styles.detailText}>2015</Text>
              <Text style={styles.detailText}>325 Page</Text>
            </View>
          </View>
          <View style={styles.lineStyle} />
          <View style={styles.containerLoan}>
            <View>
              <Text style={styles.title}>Loan Date</Text>
              <Text style={styles.subTitle}>22/01/2022</Text>
            </View>
            <View>
              <Text style={styles.title}>Return Date</Text>
              <Text style={styles.subTitle}>22/01/2022</Text>
            </View>
          </View>
          <View style={styles.lineStyle} />
          <View>
            <Text style={styles.title}>Personal Information</Text>
            <View style={{paddingTop: 12}}>
              <Text style={styles.subTitle}>31-123-123-123</Text>
              <Text style={styles.subTitle}>Sektiawan Bimo Prihpambudi</Text>
              <Text style={styles.subTitle}>311810250</Text>
              <Text style={styles.subTitle}>KP.Pulojahe RT/RW 007/014</Text>
              <Text style={styles.subTitle}>082225461633</Text>
            </View>
          </View>
          <View style={{paddingTop: 67}}>
            <ButtonComponent
              text="Continue"
              onPress={() => {
                navigation.replace('SuccessOrder');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 60,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#C4C4C4',
  },
  containerLoan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  bookImage: {
    width: 68,
    height: 90,
    borderRadius: 8,
  },
  detailContainer: {
    paddingTop: 17,
    flexDirection: 'row',
  },
  detailText: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
    flexDirection: 'row',
  },
});
