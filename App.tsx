import { StatusBar } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Gafata_400Regular } from '@expo-google-fonts/gafata'
import { Jost_500Medium, Jost_600SemiBold } from '@expo-google-fonts/jost'
import { View } from 'react-native';
import { Background } from 'components/background';
import { Login } from 'screens/login';
import { AuthContextProvider } from 'hooks/auth';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Gafata_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthContextProvider>
      <Background>
        <View >
          <StatusBar 
            barStyle="light-content" 
            backgroundColor="transparent" 
            translucent 
            />
          <Login />
        </View>
      </Background>
    </AuthContextProvider>
  );
}