import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

//this component is being used by movie screen
const MovieComponent = ({ item, tag }) => {

    return (
        <View
            style={styles.mainView}>
            <Text style={{ fontSize: 16 }}>Movie Title: {item.title}</Text>
            <Text style={{ fontSize: 16 }}>Date of Release: {item.date_of_release}</Text>
            <Text style={{ fontSize: 16 }}>Director: {item.director}</Text>
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
                        backgroundColor: (item === tag) ? ('#f005') : ('#bbb5')
                    }}>{item}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
export default MovieComponent;

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