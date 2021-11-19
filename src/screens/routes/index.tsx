import React from "react"
import { Home } from "screens/home"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { sections } from "global/sections"
import { LogBox } from "react-native"

const { Navigator, Screen } = createNativeStackNavigator()

LogBox.ignoreLogs(['This can break usage such as persisting and restoring state. This might happen if you passed non-serializable values such as function, class instances etc. in params.'])

export const Routes = () => {
    const options = {
        contentStyle: {
            backgroundColor: 'transparent'
        },
        headerShown: false,
    }

    return (
        <Navigator screenOptions={options}>
            <Screen name="Home" component={Home} />
            {
                sections.map(section => (
                    <Screen key={section.id} name={section.id} component={section.component} />
                ))
            }
        </Navigator>            
    )
} 