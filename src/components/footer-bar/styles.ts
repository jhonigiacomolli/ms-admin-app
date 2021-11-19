import { StyleSheet } from 'react-native'
import { theme } from 'global/theme'

export const style = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 25,
        flexDirection: 'row',
        backgroundColor: theme.colors.tertiary
    },
    button: {
        flex: 1,
        margin: 5,
    }
})