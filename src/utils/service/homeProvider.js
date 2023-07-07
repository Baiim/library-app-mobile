import API from './axiosConfig';

const buildResponse = (resp) => {
    return resp;
};

export default {
    getMostpicked: async (token) => {
        return new API('books-mostpick', {}, 'authHeaders', token).get().catch(buildResponse);
    },
};
