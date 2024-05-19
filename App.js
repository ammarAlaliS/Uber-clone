import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// 1) paso numero uno antes de arrancar el proyecto set up redux npm install @reduxjs/toolkit
// 2) agregar tailwind-react-native-classnames from https://www.nativewind.dev/quick-starts/expo
// 3) se agrego  "react-native-elements": "^3.4.3", "react-native-safe-area-context": "^4.10.1", "react-native-vector-icons": "^10.1.0",from https://reactnativeelements.com/docs/installation
export default function App() {
  return (

    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>

  );
}

