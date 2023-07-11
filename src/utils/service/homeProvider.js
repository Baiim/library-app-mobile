import API from './axiosConfig';
import helpers from '../helpers';

const buildResponse = (resp) => {
    return resp;
};

export default {
    getMostpicked: async (token) => {
        return new API('books-mostpick', {}, 'authHeaders', token).get().catch(buildResponse);
    },
    getBook: async (token,params) => {
        return new API(`books?${helpers.queryParams(params)}`,{},'authHeaders', token).get().catch(buildResponse);
    },
    getDetailBook: async (token,id) => {
        return new API(`book/${id}`,{},'authHeaders', token).get().catch(buildResponse);
    },
    getDetailProfile: async (token,id) => {
        return new API(`user/${id}`,{},'authHeaders', token).get().catch(buildResponse);
    }
};
