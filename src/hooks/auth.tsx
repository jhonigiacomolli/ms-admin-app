import axios from "axios"
import React, { createContext, ReactNode, useContext, useState } from "react"
import { api_prefix, api_token } from "services/api"

type AuthResponse = { 
    token: string, 
    user_display_name: string
    user_email: string
    user_nicename: string
}
type User = {
    token: string
    name: string
    username: string
    email: string
    domain: string
}
type Authentication = {
    apiBasePath: string
    loggedUser: User
    loading: boolean
    verifyCredentials: (domain: string, username: string, password: string) => void
}
type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as Authentication)

export const AuthContextProvider = ({ children }:AuthContextProviderProps) => {
    const [loading, setLoading] = useState(false)
    const [loggedUser, setLoggedUser] = useState({} as User)
    const apiBasePath = 'app'

    const verifyCredentials = async (domain: string, username: string, password: string) => {
        setLoading(true)
        const axiosdata = {
            username,
            password,
        }
        const axiosconfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            const { data } = await axios.post<AuthResponse>(`https://${api_prefix}.${domain}${api_token}`, axiosdata, axiosconfig)
            setLoggedUser({
                token: data.token,
                name: data.user_display_name,
                email: data.user_email,
                username: data.user_nicename,
                domain,
            })
            setLoading(false)
        }catch(error) {
            console.log('Não foi possível efetuar a autenticação')
            setLoading(false)
        }
    }

    console.log(loggedUser);
    
    return (
        <AuthContext.Provider value={{
            apiBasePath,
            loggedUser,
            loading,
            verifyCredentials,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}