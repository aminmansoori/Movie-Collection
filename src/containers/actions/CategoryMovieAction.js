import Api from '../../utils/networking/Api';
import { ToastAndroid } from 'react-native';

const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
    );
};

//the categories of movies in which the genre is decleared will be catched 
export const CategoriesMovies = async () => {
    try {
        const response = await Api.get(`category`)
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
        console.log('categorymovie error: ', error);
    }
}

//catch aimed movies by some certain filters
export const Movies = async (filter) => {
    try {
        const response = await Api.get(`movie/?tags=${filter}`)
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
        console.log('movie error: ', error);
    }
}