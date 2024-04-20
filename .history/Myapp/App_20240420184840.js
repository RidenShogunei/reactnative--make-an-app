import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from './pages/login'
import Regiset from './pages/login'
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}