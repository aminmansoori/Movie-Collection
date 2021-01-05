import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { AuthLoading, ChangeToken } from '../containers/actions/AuthAction';

const Splash = () => {
    const dispatch = useDispatch()
    useEffect(() => { checkToken() }, [])
    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem('@token')
            if (token === '') {
                console.log('does not have token');
                dispatch(ChangeToken(''))
            }
            else {
                console.log('has token');
                dispatch(ChangeToken(token))
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(AuthLoading(false))
        }
    }


    return (
        <View style={styles.viewStyle}>
            <ActivityIndicator size='large' color='red' />
        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
});
export default Splash;
