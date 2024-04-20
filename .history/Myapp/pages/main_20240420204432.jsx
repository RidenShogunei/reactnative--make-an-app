import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
// 定义每个页面的内容
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>首页</Text>
    </View>
  );
}

function FeaturesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>功能</Text>
    </View>
  );
}

function PersonalHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>个人主页</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="首页"
        component={HomeScreen}
        options={{
          tabBarLabel: "首页",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="功能"
        component={FeaturesScreen}
        options={{
          tabBarLabel: "功能",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="square" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="个人主页"
        component={PersonalHomeScreen}
        options={{
          tabBarLabel: "个人主页",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
