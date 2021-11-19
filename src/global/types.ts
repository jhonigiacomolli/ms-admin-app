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
    }
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