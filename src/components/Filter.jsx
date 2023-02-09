import { Stack } from "@mui/system"
import { Box } from "@mui/material"
import styled, { css } from "styled-components"
import { FilterSubmit } from "./FilerSubmit"
import { FilterDropdown } from "./ui/FilterDropdown"
import search from '../assets/Filter/search.svg'
import open from '../assets/Filter/open.svg'
import { useState } from "react"
import { AccordionFilter } from "./ui/AccordionFilter"
import { useSelector } from "react-redux";
import states from '../utils/Constants/json/states2.json'
const oblast = ["Нарынская", "Чуйская", "Ыссык-Кульская", "Таласская", "Джалал-Абадская", "Ошская", "Баткенская", "г.Бишкек", "г.Ош"];
const rayons = []
const filterText = [
    {
        header: 'Фильтр для точечного поиска учреждения',
        btns: [
            {
                btn_header: 'Область',
                btn_text: 'Выберите область'
            },
            {
                btn_header: 'Регион, район',
                btn_text: 'Выберите район'
            },
            {
                btn_header: 'Административный округ (аймак)',
                btn_text: 'Выберите округ'
            },
            {
                btn_header: 'Тип учреждения',
                btn_text: 'Выберите тип'
            },
            {
                btn_header: 'Вид учреждения',
                btn_text: 'Выберите вид учреждения'
            },
            {
                btn_header: 'Цветовая шкала заполненности',
                btn_text: 'Все уровни'
            },
            {
                btn_header: 'Класс, курс (в зависимости от учреждения)',
                btn_text: 'Государственный'
            },
            {
                btn_header: '',
                btn_text: 'Найти'
            },
            {
                btn_header: 'Открыть фильтр',
                btn_text: 'Закрыть фильтр'
            },
        ]
    },
    {
        header: 'Мекемени издөө үчүн чыпкалоо',
        btns: [
            {
                btn_header: 'Облус',
                btn_text: 'Облусту тандаңыз'
            },
            {
                btn_header: 'Регион, район',
                btn_text: 'Районду танданыз'
            },
            {
                btn_header: 'Административдик аймак',
                btn_text: 'Аймакты танданыз'
            },
            {
                btn_header: 'Мекеме түрү',
                btn_text: 'Түрү тандоо'
            },
            {
                btn_header: 'Мекеменин түрү',
                btn_text: 'Мекеменин түрүн тандаңыз'
            },
            {
                btn_header: 'Түс масштабын толтуруңуз',
                btn_text: 'Бардык деңгээлдер'
            },
            {
                btn_header: 'Класс, курс (мекемеге жараша)',
                btn_text: 'Мамлекеттик'
            },
            {
                btn_header: '',
                btn_text: 'Издөө'
            },
            {
                btn_header: 'Чыпканы ачуу',
                btn_text: 'Чыпканы жабуу'
            },
        ]
    }
]

const colorText = [
    ['до 20% - много свободных мест', 'до 40% - достаточно мест', 'до 60% - заполнен наполовину', 'до 80% - места ограничены', 'до 100% - почти заполнен'],
    ['20% чейин - көптөгөн бош орундар', '40% чейин - жетиштүү орундар', '60% чейин - жарымы толтурулган', '80% чейин - орундар чектелген', '100% чейин - дээрлик толук']
]



