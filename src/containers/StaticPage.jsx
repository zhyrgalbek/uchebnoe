import styled from "styled-components"
import { FilterButton } from "../components/FilterButton"
import all from '../assets/FilterMap/all.svg'
import allblue from '../assets/FilterMap/allblue.svg'
import average from '../assets/FilterMap/average.svg'
import averagewhite from '../assets/FilterMap/averagewhite.svg'
import children from '../assets/FilterMap/childrens.svg'
import childrenswhite from '../assets/FilterMap/childrenswhite.svg'
import general_education from '../assets/FilterMap/general_education.svg'
import general_educationwhite from '../assets/FilterMap/general_educationwhite.svg'
import Group from '../assets/FilterMap/Group.svg'
import Groupwhite from '../assets/FilterMap/Groupwhite.svg'
import higher from '../assets/FilterMap/higher.svg'
import higherwhite from '../assets/FilterMap/higherwhite.svg'
import other from '../assets/FilterMap/other.svg'
import otherwhite from '../assets/FilterMap/otherwhite.svg'
import { Stack } from "@mui/system"
import { MapLeaflet } from "../components/MapLeaflet"
import { Filter } from "../components/Filter"
import { FilterDropdown } from "../components/ui/FilterDropdown"
import { AccordionFilter } from "../components/ui/AccordionFilter"
import { useState } from "react"
import AnalizeCompoent from "../components/AnalizeComponent"
import SchoolComponent from "../components/SchoolComponent"

const data = [
    {
        text: 'Дошкольное образование',
        icon: childrenswhite,
        icon2: children
    },
    {
        text: 'Общеобразовательные',
        icon: general_educationwhite,
        icon2: general_education
    },
    {
        text: 'Начально-профессиональные',
        icon: Groupwhite,
        icon2: Group
    },
    {
        text: 'Средне-профессиональные',
        icon: averagewhite,
        icon2: average
    },
    {
        text: 'Высшее профессиональное',
        icon: higherwhite,
        icon2: higher
    },
    {
        text: 'Другие учреждения',
        icon: otherwhite,
        icon2: other
    },
]

export const StaticPage = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    const onChangeAccordion = () => {
        setAccordionOpen(prev => !prev)
    }
    return <StaticBlock>
        <StaticHeader>
            Статистические данные по учебным заведениям кыргызской республики
        </StaticHeader>
        <MapHeader>Тепловая карта Кыргызстана</MapHeader>
        <MapFilterHeader>Классификация учебных заведений</MapFilterHeader>
        <Mobile>
            <AccordionFilter onClick={onChangeAccordion} header={<FilterButton mobile icon={all} icon2={allblue} toggle active={accordionOpen}>Все учреждения</FilterButton>}>
                <FilterButton mobile icon2={children} icon={childrenswhite}>Дошкольное образование</FilterButton>
                <FilterButton mobile icon2={general_education} icon={general_educationwhite}>Общеобразовательные</FilterButton>
                <FilterButton mobile icon2={Group} icon={Groupwhite}>Начально-профессиональные</FilterButton>
                <FilterButton mobile icon2={average} icon={averagewhite}>Средне-профессиональные</FilterButton>
                <FilterButton mobile icon2={higher} icon={higherwhite}>Высшее профессиональное</FilterButton>
                <FilterButton mobile icon2={other} icon={otherwhite}>Другие учреждения</FilterButton>
            </AccordionFilter>
            {/* <FilterDropdown arr={data} icon={all} icon2={allblue} mobile text="Все учреждения" /> */}
        </Mobile>
        <Desctop>
            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start">
                <FilterButton icon={all} icon2={allblue}>Все учреждения</FilterButton>
                <FilterButton icon2={children} icon={childrenswhite}>Дошкольное образование</FilterButton>
                <FilterButton icon2={general_education} icon={general_educationwhite}>Общеобразовательные</FilterButton>
                <FilterButton icon2={Group} icon={Groupwhite}>Начально-профессиональные</FilterButton>
                <FilterButton icon2={average} icon={averagewhite}>Средне-профессиональные</FilterButton>
                <FilterButton icon2={higher} icon={higherwhite}>Высшее профессиональное</FilterButton>
                <FilterButton icon2={other} icon={otherwhite}>Другие учреждения</FilterButton>
            </Stack>
        </Desctop>
        <Map>
            <MapCont>
                <MapLeaflet />
            </MapCont>
        </Map>
        <Filter />
        <SchoolComponent />
    </StaticBlock>
}

const Desctop = styled('div')`
    display: block;
    @media screen and (max-width: 600px){
        display: none;
    }
`

const Mobile = styled('div')`
    display: none;
    @media screen and (max-width: 600px){
        display: block;
    }
`

const MapCont = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 600px){
        left: -18px;
        right: -18px;
    }
`

const Map = styled('div')`
    /* border: 1px solid red; */
    position: relative;
    /* display: block; */
    width: 100%;
    height: 706px;
    margin: 40px 0;
    @media screen and (max-width: 600px){
        height: 360px;
    }
`

const MapFilterHeader = styled('h4')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 30px;
    @media screen and (max-width: 600px){
        font-size: 16px;
        color: #5A5A5A;
    }
`

const MapHeader = styled('h3')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 40px;
    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`

const StaticHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 130%;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 70px;
    margin-top: 70px;
    @media screen and (max-width: 600px){
        font-size: 22px;
    }
`
const StaticBlock = styled('div')`
    /* border: 1px solid red; */
`