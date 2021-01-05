import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Movies } from '../containers/actions/CategoryMovieAction';
import MovieComponent from '../components/MovieComponent';

const CategoryListScreen = ({ route }) => {

    const tag = route.params.tags

    const [results, setReslt] = useState([])

    const getData = async () => {
        const moviesList = await Movies(tag)
        setReslt(moviesList)
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
                        style={{ backgroundColor: '#fff' }}
                        data={results}
                        renderItem={({ item }) => (
                            <MovieComponent item={item} tag={tag} />
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
    }
});