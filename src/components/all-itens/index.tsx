import { HeaderItem } from 'components/header-item'
import { Type_Section } from 'global/types'
import React from 'react'
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { style } from './styles'
import { FooterItem } from 'components/footer-bar'

type AllItensProps = {
    section: Type_Section
    data: any
}
type RouteParams = {
    section: Type_Section
}
export const AllItens = () => {
    const router = useRoute()
    const { section } = router.params as RouteParams
    return (
        <View style={style.container}>
            <HeaderItem data={section} withButton />
            <View style={style.content}>
                <Text>
                    Olá
                </Text>
            </View>
            <FooterItem />
        </View>
    )
}