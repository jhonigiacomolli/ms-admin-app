import { Button } from "components/button"
import { Type_MessageBox } from "global/types"
import { useGlobalContext } from "hooks/global"
import React from "react"
import { View, Text } from 'react-native'
import { style } from './styles'

type MesssageBoxProps = {
    data: Type_MessageBox
}

export const MessageBox = ({ data }:MesssageBoxProps) => {
    const { updateMessage } = useGlobalContext()

    const handleClose = () => {
        updateMessage({visible: false})
    }

    return (
        <View style={style.container}>
             <View style={style.content}>
                <Text style={style.message}>
                    { data.message }
                </Text>
                <Button kind="login" text="OK" onPress={handleClose} />
             </View>
        </View>
    )
}
