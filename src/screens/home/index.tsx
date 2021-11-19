import React from "react"
import { style } from "./styles"
import { sections } from "global/sections"
import { FlatList, View } from "react-native"
import { HomeButton } from "components/button-section"
import { HeaderProfile } from "components/header-profile"

type HomeProps = {}
export const Home = () => {
    return (
        <View style={style.container}>
            <HeaderProfile />
            <FlatList 
                data={sections}
                numColumns={2}
                horizontal={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <HomeButton data={item} />
                )}
            />
        </View>
    )
}