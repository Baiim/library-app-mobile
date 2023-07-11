import API from './axiosConfig';

const buildResponse = (resp) => {
    return resp;
};

export default {
    getDetailProfile: async (token,id) => {
        return new API(`users/${id}`,{},'authHeaders', token).get().catch(buildResponse);
    }
};
