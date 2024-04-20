import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from './pages/login'
import Register from './pages/register'
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="login" component={Login} options={{ title: '登录' }}/>
        <Stack.Screen name="register" component={Register} options={{ title: '注册' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;