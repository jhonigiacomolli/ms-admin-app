import { StyleSheet } from 'react-native'
import { theme } from 'global/theme'

export const style = StyleSheet.create({
    container: {
        width: '100%',
        minWidth: 320,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        color: theme.colors.white,
    }, 
    primary: {

    },
    secondary: {

    },
    login: {
        backgroundColor: theme.colors.primary70,
    }
})