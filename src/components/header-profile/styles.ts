import { StyleSheet } from 'react-native'
import { theme } from 'global/theme'

export const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 40,
        paddingVertical: 30,
        alignItems: 'center',
    },
    picture: {
        borderWidth: 4,
        borderRadius: 50,
        borderStyle: 'solid',
        borderColor: theme.colors.primary80,
        padding: 10,
    },
    profile: {
        borderRadius: 50,
    },
    content: {
        flex: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: theme.fonts.text,
        color: theme.colors.body
    },
    subtitle: {
        fontSize: 14,
        fontFamily: theme.fonts.text,
        color: theme.colors.body
    }
})