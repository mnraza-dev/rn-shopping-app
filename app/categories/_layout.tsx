import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function CategoryLayout() {
    return (
        <Stack>
            <Stack.Screen name='[slug]' options={{
                headerShown: false
            }} />
            
        </Stack>
    )
}

const styles = StyleSheet.create({})