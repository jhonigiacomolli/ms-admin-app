import React from "react"
import { FunctionComponent, ReactElement, ReactNode, ReactSVGElement } from "react";
import { Text, View } from "react-native";
import { Type_Section, Type_SectionId } from "./types";

import IconDashboard from 'assets/icon-dashboard.svg'
import IconArticles from 'assets/icon-articles.svg'
import IconPortfolio from 'assets/icon-portfolio.svg'
import IconInfobox from 'assets/icon-info-box.svg'
import IconSlides from 'assets/icon-slides.svg'
import IconJobs from 'assets/icon-jobs.svg'
import IconCars from 'assets/icon-cars.svg'
import IconCompanies from 'assets/icon-companies.svg'
import { SvgProps } from "react-native-svg";
import { AllItens } from "components/all-itens";

type Selector = {
    [key in Type_SectionId]: FunctionComponent<SvgProps>
}
export const sectionIcons:Selector = {
    dashboard: IconDashboard,
    articles: IconArticles,
    portfolio: IconPortfolio,
    infobox: IconInfobox,
    slides: IconSlides,
    jobs: IconJobs,
    cars: IconCars,
    companies: IconCompanies,

}
export const sections:Type_Section[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        component: AllItens,
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        },
        endpointGet: '',
        endpointPost: '',
        endpointDelete: '',
    },
    {
        id: 'articles',
        title: 'Artigos',
        component: AllItens ,
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        },
        endpointGet: '/blog?_limit=-1',
        endpointPost: '',
        endpointDelete: '/posts',
    },
    {
        id: 'portfolio',
        title: 'Portfólio',
        component: AllItens,
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        },
        endpointGet: '',
        endpointPost: '',
        endpointDelete: '',
    },
    {
        id: 'infobox',
        title: 'Box de Informação',
        component: AllItens,
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        },
        endpointGet: '',
        endpointPost: '',
        endpointDelete: '',
    },
    {
        id: 'slides',
        title: 'Slides',
        component: AllItens,
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        },
        endpointGet: '',
        endpointPost: '',
        endpointDelete: '',
    },
    {
        id: 'jobs',
        title: 'Vagas',
        component: AllItens,
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        },
        endpointGet: '',
        endpointPost: '',
        endpointDelete: '',
    },
    {
        id: 'cars',
        title: 'Veículos',
        component: AllItens,
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        },
        endpointGet: '',
        endpointPost: '',
        endpointDelete: '',
    },
    {
        id: 'companies',
        title: 'Empresas',
        component: AllItens,
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        },
        endpointGet: '',
        endpointPost: '',
        endpointDelete: '',
    }
]

