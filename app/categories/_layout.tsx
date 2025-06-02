import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {  Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function CategoryLayout() {
    return (
        <Stack>
            <Stack.Screen name='[slug]' options={{
                headerShown: true,
                headerLeft: () => (
                    <TouchableOpacity>
                        <Ionicons name='arrow-back' size={24} color='black' />
                    </TouchableOpacity>
                )
            }} />

        </Stack>
    )
}

const styles = StyleSheet.create({})