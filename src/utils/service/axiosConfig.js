import axios from 'axios';

const BASE_URL = 'http://103.59.95.40:8082/api/v1/';

const API_HEADERS = {
    'Content-type': 'application/json',
    'X-Api-Key': 'UHwlR0/tNWSDqzV9OZcQtQgpzMZshTMJTA==',
};
export const getApiAuthHeaders = (token) => ({
    'Content-type': 'application/json',
    'X-Api-Key': 'UHwlR0/tNWSDqzV9OZcQtQgpzMZshTMJTA==',
    Authorization: `Bearer ${token}`,
});

class API {
    config;
    httpRequest;

    constructor(
        url,
        options = {
            body: {},
            params: {},
        },
        header = 'headers',
        token = '',
    ) {
        this.config = {
            baseURL: BASE_URL,
            timeout: 10000,
            url,
            responseType: 'json',
            headers: this.getHeaders(header, token),
            params: options.params ?? {},
            data: options.body,
        };
        this.httpRequest = axios.create(this.config);
        this.axiosInterceptor();
    }

    async post() {
        return await this.httpRequest.post(this.config?.url, this.config?.data, {
            headers: this.config?.headers,
            params: this.config?.params,
        });
    }

    async get() {
        return await this.httpRequest.get(this.config?.url, {
            headers: this.config?.headers,
            params: this.config?.params,
        });
    }

    async put() {
        return await this.httpRequest.put(this.config?.url, this.config?.data, {
            headers: this.config?.headers,
            params: this.config?.params,
        });
    }

    async delete() {
        return await this.httpRequest.delete(this.config?.url, {
            headers: this.config?.headers,
            params: this.config?.params,
        });
    }

    getHeaders(header, token = '') {
        if (header === 'headers') return API_HEADERS;
        if (header === 'authHeaders') return getApiAuthHeaders(token);
    }

    axiosInterceptor() {
        this.httpRequest.interceptors.request.use(
            (response) => {
                console.log('Axios Interceptor', response);
                return response;
            },
            async (error) => {
                const originalRequest = error.config;
                console.log(originalRequest);
            },
        );
    }
}

export default API;
