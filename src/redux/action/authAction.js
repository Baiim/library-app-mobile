import axios from 'axios';

import {showMessage} from '../../utils/showMessage';
import {setLoading} from './globalAction';
import API from '../../utils/service/authProvider';

const API_URL = {
    url: 'http://103.59.95.40:8082/api/v1/users',
};

// export const signInAction = (form, navigation) => dispatch => {
//   dispatch(setLoading(false));
//   axios
//     .post(`${API_URL.url}/login`, form)
//     .then(res => {
//       console.log(res);
//       const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
//       const profile = res.data.data.user;
//       dispatch(setLoading(false));
//       // storeData('userProfile', profile);
//       // storeData('token', {value: token});
//       navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch(setLoading(false));
//       showMessage('Email atau Password Salah');
//     });
// };

export const signInAction = (form, navigation) => async (dispatch) => {
    dispatch(setLoading(false));
    console.log('FOrm', form);
    const resp = await API.login(form);
    console.log('LOGIN', resp);
    // try {
    // } catch (error) {
    //     console.log('ERROR', error);
    // }
    // axios({
    //     method: 'post',
    //     url: `${API_URL.url}/login`,
    //     data: form,
    //     headers: {
    //         'Content-type': 'application/json',
    //         'X-Api-Key': 'UHwlR0/tNWSDqzV9OZcQtQgpzMZshTMJTA==',
    //     },
    // })
    //     .then((res) => {
    //         console.log(res.data.result.accessToken);
    //         // const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
    //         // const profile = res.data.data.user;
    //         // dispatch(setLoading(false));
    //         // // storeData('userProfile', profile);
    //         // // storeData('token', {value: token})

    //         if (res.data.status === 200) {
    //             navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    //         } else showMessage(res.data.message);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         dispatch(setLoading(false));
    //     });
};
