import React, { useState } from 'react'
import BackgroundImage from 'assets/background-login.png' 
import { View, TextInput, Image, ActivityIndicator } from 'react-native'
import { style } from './styles'
import { theme } from 'global/theme'
import IconDomain from 'assets/icon-domain.svg'
import IconUser from 'assets/icon-user.svg'
import IconPassword from 'assets/icon-password.svg'
import DisplayPassIcon from 'assets/icon-display-pass.svg'
import { Button } from 'components/button'
import { useAuth } from 'hooks/auth'

export const Login = () => {
    const [hidePass, setHidePass] = useState(true)
    const [domain, setDomain] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { verifyCredentials, loggedUser, loading } = useAuth()

    const handleDisplayPass = () => {
        setHidePass(old => !old)
    }
    
    const login = async () => {

        if(domain && username && password) {
            verifyCredentials(domain, username, password)
        }     
           

        
    }

    return (
        <View style={style.container}>
            <Image 
                source={BackgroundImage}
                style={style.image} 
                resizeMode='cover'
            />
            <View style={style.content} >
                <View style={style.iconcontainer}>
                    <IconDomain style={style.icon} width={25} height={25} />
                    <TextInput 
                        value={domain}
                        onChangeText={setDomain}
                        style={style.input} 
                        placeholder='Domínio'
                        placeholderTextColor={theme.colors.primary50} 
                    />
                </View>
                <View style={style.iconcontainer}>
                    <IconUser style={style.icon} width={25} height={25} />
                    <TextInput 
                        value={username}
                        onChangeText={setUsername}
                        style={style.input} 
                        placeholder='Usuário'
                        placeholderTextColor={theme.colors.primary50} 
                    />
                </View>
                <View style={style.iconcontainer}>
                    <IconPassword style={style.icon} width={25} height={25} />
                    <TextInput 
                        value={password}
                        onChangeText={setPassword}
                        style={style.input} 
                        secureTextEntry={hidePass}
                        placeholder='Senha'
                        placeholderTextColor={theme.colors.primary50} 
                    />
                    <DisplayPassIcon style={style.showIcon} onPress={handleDisplayPass}/>
                </View>
            </View>
            {
                loading 
                ? <ActivityIndicator style={style.button} color={theme.colors.secondary} size={40}/>
                :<Button 
                    style={style.button} 
                    kind='login'
                    text='Acessar' 
                    onPress={login}
                />
            }
        </View>
    )
}