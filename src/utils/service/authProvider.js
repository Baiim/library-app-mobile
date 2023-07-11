import API from './axiosConfig';

const buildResponse = (resp) => {
    return resp;
};

export default {
    login: async (body) => {
        return new API('users/login', {body}).post().catch(buildResponse);
    },
    register: async (form, photo) => {
        const imageData = new FormData();
        imageData.append('image', {
            uri: photo,
            type: 'image/jpeg',
            name: `photo-${new Date().getTime()}.jpg`
        });
        imageData.append('data',JSON.stringify(form))
    
        return new API('users/register', { body: imageData }).post().catch(buildResponse);
    },
    
    logout: async (body, token) => {
        return new API('users/logout', {body}, 'authHeaders', token).post().catch(buildResponse);
    },
    refreshToken: async (token) => {
        return new API('refreshToken', {}, 'authHeaders', token).get().catch(buildResponse);
    }
};
