import React from 'react'
import { useAuth } from 'hooks/auth'
import { useFonts } from 'expo-font'
import { Login } from 'screens/sign-in'
import { Routes } from 'screens/routes'
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useGlobalContext } from 'hooks/global'
import { Background } from 'components/background'
import { MessageBox } from 'components/messages/message-box'
import { Gafata_400Regular } from '@expo-google-fonts/gafata'
import { NavigationContainer } from '@react-navigation/native'
import { Jost_500Medium, Jost_600SemiBold } from '@expo-google-fonts/jost'

export const Root = () => {
  const { message } = useGlobalContext()
  const { loggedUser } = useAuth()
  const [ fontsLoaded ] = useFonts({
    Gafata_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  })
  
  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      <NavigationContainer>
        {
          loggedUser.token
          ? <Routes />
          : <Login />
        }
      </NavigationContainer>
      {message?.visible && (
          <MessageBox data={message} />
      )}
    </Background>
  );
}