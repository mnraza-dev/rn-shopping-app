import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PRODUCTS } from '../../assets/products'
import { ProductListItem } from '../../components/product-list-item';
import { ListHeader } from '../../components/list-header';


export default function Home() {
    return (
        <View >
            <FlatList
                data={PRODUCTS}
                renderItem={({ item }) =>
                    <ProductListItem product={item} />
                }
                keyExtractor={item => item.id.toString()}
                numColumns={2} ListHeaderComponent={() => <ListHeader />}
                contentContainerStyle={styles.flatListContent}
                columnWrapperStyle={styles.flatListColumnWrapper}
                style={{
                    paddingVertical: 5,
                    paddingHorizontal: 10
                }} />
        </View>
    )
}

const styles = StyleSheet.create({

    flatListContent: {
        paddingBottom: 20,

    },
    flatListColumnWrapper: {
        justifyContent: 'space-between',

    }
})