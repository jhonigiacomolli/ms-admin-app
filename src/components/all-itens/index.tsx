import { HeaderItem } from 'components/header-item'
import { Type_API_Response, Type_Articles, Type_Section } from 'global/types'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { style } from './styles'
import { FooterItem } from 'components/footer-bar'
import axios from 'axios'
import { useAuth } from 'hooks/auth'
import { ItemCompact } from 'components/item-compact'

type AllItensProps = {
    section: Type_Section
    data: any
}
type RouteParams = {
    section: Type_Section
}
export const AllItens = () => {
    const [articles, setArticles] = useState<Type_Articles[]>([])
    const router = useRoute()
    const { apiPath } = useAuth()
    const { section } = router.params as RouteParams

    useEffect(() => {
        getArticles()
    }, [section])

    const getArticles = async () => {
        const { data } = await axios.get<Type_Articles[]>(`${apiPath}${section.endpointGet}`)
        setArticles(data)        
    }
    
    console.log(articles);
    
    return (
        <View style={style.container}>
            <HeaderItem data={section} withButton />
            <View style={style.content}>
                <ItemCompact data={articles[0]} />
            </View>
            <FooterItem />
        </View>
    )
}