import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewPostScreen from './screens/NewPostScreen';
import LoginScree from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  const stack = createNativeStackNavigator();

  return(
    <NavigationContainer >
      <stack.Navigator screenOptions={{headerShown : false}  } >
      <stack.Screen name='Login' component={LoginScree}></stack.Screen>
        <stack.Screen name='Home' component={HomeScreen}></stack.Screen>
        <stack.Screen name='Post' component={NewPostScreen}></stack.Screen>
        <stack.Screen name = "Register" component={RegisterScreen}></stack.Screen>
       
      </stack.Navigator>

    </NavigationContainer>
  )
}
