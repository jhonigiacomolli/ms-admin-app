import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 25,
    }
})