import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import InputBox from '../components/InputBox';
import { LogIn } from '../containers/actions/AuthAction';

const LogInScreen = (props) => {
    const dispatch = useDispatch();

    const [errorMsg, setErrorMsg] = useState({ userNameError: false, passwordError: false });
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const checkError = async () => {
        if (password.length < 8) {
            setErrorMsg({ userNameError: false, passwordError: true })
        }
        else {
            Keyboard.dismiss()
            setErrorMsg({ userNameError: false, passwordError: false })
            dispatch(LogIn(userName, password))
        }
    }

    return (
        <>
            <View style={styles.inputView}>
                <InputBox
                    placeholder='نام کاربری'
                    value={userName}
                    maxLength={11}
                    onChangeText={setUserName}
                    errorMessage={errorMsg.userNameError ? ('نام کاربری معتبر نمیباشد') : (null)}
                    iconName='person'
                    onFocus={() => setErrorMsg({ userName: false })}
                />
                <InputBox
                    placeholder='رمز ورود'
                    value={password}
                    maxLength={24}
                    onChangeText={setPassword}
                    errorMessage={errorMsg.passwordError ? ('رمز ورود نباید کمتر از 8 کاراکتر باشد') : (null)}
                    iconName='lock'
                    secureTextEntry
                    onFocus={() => {
                        setErrorMsg({ password: false })
                    }}
                />
            </View>
            <View style={styles.buttomView}>

                <TouchableOpacity
                    style={styles.baseBtn}
                    onPress={() => checkError()}
                >
                    <Text style={styles.buttomLable}>ورود</Text>
                </TouchableOpacity>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    inputView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseBtn: {
        height: hp('7%'),
        marginHorizontal: '20%',
        backgroundColor: '#f00',
        borderRadius: hp('3%'),
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttomView: {
        flex: 1, justifyContent: 'space-evenly'
    },
    buttomLable: {
        fontFamily: 'Vazir-FD',
        fontSize: hp('2.5%'),
        color: "#fff",
    }
});

export default LogInScreen;

