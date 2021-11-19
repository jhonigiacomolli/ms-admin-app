import axios from "axios"
import { Type_MessageBox, Type_User } from "global/types"
import React, { createContext, ReactNode, useContext, useState } from "react"

type Global = {
    message: Type_MessageBox
    users: Type_User[]
    updateUsers: (type:'all' | 'new' | 'edit', users: Type_User[]) => void
    updateMessage: (data: Type_MessageBox) => void
}
type GlobalContextProviderProps = {
    children: ReactNode
}

export const GlobalContext = createContext({} as Global)

export const GlobalContextProvider = ({ children }:GlobalContextProviderProps) => {
    const [message, setMessage] = useState<Type_MessageBox>({
        visible: false,
        type: 'alert',
        kind: 'error',
        message: ''
    })
    const [users, setUsers] = useState<Type_User[]>([])

    const updateMessage = (data: Type_MessageBox) => {
        setMessage(old => ({
            ...old,
            ...data
        }))
    }
    const updateUsers = (type: 'all' | 'new' | 'edit', users: Type_User[]) => {
        type === 'all' && setUsers(users)
        type === 'new' && setUsers(oldUsers => [...oldUsers, ...users])
        type === 'edit' && setUsers(oldUsers => (
            oldUsers.map(user => {
                const editedUser = users.filter(us => us.email === user.email)

                return editedUser.length === 1 ? editedUser[0] : user

            })
        ))
    }
    
    return (
        <GlobalContext.Provider value={{
            message,
            users,
            updateUsers,
            updateMessage,
        }}>
            { children }
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    return context
}