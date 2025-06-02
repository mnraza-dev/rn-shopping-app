import { Stack } from "expo-router";

export default function OrdersLayout(){
    return <Stack>
        <Stack.Screen name='index' options={{
            title: 'Orders', headerShown: false
        }} />
        <Stack.Screen name='[id]' options={{
            title: 'Order',
        }} />
    </Stack>
}