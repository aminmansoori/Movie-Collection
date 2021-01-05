import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//this component is being used by login screen
const InputBox = ({
    value, maxLength, placeholder, onChangeText, keyboardType, onPress,
    errorMessage, iconType, iconName, secureTextEntry, onFocus }) => {
    return (
        <Input
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            errorMessage={errorMessage}
            secureTextEntry={secureTextEntry}
            inputContainerStyle={styles.inputContainer}
            autoCapitalize="none"
            autoCorrect={false}
            leftIcon={{
                type: iconType,
                name: iconName,
                color: '#7e7e7e',
                size: hp('3%'),
                onPress: onPress
            }}
            inputStyle={styles.inputText}
            placeholderTextColor='#7e7e7e'
            fontSize={hp('2.5%')}
            errorStyle={styles.errorText}
            leftIconContainerStyle={{ paddingRight: '5%' }}
            onFocus={onFocus}
        />
    );
};
export default InputBox;

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: hp('7%'),
        backgroundColor: '#fff',
        borderRadius: hp('3%'),
        borderBottomWidth: 0,
        flexDirection: 'row-reverse',
    },
    errorText: {
        color: 'red',
        fontFamily: 'Vazir-FD',
        fontSize: hp('1.5%')
    },
    inputText: {
        color: '#000',
        paddingHorizontal: wp('2%')
    }
})