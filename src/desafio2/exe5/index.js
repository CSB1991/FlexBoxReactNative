import React from 'react';
import { View } from 'react-native';

 export const Flex5 = () => {
    return (
        <View style= {{flex:1, flexDirection: 'column', justifyContent:'flex-end'}}>

            <View style= {{alignItems: 'flex-end'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'pink'}} />
            </View>

            <View style= {{alignItems:'flex-end'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'red'}} />
            </View>

            <View style= {{alignItems: 'flex-end'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'purple'}} />
            </View>


        </View>
    )

}