import React from 'react';
import { View } from 'react-native';

 export const Flex6 = () => {
    return (
        <View style= {{flex:1}}>
            <View style= {{flex: 2, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 80, width: 80, backgroundColor: 'pink'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'pink'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'pink'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'pink'}} />
            </View>
            <View style= {{flex: 2, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 80, width: 80, backgroundColor: 'orange'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'orange'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'orange'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'orange'}} />
            </View>
            <View style= {{flex: 2, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 80, width: 80, backgroundColor: 'grey'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'grey'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'grey'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'grey'}} />
            </View>
            <View style= {{flex: 2, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 80, width: 80, backgroundColor: 'green'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'green'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'green'}} />
                <View style= {{ height: 80, width: 80, backgroundColor: 'green'}} />
            </View>

        </View>
    )

}