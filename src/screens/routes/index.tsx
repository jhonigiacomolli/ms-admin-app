import { HomeButton } from "components/button-section"
import { HeaderProfile } from "components/header-profile"
import { sections } from "global/sections"
import React from "react"
import { FlatList, View } from "react-native"
import { style } from "./styles"

export const Routes = () => {
    
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