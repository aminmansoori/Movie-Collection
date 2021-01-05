import Api from '../../utils/networking/Api';
import { ToastAndroid } from 'react-native';

const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
    );
};

//get categories to send for category list screen every single time the page is loaded
export const CategoriesList = async () => {
    try {
        const response = await Api.get(`person`)
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
        console.log('category error: ', error);
    }
}
