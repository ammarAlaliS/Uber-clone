
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';

// 1) paso numero uno antes de arrancar el proyecto set up redux npm install @reduxjs/toolkit
// 2) agregar tailwind-react-native-classnames from https://www.nativewind.dev/quick-starts/expo
// 3) se agrego  "react-native-elements": "^3.4.3", "react-native-safe-area-context": "^4.10.1", "react-native-vector-icons": "^10.1.0",from https://reactnativeelements.com/docs/installation
// 4) add navegations 
// add react-native-google-places-autocomplete npm install react-native-google-places-autocomplete --save
// add react-native-maps
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
