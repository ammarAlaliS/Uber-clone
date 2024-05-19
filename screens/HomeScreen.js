import { View, Text, SafeAreaView, Image } from 'react-native'
import GlobalFuntion from '../GlobalFuntion'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';


const HomeScreen = () => {
  const dispatch = useDispatch();

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
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location, 
              description: data.description
            }))
            dispatch(setDestination(null))
          }}
          returnKeyType={'search'}
          fetchDetails={true}
          styles={{
            container: {
              flex: 0
            },
            textInput: {
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