import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../utils/networking/Api';
import { ToastAndroid } from 'react-native';

const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
    );
};

//after login the token will be recorded in asyncstorage in order to be achieved in next time
export const LogIn = (username, password) => {
    return async (dispatch) => {
        try {
            const response = await Api.post('user/auth-token', { username, password })
            console.log('res: ', response.data.token);
            switch (response.status) {
                case 200: {
                    await AsyncStorage.setItem('@token', response.data.token)
                    dispatch({ type: 'user_token', payload: response.data.token })
                    break;
                }
                case 400: {
                    showToastWithGravity(response.data.message);
                    break;
                }
                default: {
                    showToastWithGravity("در حال حاضر ارتباط با سرور برقرار نیست")
                    break;
                }
            }
        } catch (error) {
            console.log('error: ', error)
        } finally {
        }
    }
}

//to handle splash
export const AuthLoading = (loading) => {
    return async (dispatch) => {
        dispatch({ type: 'set_loading', payload: loading })
    }
}

//to handle login
export const ChangeToken = (token) => {
    return async (dispatch) => {
        dispatch({ type: 'user_token', payload: token })
    }
}