import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/2Bw",
        screen: "MapScreen",
    },

]

const NavOptions = () => {
    const navigation = useNavigation()
    return (
        <FlatList
            data={data}
            horizontal
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={()=> navigation.navigate(item.screen)}
                    className=" p-2 pl-6 pb-8 bg-gray-200 m-2 w-40"
                    >
                    <View>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                        />
                        <Text className=" mt-2 text-lg font-semibold">{item.title}</Text>
                        <Icon style={{
                            padding: 8,
                            backgroundColor: '#000',
                            borderRadius: 9999,
                            width: 40,
                            marginTop: 8
                        }} name='arrowright' color="white" type='antdesign' />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default NavOptions;
