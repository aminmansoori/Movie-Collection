import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

//used by actios in order to achieve requested data through APIs
const instance = axios.create({
    baseURL: 'https://imdb.hriks.com/',
    responseType: "json",
    validateStatus: function (status) {
        return status >= 200;
    }
});

//handle token via axios
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('@token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)
export default instance;