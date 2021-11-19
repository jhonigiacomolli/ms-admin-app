import { StyleSheet } from 'react-native'
import { theme } from 'global/theme'

export const style = StyleSheet.create({
    container: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        color: theme.colors.white,
    }, 
    content: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,

    },
    icon: {
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        zIndex: 99,
        left: 15
    },
    divisor: {
        height: 45,
        width: 2,
        marginLeft: 15,
        opacity: 0.2,
        backgroundColor: theme.colors.body
    },
    primary: {
        color: theme.colors.white,
        backgroundColor: theme.colors.secondary,
    },
    secondary: {
        paddingLeft: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        color: theme.colors.white,
        backgroundColor: theme.colors.secondary,
    },
    login: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primary70,
    }
})