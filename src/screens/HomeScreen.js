import React, { useState } from 'react';
import { View, ActivityIndicator, TouchableOpacity, Dimensions, TextInput, FlatList, StyleSheet } from 'react-native';
import { SearchMovies } from '../containers/actions/SearchAction';
import { Icon } from 'react-native-elements';
import SearchedComponent from '../components/SearchedComponent';

const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;

const HomeScreen = () => {
    const [value, onChangeText] = useState('');
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(null);


    const getData = async () => {
        setLoading(true)
        const searchResult = await SearchMovies(value)
        setResult(searchResult)
        setLoading(false)
    }

    return (
        <View style={styles.mainView}>

            <View style={styles.container}>
                <TextInput
                    placeholder='search'
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                >
                </TextInput>

                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => getData()}
                >
                    <Icon name='search' size={35} color='#888' type='evilIcon' />
                </TouchableOpacity>
            </View>

            {loading === true ?
                <View style={styles.loadingView}>
                    <ActivityIndicator size='large' color='red' />
                </View>
                :
                < FlatList
                    style={styles.flatlist}
                    data={result}
                    renderItem={({ item }) => (
                        <SearchedComponent item={item} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            }
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    mainView: {
        flex: 1, padding: 5, backgroundColor: '#fff'
    },
    container: {
        width: '100%',
        height: hp * 0.08,
        flexDirection: 'row',
        paddingHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#ccc5'
    },
    input: {
        fontSize: 18, width: '90%'
    },
    touchable: {
        paddingVertical: 10, width: '10%'
    },
    loadingView: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    flatlist: {
        flex: 1, backgroundColor: '#fff'
    }
});