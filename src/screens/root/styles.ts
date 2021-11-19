import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const style = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight() + 25,
    },
})