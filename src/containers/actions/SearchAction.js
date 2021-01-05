import Api from '../../utils/networking/Api';
import { ToastAndroid } from 'react-native';

const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
    );
};

//search movies by filter in home page
export const SearchMovies = async (filter) => {
    try {
        const response = await Api.get(`movie/?search=${filter}`)
        switch (response.status) {
            case 200: {
                return response.data.results
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
        console.log('search movie error: ', error);
    }
}
