import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: " Oops! This Screen Does't Exist" }} />
            <View style={styles.container}>
                <FontAwesome name='home' style={{ marginRight: 10 }} size={25} color='white' />

                <Link href="/" style={styles.button}>
                    Go back to Home!</Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
