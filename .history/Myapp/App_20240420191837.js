import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HeaderTitle = () => (
  <View style={styles.headerTitle}>
    <Text style={styles.text}>定制标题</Text>
  </View>
);

const styles = StyleSheet.create({
  headerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

import Login from './pages/login'
import Register from './pages/register'
  
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="login" component={Login} options={{ headerTitle: props => <HeaderTitle {...props} /> }}/>
        <Stack.Screen name="register" component={Register} options={{ title: '注册' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;