import axios from "axios"
import { Type_TokenValidationResponse, Type_User } from "global/types"
import React, { createContext, ReactNode, useContext, useState } from "react"
import { useGlobalContext } from "./global"

type AuthResponse = { 
    token: string, 
    user_display_name: string
    user_email: string
    user_nicename: string
}
type User = Type_User & {
    token: string
    domain: string
}
type Authentication = {
    apiPath: string
    loggedUser: User
    loading: boolean
    verifyCredentials: (domain: string, username: string, password: string) => void
}
type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as Authentication)

export const AuthContextProvider = ({ children }:AuthContextProviderProps) => {
    const { updateMessage, updateUsers } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const [loggedUser, setLoggedUser] = useState({} as User)
    const [apiPath, setApiPath] = useState('')
    const apiBasePath = 'app'
    
    const updateApiPath = (domain: string) => {
        setApiPath(`https://${apiBasePath}.${domain}/ms-api/v1`)
    }

    const getUsers =  async (domain: string) => {
        try {
            const { data: users } = await axios.get<Type_User[]>(`https://${apiBasePath}.${domain}/ms-api/v1/users`)
            updateUsers('all', users)
            return users
        }catch {
            return []
        }
    }

    const verifyCredentials = async (domain: string, username: string, password: string) => {
        setLoading(true)
        setLoggedUser({} as User)
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
            updateApiPath(domain)
            
            const users = await getUsers(domain)
            
            const { data: tokenResponse } = await axios.post<AuthResponse>(`https://${apiBasePath}.${domain}/ms-api/jwt-auth/v1/token`, axiosdata, axiosconfig)
            
            if(await validateToken(domain, tokenResponse.token)) {
                setLoggedUser({
                    ...users.filter(user => user.email === tokenResponse.user_email)[0],
                    token: tokenResponse.token,
                    domain,
                })
            }else {
                updateMessage({
                    kind: 'error',
                    message: 'Sua sessão expirou, efetua a autenticação novamente!',
                    visible: true
                })
            }

            setLoading(false)
        }catch (error) {
            updateMessage({
                kind: 'error',
                message: 'Não foi possível autenticar a sessão, verifique os seus dados e tente novamente',
                visible: true
            })
            setLoading(false)            
        }
    }

    const validateToken = async (domain: string, token: string) => {
        const axiosValidationconfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        try {
            const { data } = await axios.post<Type_TokenValidationResponse>(`https://${apiBasePath}.${domain}/ms-api/jwt-auth/v1/token/validate`, {}, axiosValidationconfig)
            return data.data.status === 200
        }catch(error) {
            updateMessage({
                visible: true,
                message: 'Sua sessão expirou, realize a autenticação novamente'
            })
            return false
        }
    }

    
    return (
        <AuthContext.Provider value={{
            apiPath,
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