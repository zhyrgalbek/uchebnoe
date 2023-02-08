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
    const [filterActive, setFilterActive] = useState(0)
    const onChangeAccordion = () => {
        setAccordionOpen(prev => !prev)
    }
    const onClickBtn = (e, id) => {
        e.preventDefault();
        setFilterActive(id)
    }
    return <>
        <Mobile>
            <AccordionFilter onClick={onChangeAccordion} header={<FilterButton mobile icon={all} icon2={allblue} toggle active={accordionOpen} primary={filterActive === 0} onClick={(e) => onClickBtn(e, 0)}>Все учреждения</FilterButton>}>
                <FilterButton mobile icon2={children} icon={childrenswhite} primary={filterActive === 1} onClick={(e) => onClickBtn(e, 1)}>Дошкольное образование</FilterButton>
                <FilterButton mobile icon2={general_education} icon={general_educationwhite} primary={filterActive === 2} onClick={(e) => onClickBtn(e, 2)}>Общеобразовательные</FilterButton>
                <FilterButton mobile icon2={Group} icon={Groupwhite} primary={filterActive === 3} onClick={(e) => onClickBtn(e, 3)}>Начально-профессиональные</FilterButton>
                <FilterButton mobile icon2={average} icon={averagewhite} primary={filterActive === 4} onClick={(e) => onClickBtn(e, 4)}>Средне-профессиональные</FilterButton>
                <FilterButton mobile icon2={higher} icon={higherwhite} primary={filterActive === 5} onClick={(e) => onClickBtn(e, 5)}>Высшее профессиональное</FilterButton>
                <FilterButton mobile icon2={other} icon={otherwhite} primary={filterActive === 6} onClick={(e) => onClickBtn(e, 6)}>Другие учреждения</FilterButton>
            </AccordionFilter>
            {/* <FilterDropdown arr={data} icon={all} icon2={allblue} mobile text="Все учреждения" /> */}
        </Mobile>
        <Desctop>
            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start">
                <FilterButton icon={all} icon2={allblue} onClick={(e) => onClickBtn(e, 0)} primary={filterActive === 0}>Все учреждения</FilterButton>
                <FilterButton icon2={children} icon={childrenswhite} onClick={(e) => onClickBtn(e, 1)} primary={filterActive === 1}>Дошкольное образование</FilterButton>
                <FilterButton icon2={general_education} icon={general_educationwhite} onClick={(e) => onClickBtn(e, 2)} primary={filterActive === 2}>Общеобразовательные</FilterButton>
                <FilterButton icon2={Group} icon={Groupwhite} onClick={(e) => onClickBtn(e, 3)} primary={filterActive === 3}>Начально-профессиональные</FilterButton>
                <FilterButton icon2={average} icon={averagewhite} onClick={(e) => onClickBtn(e, 4)} primary={filterActive === 4}>Средне-профессиональные</FilterButton>
                <FilterButton icon2={higher} icon={higherwhite} onClick={(e) => onClickBtn(e, 5)} primary={filterActive === 5}>Высшее профессиональное</FilterButton>
                <FilterButton icon2={other} icon={otherwhite} onClick={(e) => onClickBtn(e, 6)} primary={filterActive === 6}>Другие учреждения</FilterButton>
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