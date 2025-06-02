import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../assets/types/product'
export const ProductListItem = ({ product }: { product: Product }) => {
    return (
        <View>
            <Image source={product.heroImage} style={{
                width: '100%',
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10
            }} />
            <Text>{product.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})