import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { CategoriesMovies } from '../containers/actions/CategoryMovieAction';
import { Icon } from 'react-native-elements';

const CategoryListScreen = ({ navigation }) => {

    const [results, setReslt] = useState([])

    const getData = async () => {
        const categories = await CategoriesMovies()
        setReslt(categories)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {(results == 0) ?
                <ActivityIndicator
                    size="large"
                    color="red"
                    style={styles.activityindicator}
                /> : (
                    < FlatList
                        data={results}
                        style={{ backgroundColor: '#fff' }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Movies', { tags: item.name })}
                                style={styles.touchable}>
                                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                <Icon name='chevron-right' />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                )
            }
        </>
    )

}

export default CategoryListScreen;

const styles = StyleSheet.create({
    activityindicator: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    touchable: {
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#bbb5',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});