import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

//this component is being used by nome screen
const SearchedComponent = ({ item }) => {

    return (
        <View
            style={styles.mainView}>
            <Text style={{ fontSize: 18 }}>Movie Title: {item.title}</Text>
            <Text style={{ fontSize: 18 }}>Date of Release: {item.date_of_release}</Text>
            <Text style={{ fontSize: 18 }}>Director: {item.director}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Icon name='star' color='#fac74b' />
                <Text style={styles.rating}>{item.rating} </Text>
            </View>
            < FlatList
                style={styles.flatlist}
                data={item.tags}
                renderItem={({ item }) => (
                    <Text style={{
                        fontSize: 16,
                        backgroundColor: '#bbb5'
                    }}>{item}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default SearchedComponent;

const styles = StyleSheet.create({
    mainView: {
        padding: 10, borderBottomWidth: 0.5, borderBottomColor: '#bbb5'
    },
    rating: {
        fontSize: 18, color: '#888'
    },
    flatlist: {
        flexDirection: 'row', justifyContent: 'space-around'
    }
});