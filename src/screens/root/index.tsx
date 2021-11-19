import { StatusBar } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Gafata_400Regular } from '@expo-google-fonts/gafata'
import { Jost_500Medium, Jost_600SemiBold } from '@expo-google-fonts/jost'
import { View } from 'react-native';
import { Background } from 'components/background';
import { Login } from 'screens/sign-in';
import { MessageBox } from 'components/messages/message-box';
import { useGlobalContext } from 'hooks/global';
import { useAuth } from 'hooks/auth';
import { Routes } from '../routes';
import { style } from './styles';

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
        <View style={style.container}>
            <StatusBar 
                barStyle="light-content" 
                backgroundColor="transparent" 
                translucent 
                />
            {
              loggedUser.token
              ? <Routes />
              : <Login />
            }
            {message?.visible && (
                <MessageBox data={message} />
            )}
        </View>
    </Background>
  );
}