import { StyleSheet } from 'react-native'
import { theme } from 'global/theme'

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.overlay,
        zIndex: 99,
        paddingHorizontal: 15, 
        position: 'absolute',
    }, 
    content: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
        backgroundColor: theme.colors.primary90,
    },
    message: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: theme.fonts.text,
        color: theme.colors.body,
    }
})