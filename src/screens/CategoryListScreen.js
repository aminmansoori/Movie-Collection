import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { CategoriesList } from '../containers/actions/CategoryListAction';
import CategoryLit from '../components/CategoryList';

const CategoryListScreen = () => {

    const [results, setReslt] = useState([])
    const getData = async () => {
        const categories = await CategoriesList()
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
                        style={{ backgroundColor: '#fff' }}
                        data={results}
                        renderItem={({ item }) => (
                            <CategoryLit item={item} />
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