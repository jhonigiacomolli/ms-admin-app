import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from 'global/theme'
import { style } from './styles'

type BackgroundProps = {
    children: ReactNode
}
export const Background = ({ children }: BackgroundProps) => {
    const { primary90, tertiary } = theme.colors

    return (
        <LinearGradient style={style.container} colors={[ primary90, tertiary ]}>
            { children }
        </LinearGradient>
    )
}