import { sectionIcons } from "global/sections"
import { Type_Section } from "global/types"
import React, { FunctionComponent, useState } from "react"
import { Text } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { SvgProps } from "react-native-svg"
import { style } from "./styles"
import IconDashboard from 'assets/icon-dashboard.svg'
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "global/theme"

type HomeButtonProps = {
    data: Type_Section
}
export const HomeButton = ({ data }: HomeButtonProps) => {
    const Icon: FunctionComponent = sectionIcons[data.id]
    const { primary90 } = theme.colors

    return (
        <LinearGradient style={style.container} colors={[primary90, 'transparent']}>
            <RectButton style={style.content}  >
                <Icon />
                <Text style={style.title}>
                    { data.title }
                </Text>
            </RectButton>
        </LinearGradient>
    )
}