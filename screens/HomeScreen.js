import { View, Text, SafeAreaView, Image } from 'react-native'
import GlobalFuntion from '../GlobalFuntion'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={GlobalFuntion.androidSafeArea}>
      <View className="p-5">
        <Image
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
          className="w-24 h-24 "
          resizeMode='contain'
        />
          <NavOptions/>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen