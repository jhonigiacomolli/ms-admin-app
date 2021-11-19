import { FC, FunctionComponent, ReactElement, ReactNode } from "react"
import { SvgProps } from "react-native-svg"

export type Type_MessageBox = {
    visible?: boolean
    message?: string
    type?: 'alert' | 'message' | 'confirm'
    kind?: 'success' | 'warning' | 'error'
}
export type Type_TokenValidationResponse = {
    code: string
    data: {
        status: number
    }
}
export type Type_SectionId = 'dashboard' | 'articles' | 'portfolio' | 'infobox' | 'slides' | 'jobs' | 'cars' | 'companies'

export type Type_Section = {
    id: Type_SectionId
    title: string
    enable: boolean
    capability: {
        administrator: boolean
        editor: boolean
        contributor: boolean
    },
    endpointGet: string
    endpointPost: string
    endpointDelete: string
    component: () => ReactElement | null
}
export type Type_User = {
    id: number
    username: string
    name: string
    email: string
    picture: string
    theme: string
    capability: string
}

export type Type_API_Response<T> = {
    status: number
    message: string
    data: T
}

export type Type_IconsList = 'edit' | 'add' | 'graph' | 'list' | 'config' | 'trash' | 'none'

export type Type_ButtonIcons = {
    [key in Type_IconsList]: FC<SvgProps>
}
export type Type_Category = {
    id: number
    name: string
  }
export type Type_Articles = {
    id: number
    slug: string
    title: string
    description: string
    thumbnailID: number
    thumbnail: string
    postDate: string
    author: number
    authorName: string
    categories: Type_Category[]
    tags: Type_Category[]
    numberComments: number
  }