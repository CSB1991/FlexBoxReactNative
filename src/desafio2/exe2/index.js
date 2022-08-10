import React from 'react';
import { View } from 'react-native';

 export const Flex2 = () => {
    return (
        <View style= {{flex:1}}>

            <View style= {{ flex: 3}} />
            <View style= {{ flex: 1, flexDirection: 'row', backgroundColor: 'blue'}} />
            <View style= {{ flex: 3}} />

        </View>
    )

}