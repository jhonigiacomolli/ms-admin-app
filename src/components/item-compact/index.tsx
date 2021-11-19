import { Type_Articles } from 'global/types'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { style } from './styles'

type ItemCompactProps = {
    data: Type_Articles
}
export const ItemCompact = ({ data }:ItemCompactProps) => {
    const [values, setValues] = useState<Type_Articles>()

    useEffect(() => {
        setValues(data)
    }, [data])

    return (
        <View style={style.container}>
            <View>
                { values?.thumbnail && <Image source={{ uri: values.thumbnail}} />}
            </View>
            <Text style={style.title}>
                { values?.title }
            </Text>
        </View>
    )
}