export const Filter = ({ header }) => {
    const { translation } = useSelector(store => store.translate)
    const [openState, setOpenState] = useState(false);
    const onChangeFilter = () => {
        setOpenState(prev => !prev)
    }
    const colorChoise = [
        <Item><SpanColor color="#6A8AFF" />{filterText[translation].btns[5].btn_text}</Item>,
        <Item><SpanColor color="#51FF00" />{colorText[translation][0]}</Item>,
        <Item><SpanColor color="#A9FF00" />{colorText[translation][1]}</Item>,
        <Item><SpanColor color="#FFF800" />{colorText[translation][2]}</Item>,
        <Item><SpanColor color="#FFCD02" />{colorText[translation][3]}</Item>,
        <Item><SpanColor color="#FF0600" />{colorText[translation][4]}</Item>,
    ]
    return <FilterContainer>
        <FilterHeader className="font__contacts_data" header={header}>{filterText[translation].header}</FilterHeader>
        <Mobile header={header}>
            <AccordionFilter onClick={onChangeFilter} header={<FilterSubmit icon={open} active={openState}>{!openState ? filterText[translation].btns[8].btn_header : filterText[translation].btns[8].btn_text}</FilterSubmit>}>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header={filterText[translation].btns[0].btn_header} text={filterText[translation].btns[0].btn_text} />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header={filterText[translation].btns[1].btn_header} text={filterText[translation].btns[1].btn_text} />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header={filterText[translation].btns[2].btn_header} text={filterText[translation].btns[2].btn_text} />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header={filterText[translation].btns[3].btn_header} text={filterText[translation].btns[3].btn_text} />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header={filterText[translation].btns[4].btn_header} text={filterText[translation].btns[4].btn_text} />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header={filterText[translation].btns[5].btn_header} text={colorChoise[0]} items={colorChoise} />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header={filterText[translation].btns[6].btn_header} text={filterText[translation].btns[6].btn_text} />
                </Box>
                <Box sx={{ padding: '0 20px', paddingBottom: '20px' }}>
                    <FilterSubmit icon={search}>{filterText[translation].btns[7].btn_text}</FilterSubmit>
                </Box>
            </AccordionFilter>
        </Mobile>
        <Desctop header={header}>
            <AccordionFilter onClick={onChangeFilter} none header={<FilterSubmit variant="" icon={open} active={openState}>{!openState ? filterText[translation].btns[8].btn_header : filterText[translation].btns[8].btn_text}</FilterSubmit>}>
                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" flexWrap="wrap">
                    <FilterDropdown header={filterText[translation].btns[0].btn_header} text={filterText[translation].btns[0].btn_text} items={oblast} />
                    <FilterDropdown header={filterText[translation].btns[1].btn_header} text={filterText[translation].btns[1].btn_text} />
                    <FilterDropdown header={filterText[translation].btns[2].btn_header} text={filterText[translation].btns[2].btn_text} />
                    <FilterDropdown header={filterText[translation].btns[3].btn_header} text={filterText[translation].btns[3].btn_text} />
                    <FilterDropdown header={filterText[translation].btns[4].btn_header} text={filterText[translation].btns[4].btn_text} />
                    <FilterDropdown header={filterText[translation].btns[5].btn_header} text={colorChoise[0]} items={colorChoise} />
                    <FilterDropdown header={filterText[translation].btns[6].btn_header} text={filterText[translation].btns[6].btn_text} />
                </Stack>
                <FilterSubmit icon={search}>{filterText[translation].btns[7].btn_text}</FilterSubmit>
            </AccordionFilter>
        </Desctop>
    </FilterContainer>
}

const SpanColor = styled('span')`
    display: inline-block;
    background: ${props => props.color};
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const Item = styled('div')`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Desctop = styled('div')`
    display: block;
    @media screen and (max-width: 780px){
        display: none;
    }
    ${props => props.header && css`
        @media screen and (max-width: 780px){
            display: block;
        }
    `}
`

const Mobile = styled('div')`
    display: none;
    @media screen and (max-width: 780px){
        display: block;
    }
    ${props => props.header && css`
        @media screen and (max-width: 780px){
            display: none;
        }
    `}
`

const FilterHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 130%;
    color: #000;
    margin-bottom: 20px;
    @media screen and (max-width: 780px){
        display: none;
    }
    ${props => props.header && css`
        @media screen and (max-width: 780px){
            display: block;
            font-size: 16px;
            margin-bottom: 15px;
        }
   `}
`

const FilterContainer = styled('div')`
    /* border: 1px solid red; */
    margin-bottom: 40px;
`