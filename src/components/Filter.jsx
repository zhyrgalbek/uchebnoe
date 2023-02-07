import { Stack } from "@mui/system"
import { Box } from "@mui/material"
import styled, { css } from "styled-components"
import { FilterSubmit } from "./FilerSubmit"
import { FilterDropdown } from "./ui/FilterDropdown"
import search from '../assets/Filter/search.svg'
import open from '../assets/Filter/open.svg'
import { useState } from "react"
import { AccordionFilter } from "./ui/AccordionFilter"
import states from '../utils/Constants/json/states2.json'
const oblast = ["Нарынская", "Чуйская", "Ыссык-Кульская", "Таласская", "Джалал-Абадская", "Ошская", "Баткенская", "г.Бишкек", "г.Ош"];
const rayons = []
export const Filter = ({ header }) => {
    const [openState, setOpenState] = useState(false);
    const onChangeFilter = () => {
        setOpenState(prev => !prev)
    }
    const colorChoise = [
        <Item><SpanColor color="#6A8AFF" />Все уровни</Item>,
        <Item><SpanColor color="#51FF00" />до 20% - много свободных мест</Item>,
        <Item><SpanColor color="#A9FF00" />до 40% - достаточно мест</Item>,
        <Item><SpanColor color="#FFF800" />до 60% - заполнен наполовину</Item>,
        <Item><SpanColor color="#FFCD02" />до 80% - места ограничены</Item>,
        <Item><SpanColor color="#FF0600" />до 100% - почти заполнен</Item>,
    ]
    return <FilterContainer>
        <FilterHeader header={header}>Фильтр для точечного поиска учреждения</FilterHeader>
        <Mobile header={header}>
            <AccordionFilter onClick={onChangeFilter} header={<FilterSubmit icon={open} active={openState}>{!openState ? 'Открыть фильтр' : 'Закрыть фильтр'}</FilterSubmit>}>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header="Область" text="Выберите область" />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header="Регион, район" text="Выберите район" />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header="Административный округ (аймак)" text="Выберите округ" />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header="Тип учреждения" text="Выберите тип" />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header="Вид учреждения" text="Выберите вид учреждения" />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header="Цветовая шкала заполненности" text={colorChoise[0]} items={colorChoise} />
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <FilterDropdown header="Класс, курс (в зависимости от учреждения)" text="Государственный" />
                </Box>
                <Box sx={{ padding: '0 20px', paddingBottom: '20px' }}>
                    <FilterSubmit icon={search}>Найти</FilterSubmit>
                </Box>
            </AccordionFilter>
        </Mobile>
        <Desctop header={header}>
            <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" flexWrap="wrap">
                <FilterDropdown header="Область" text="Выберите область" items={oblast} />
                <FilterDropdown header="Регион, район" text="Выберите район" />
                <FilterDropdown header="Административный округ (аймак)" text="Выберите округ" />
                <FilterDropdown header="Тип учреждения" text="Выберите тип" />
                <FilterDropdown header="Вид учреждения" text="Выберите вид учреждения" />
                <FilterDropdown header="Цветовая шкала заполненности" text={colorChoise[0]} items={colorChoise} />
                <FilterDropdown header="Класс, курс (в зависимости от учреждения)" text="Государственный" />
            </Stack>
            <FilterSubmit icon={search}>Найти</FilterSubmit>
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
    font-size: 20px;
    line-height: 130%;
    color: #000;
    margin-bottom: 53px;
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
    margin-bottom: 69px;
`