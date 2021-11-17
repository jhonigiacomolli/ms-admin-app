import React, { ReactNode } from 'react'
import { style } from './styles'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text } from 'react-native'

type ButtonProps = RectButtonProps & {
    kind?: 'primary' | 'secondary' | 'login'
    text?: string
    icon?: ReactNode
}
export const Button = ({ kind = 'primary', text, icon, ...rest }:ButtonProps) => {
    return (
        <RectButton {...rest} >
            <Text style={[style.container, style[kind]]}>
                { text }
            </Text>
        </RectButton>
    )
}