import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {BookCardComponent, BookCardHomeComponent, Gap, HeaderHomeComponent, TabBookComponent} from '../../components';
import 'react-native-pager-view';
import {Book1, Book2, Book3} from '../../assets';
import COLOR from '../../utils/color';
import API from '../../utils/service/homeProvider';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {getData} from '@utils/localStorage';
import {FlatList} from 'react-native-gesture-handler';

const HomePage = ({navigation}) => {
    const [bookMostPicked, setBookMostPicked] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const getDataMostPick = async () => {
                const token = await getData('accessToken');
                const resp = await API.getMostpicked(token.accessToken);
                if (resp.status === 200) {
                    setBookMostPicked(resp?.data?.result || []);
                }
            };

            getDataMostPick();
        }, []),
    );

    return (
        <View style={styles.page}>
            <HeaderHomeComponent title="E-Library" subTitle="Universitas Pelita Bangsa" />
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodCardContainer}>
                        <Gap width={24} />
                        <BookCardHomeComponent image={Book1} day={3} title="Danur" author="Risa Saraswati" />
                        <BookCardHomeComponent image={Book2} day={9} title="Marry Me!" author="Agus Susilo" />
                        <BookCardHomeComponent image={Book3} day={10} title="Burung-Burung" author="Michael Santoso" />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Recomended</Text>
                <View style={styles.contentBook}>
                    <FlatList
                        data={bookMostPicked}
                        keyExtractor={(item) => item._id?.toString()}
                        renderItem={({item, index}) => <BookCardComponent />}
                    />
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
        backgroundColor: COLOR.blue,
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
        paddingTop: 24,
    },
    item: {
        width: '50%',
        height: '50%',
    },
});
