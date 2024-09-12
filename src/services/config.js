import axios from "axios";

const api = axios.create({ baseURL:"https://jsonplaceholder.typicode.com" })


export default api


axios.interceptors.request.use(
    (request) => {
            request.headers.Authorization ="token";
            console.log(`${request.method} requst sent to ${request.url}`);
        return request;
    }
    ,(error) => {
        console.log(error);
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (response) => {
        console.log(response);
        return response.data;
    }
    ,(error) => {
        console.log(error);
        return Promise.reject(error);
    }
)