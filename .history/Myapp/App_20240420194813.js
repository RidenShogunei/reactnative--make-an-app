import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from './pages/login'
import Register from './pages/register'
import Main from './pages/main'
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ 
            title: '登录',
            headerTitleAlign: 'center', // 设置标题居中
            headerTitleStyle: {
              fontWeight: 'bold', // 设置标题字体为粗体
            },
          }}
        />
        <Stack.Screen 
          name="register" 
          component={Register} 
          options={{ 
            title: '注册',
            headerTitleAlign: 'center', // 设置标题居中
            headerTitleStyle: {
              fontWeight: 'bold', // 设置标题字体为粗体
            },
          }}
        />
         <Stack.Screen 
          name="register" 
          component={Main} 
          options={{ 
            title: '',
            headerTitleAlign: 'center', // 设置标题居中
            headerTitleStyle: {
              fontWeight: 'bold', // 设置标题字体为粗体
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;