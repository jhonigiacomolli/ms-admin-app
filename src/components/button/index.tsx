import React, { FC, ReactNode } from 'react'
import { style } from './styles'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import EditIcon from 'assets/icon-edit.svg'
import { theme } from 'global/theme'
import { ButtonsIcons } from 'global/button-icons'
import { Type_IconsList } from 'global/types'
import { SvgProps } from 'react-native-svg'

type ButtonProps = RectButtonProps & {
    kind?: 'primary' | 'secondary' | 'login'
    text?: string
    icon?: Type_IconsList
}
export const Button = ({ kind = 'primary', text, icon = 'none', ...rest }:ButtonProps) => {
    const Icon:FC<SvgProps> = ButtonsIcons[icon]
    
    return ( 
        <RectButton {...rest} >
            <View style={style.container}>
                {
                    kind === 'secondary' && (
                        <View style={style.icon} >
                            <Icon width={25} height={25} fill={theme.colors.white} />
                            <View style={style.divisor} />
                        </View>
                    )
                }
                <Text style={[style.content, style[kind]]}>
                    { text }
                </Text>
            </View>
        </RectButton>
    )
}