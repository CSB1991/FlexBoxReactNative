import React from 'react';
import { View } from 'react-native';

 export const Flex3 = () => {
    return (
        <View style= {{flex:1,}}>

            <View style= {{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'pink'}} />
            </View>

            <View style= {{ flex: 5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'red'}} />
            </View>

            <View style= {{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: 'purple'}} />
            </View>


        </View>
    )

}