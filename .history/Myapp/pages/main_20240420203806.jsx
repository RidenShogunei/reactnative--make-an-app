import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// 定义每个页面的内容
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>首页</Text>
        </View>
    );
}

function FeaturesScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>功能</Text>
        </View>
    );
}

function PersonalHomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>个人主页</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
            <Tab.Navigator >
                <Tab.Screen name="🏠 首页" component={HomeScreen}  />
                <Tab.Screen name="💡 功能" component={FeaturesScreen} />
                <Tab.Screen name="👤 个人主页" component={PersonalHomeScreen} />
            </Tab.Navigator>
    );
}