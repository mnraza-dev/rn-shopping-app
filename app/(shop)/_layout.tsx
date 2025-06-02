import { Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarIcon: ({ color, size }) => (
                    // <MaterialCommunityIcons name='home' color={color} size={size} />
                    <Text>Home</Text>
                )
            }} />
            <Tabs.Screen name='orders' options={{
                title: 'Orders',
                tabBarIcon: ({ color, size }) => (
                    <Text>Orders</Text>
                )
            }} />
        </Tabs>
    )
}

export default TabsLayout