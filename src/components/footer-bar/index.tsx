import { Button } from 'components/button'
import React from 'react'
import { View } from 'react-native'
import { style } from './styles'

export const FooterItem = () => {
    return (
        <View style={style.container}>
            <Button style={style.button} text='Taxonomias' kind='secondary' icon='list' />
            <Button style={style.button} text='Configurações' kind='secondary' icon='config' />
        </View>
    )
}