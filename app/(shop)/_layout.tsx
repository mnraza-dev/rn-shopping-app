import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name'], color: string, size: number }) {
    return <FontAwesome {...props} style={{ color: '#1BC464' }} size={24} />
}

const TabsLayout = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <Tabs screenOptions={{
                tabBarActiveTintColor: '#1BC464',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 12,

                },
                tabBarStyle: {
                    paddingTop: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                headerShown: false,
            }}>
                <Tabs.Screen name='index' options={{
                    headerShown: false,
                }} />
                <Tabs.Screen name='orders' options={{

                }} />
            </Tabs>
        </SafeAreaView>
    )
}

export default TabsLayout
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,

    }
})