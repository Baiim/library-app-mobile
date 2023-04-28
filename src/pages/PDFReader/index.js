import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {HeaderComponent} from '../../components';
import Pdf from 'react-native-pdf';
import {PDF} from '../../assets';

const PDFReader = () => {
  return (
    <View style={styles.page}>
      <HeaderComponent title="Danur" subTitle="By Risa Saraswati" onBack />
      <View style={styles.container}>
        <Pdf
          trustAllCerts={false}
          source={PDF}
          onLoadComplete={(numberOfPages, filePath) => {
            // console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            // console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            // console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    </View>
  );
};

export default PDFReader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  page: {
    flex: 1,
  },
});
