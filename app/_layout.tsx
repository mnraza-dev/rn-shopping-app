import React from 'react'
import { Stack } from 'expo-router'
export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='(shop)' options={{
                headerShown: false, title: 'Shop'
            }} />
            <Stack.Screen name='categories' options={{
                headerShown: false, title: 'Categories'
            }} />

            <Stack.Screen name='product' options={{
                headerShown: false, title: 'Product'
            }} />
            <Stack.Screen name='cart' options={{
                presentation: 'modal', title: 'Shopping Cart'
            }} />
            <Stack.Screen name='auth' options={{
                headerShown: true,
            }} />
        </Stack>
    )
}
