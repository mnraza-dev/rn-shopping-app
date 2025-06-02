import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
export default function ProductLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={({ navigation }) => ({
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.back()}>
                            <Ionicons name='arrow-back' size={24} color='black' />
                        </TouchableOpacity>
                    )
                })}
            />

        </Stack>
    )
}

const styles = StyleSheet.create({})