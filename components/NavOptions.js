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
    }
]

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default NavOptions;
