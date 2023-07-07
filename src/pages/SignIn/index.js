import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ButtonComponent, Gap, HeaderComponent, TextInputComponent} from '../../components';
import {useForm} from '../../utils';
import API from '@utils/service/authProvider';
import {storeData} from '@utils/localStorage';

const SignIn = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useForm({
        email: '',
        password: '',
    });

    const onSubmit = async () => {
        setLoading(true);
        const resp = await API.login(form);
        console.log('LOGIN', resp);
        if (resp.status === 200) {
            await Promise.resolve(storeData('accessToken', resp?.data.result));
            navigation.navigate('MainApp');
        }
        setLoading(false);
    };

    return (
        <View style={styles.page}>
            <HeaderComponent title="Login" subTitle="Find your best book" />
            <ScrollView>
                <View style={styles.container}>
                    <TextInputComponent
                        label="Email"
                        placeholder="Type your email address"
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                    />
                    <Gap height={16} />
                    <TextInputComponent
                        label="Password"
                        placeholder="Type your password"
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                    />
                    <Gap height={24} />
                    <View>
                        <ButtonComponent text="Login" textColor="#020202" onPress={onSubmit} />
                        <Gap height={12} />
                        <ButtonComponent
                            text="Create New Account"
                            textColor="white"
                            color="#8D92A3"
                            onPress={() => {
                                navigation.navigate('SignUp');
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    },
});
