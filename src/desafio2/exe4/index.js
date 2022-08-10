import React from 'react';
import { View } from 'react-native';

 export const Flex4 = () => {
    return (
        <View style= {{flex:1, flexDirection: 'row', justifyContent:'center'}}>

            <View style= {{justifyContent: 'center', alignItems: 'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'pink'}} />
            </View>

            <View style= {{justifyContent: 'center', alignItems:'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'red'}} />
            </View>

            <View style= {{justifyContent: 'center', alignItems: 'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'purple'}} />
            </View>


        </View>
    )

}