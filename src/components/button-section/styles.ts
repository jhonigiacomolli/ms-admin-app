import { StyleSheet } from 'react-native'
import { theme } from 'global/theme'

export const style = StyleSheet.create({
    container: {
        width: '45%',
        height: 120,
        margin: 10,
        borderRadius: 10,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    title: {
        marginVertical: 10,
        fontSize: 12,
        textTransform: 'uppercase',
        fontFamily: theme.fonts.text,
        color: theme.colors.white,
    }
})