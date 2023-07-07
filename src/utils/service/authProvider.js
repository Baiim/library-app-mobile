import API from './axiosConfig';

const buildResponse = (resp) => {
    return resp;
};

export default {
    login: async (body) => {
        return new API('users/login', {body}).post().catch(buildResponse);
    },
    register: async (body) => {
        return new API('users/register', {body}).post().catch(buildResponse);
    },
};
