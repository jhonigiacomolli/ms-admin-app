import React from "react"
import { Image, Text, View } from "react-native"
import { style } from "./styles"
import DefaultProfilePic from 'assets/icon-user.svg'
import { useAuth } from "hooks/auth"
import { RectButton } from "react-native-gesture-handler"
import EditIcon from 'assets/icon-edit.svg'
import { theme } from "global/theme"

export const HeaderProfile = () => {
    const { loggedUser } = useAuth()
    
    return (
        <View style={style.container}>
            <View style={style.picture}>
                {
                    loggedUser?.picture
                    ? <Image source={{ uri: loggedUser?.picture }} />
                    : <DefaultProfilePic width={55} height={55} />

                }
            </View>
            <View style={style.content}>
                <Text style={style.subtitle}>Olá,</Text>
                <Text style={style.title}>{loggedUser?.name}</Text>
            </View>
            <RectButton>
                <EditIcon fill={theme.colors.primary50} />
            </RectButton>
        </View>
    )
}