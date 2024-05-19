import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import  store  from './store';
import HomeScreen from './screens/HomeScreen';
// 1) paso numero uno antes de arrancar el proyecto set up redux npm install @reduxjs/toolkit
// 2) agregar tailwind-react-native-classnames from https://github.com/jaredh159/tailwind-react-native-classnames

export default function App() {
  return (
    <Provider store={store}>
        <HomeScreen/>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
