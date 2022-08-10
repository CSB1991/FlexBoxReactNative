import React from 'react';
import { View } from 'react-native';
export const Desafio1 = () => {
    return (
        <View style= {{flex:1}}>
            <View style= {{flex: 3, flexDirection: 'column', alignItems: 'stretch'}} >
                <View style= {{ height: 25, backgroundColor: '#50E3C2'}} />
            </View>
            <View style= {{flex: 2, flexDirection: 'column', alignItems: 'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: '#F5A623'}} />
            </View>
            <View style= {{flex: 2, flexDirection: 'column', alignItems: 'center'}} >
                <View style= {{ height: 30, width: 170, backgroundColor: '#F5A623'}} />
            </View>
            <View style= {{flex: 1, flexDirection: 'row'}} >
                <View style= {{ height: 78, width:'50%', backgroundColor: '#9013FE'}} />
                <View style= {{ height: 78, width:'50%', backgroundColor: '#4A90E2'}} />
            </View>
            <View style= {{flex: 1, flexDirection: 'column', alignItems: 'stretch'}} >
                <View style= {{ height: 25, backgroundColor: '#50E3C2'}} />
            </View>
            <View style= {{flex: 3, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: '#F5A623'}} />
                <View style= {{ height: 100, width: 100, backgroundColor: '#F5A623'}} />
                <View style= {{ height: 100, width: 100, backgroundColor: '#F5A623'}} />
            </View>
            <View style= {{flex: 3, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'}} >
                <View style= {{ height: 100, width: 100, backgroundColor: '#F5A623'}} />
                <View style= {{ height: 100, width: 100, backgroundColor: '#F5A623'}} />
                <View style= {{ height: 100, width: 100, backgroundColor: '#F5A623'}} />
            </View>
            <View style= {{flex: 1, flexDirection: 'column', alignItems: 'stretch'}} >
                <View style= {{ height: 60, backgroundColor: '#4A90E2'}} />
            </View>
            
        </View>
    )

}