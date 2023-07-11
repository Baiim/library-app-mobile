import {StyleSheet, Text, View, ScrollView,TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useForm} from '../../utils';
import {ButtonComponent, Gap, HeaderComponent, TextInputComponent, SelectInputComponent} from '../../components';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import API from '@utils/service/authProvider';


const SignUp = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
        address: '',
        gender: '',
        id_number: '',
        phoneNumber: ''
    })
    console.log(form);

    const [photo, setPhoto] = useState('')
    console.log(photo);
    const onSubmit = async () => {
        setLoading(true);
        const resp = await API.register(form,photo);
        console.log('REGISTER', resp);
        if (resp.status === 200) {
            navigation.navigate('SignIn');
        }
        setLoading(false);
    };
    const addPhoto = () => {
        launchImageLibrary(
            {
                quality: 0.5,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                if (response.didCancel || response.errorMessage) {
                    console.log('Kamu belum memilih photo')
                } else {
                    const source = response.assets[0].uri
                    const dataImage = {
                        uri: response.assets[0].uri,
                    }
                    setPhoto(source)
                }
            }
        )
    }
    return (
        <View style={styles.page}>
            <HeaderComponent title="Register" subTitle="Register and read" onBack />
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={addPhoto}>
                        <View style={styles.photo}>
                            <View style={styles.photoBorder}>
                                {photo ? (
                                    <Image
                                        source={{ uri: photo }}
                                        style={styles.photoContainer}
                                    />
                                ) : (
                                    <View style={styles.photoContainer}>
                                        <Text style={styles.photoText}>
                                            Add Photo
                                        </Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TextInputComponent
                        label="Full Name"
                        placeholder="Type your fullname"
                        value={form.name}
                        onChangeText={(value) => setForm('name', value)}
                    />
                    <Gap height={16} />
                    <TextInputComponent
                        label="Email Address"
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
                        secureTextEntry
                    />
                    <Gap height={16} />
                    <TextInputComponent
                    label="Phone Number"
                    placeholder="Type your phone number"
                    value={form.phoneNumber} 
                    onChangeText={(value) => setForm('phoneNumber', value)}
                    keyboardType="numeric"
                    />
                    <Gap height={16} />
                    <TextInputComponent label="Address" placeholder="Type your address" value={form.address} onChangeText={(value) => setForm('address', value)} />
                    <Gap height={16} />
                    <SelectInputComponent label="Gender" value={form.gender} onValueChange={(value) => setForm('gender', value)}/>
                    <Gap height={16} />
                    <TextInputComponent
                        label="NIM/NIDN"
                        placeholder="Type your NIM/NIDN"
                        value={form.id_number} 
                        onChangeText={(value) => setForm('id_number', value)}
                        keyboardType="numeric"
                    />
                    <Gap height={24} />
                    <ButtonComponent
                        color="#FFC700"
                        textColor="#020202"
                        text="Continue"
                        // onPress={() => {
                        //     navigation.navigate('SignUpAddress')
                        // }}
                        onPress={onSubmit}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default SignUp;

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
    photo: {
        marginBottom: 8,
        alignItems: 'center',
    },
    photoText: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center',
    },
    photoBorder: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        padding: 24,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
