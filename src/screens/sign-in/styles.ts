import { StyleSheet } from 'react-native'
import { theme } from 'global/theme'

export const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    image: {
        width: '100%',
        height: 360,
        
    },
    content: {
        marginTop: -30,
    },
    iconcontainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginVertical: 5,
    },
    icon: {
        position: 'absolute',
        left: 15,
    },
    showIcon: {
        position: 'absolute',
        right: 15,
    },
    input: {
        width: 320,
        height: 55,
        paddingLeft: 75,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        borderColor: theme.colors.primary70,
        backgroundColor: theme.colors.primary60Alpha,
        color: theme.colors.primary50,
        fontFamily: theme.fonts.text,
        fontSize: 20,
        lineHeight: 25,
    },
    button: {
        marginTop: 20,
    }
})