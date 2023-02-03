import styled from 'styled-components';
import { FilterButton } from './FilterButton';
import { AccordionFilter } from './ui/AccordionFilter';
import { Stack } from "@mui/system"
import { useState } from 'react'
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


export const TopFilter = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    const onChangeAccordion = () => {
        setAccordionOpen(prev => !prev)
    }
    return <>
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
    </>
}

const Desctop = styled('div')`
    display: block;
    @media screen and (max-width: 780px){
        display: none;
    }
`

const Mobile = styled('div')`
    display: none;
    @media screen and (max-width: 780px){
        display: block;
    }
`