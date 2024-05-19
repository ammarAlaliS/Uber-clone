import { View, Text, SafeAreaView, Image } from 'react-native'
import GlobalFuntion from '../GlobalFuntion'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'


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
        <GooglePlacesAutocomplete
          placeholder='De donde'
          nearbyPlacesAPI='googlePlacesSearch'
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'es'
          }}
          styles={{
            container:{
              flex:0
            }, 
            textInput:{
              fontSize: 18
            }
          }}
        />
        <NavOptions />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen