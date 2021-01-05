import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';

//this component will be used in categorylist screen
const CategoryList = ({ item }) => {

    return (
        <View style={styles.mainView}>
            <Text style={styles.title}>{item.full_name}</Text>
            < FlatList
                style={styles.flatlist}
                data={item.categories}
                renderItem={({ item }) => (
                    <Text style={styles.text}>{item}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default CategoryList;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 5,
        flexDirection: 'column',
        borderBottomColor: '#aaa',
        borderBottomWidth: 0.5
    },
    title: {
        fontSize: 18, marginBottom: 5
    },
    flatlist: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
    text: {
        fontSize: 16,
        backgroundColor: '#bbb5'
    },

})