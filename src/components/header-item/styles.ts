import { StyleSheet } from 'react-native'
import { theme } from 'global/theme'

export const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 100,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 24,
        borderTopRightRadius: 24,
        marginRight: 20,
    },
    content: {
        flex: 1,
        color: theme.colors.white,
        fontFamily: theme.fonts.text,
        fontSize: 20,
    },
    button: {
        width: 45,
        height: 45,
        borderRadius: 5,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.secondary,
    }
})