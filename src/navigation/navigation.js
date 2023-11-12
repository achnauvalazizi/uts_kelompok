import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigatioionContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import Servis from '../screens/Servis';

function HomoeScreen() {
    return (
        <view style={{ flex 1, alignItems: 'center', justifyContent: 'center'}}>
            <Taxt>Home Screen</Taxt>
        </view>
    )
}

const Stack = createNativeStackNavigator();

fungcion Navigation() {
    return (
        <NavigatioionContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Servis" component={Servis} />
            </Stack.Navigator>
        </NavigatioionContainer>
    );
}

export default Navigation;