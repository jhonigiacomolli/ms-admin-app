import { FunctionComponent, ReactElement, ReactNode, ReactSVGElement } from "react";
import { View } from "react-native";
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
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        }
    },{
        id: 'articles',
        title: 'Artigos',
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        }
    },{
        id: 'portfolio',
        title: 'Portfólio',
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        }
    },{
        id: 'infobox',
        title: 'Box de Informação',
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        }
    },{
        id: 'slides',
        title: 'Slides',
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        }
    },{
        id: 'jobs',
        title: 'Vagas',
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        }
    },{
        id: 'cars',
        title: 'Veículos',
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        }
    },{
        id: 'companies',
        title: 'Empresas',
        enable: true,
        capability: {
            administrator: true,
            editor: true,
            contributor: false,
        }
    }
]

