import { sectionIcons } from "global/sections"
import { Type_Section } from "global/types"
import React from "react"
import { Text, View } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { style } from "./styles"
import PlusIcon from 'assets/icon-plus.svg'
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "global/theme"

type HeaderItemProps = {
    data: Type_Section
    withButton?: boolean
}
export const HeaderItem = ({ data, withButton = false }:HeaderItemProps) => {
    const Icon = sectionIcons[data.id]
    return(
        <View style={style.container}>
            <LinearGradient style={style.icon} colors={['transparent', theme.colors.primary80]} >
                <Icon />
            </LinearGradient>
            <Text style={style.content}>
                { data.title }
            </Text>
            {
                withButton && (
                    <RectButton style={style.button}>
                        <PlusIcon />
                    </RectButton>
                )
            }
        </View>
    )
}