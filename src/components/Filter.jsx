import { Stack } from "@mui/system"
import styled from "styled-components"
import { FilterSubmit } from "./FilerSubmit"
import { FilterDropdown } from "./ui/FilterDropdown"
import search from '../assets/Filter/search.svg'
import open from '../assets/Filter/open.svg'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

export const Filter = () => {
    return <FilterContainer>
        <FilterHeader>Фильтр для точечного поиска учреждения</FilterHeader>
        <Mobile>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Open icon={open}>Открыть фильтр</Open>
                </AccordionSummary>
                <AccordionDetails>
                    <FilterDropdown header="Область" text="Выберите область" />
                    <FilterDropdown header="Регион, район" text="Выберите район" />
                    <FilterDropdown header="Административный округ (аймак)" text="Выберите округ" />
                    <FilterDropdown header="Тип учреждения" text="Выберите тип" />
                    <FilterDropdown header="Вид учреждения" text="Выберите вид учреждения" />
                    <FilterDropdown header="Цветовая шкала заполненности" text="Все уровни" />
                    <FilterDropdown header="Класс, курс (в зависимости от учреждения)" text="Государственный" />
                    <FilterSubmit icon={search}>Найти</FilterSubmit>
                </AccordionDetails>
            </Accordion>
        </Mobile>
        <Desctop>
            <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" flexWrap="wrap">
                <FilterDropdown header="Область" text="Выберите область" />
                <FilterDropdown header="Регион, район" text="Выберите район" />
                <FilterDropdown header="Административный округ (аймак)" text="Выберите округ" />
                <FilterDropdown header="Тип учреждения" text="Выберите тип" />
                <FilterDropdown header="Вид учреждения" text="Выберите вид учреждения" />
                <FilterDropdown header="Цветовая шкала заполненности" text="Все уровни" />
                <FilterDropdown header="Класс, курс (в зависимости от учреждения)" text="Государственный" />
            </Stack>
            <FilterSubmit icon={search}>Найти</FilterSubmit>
        </Desctop>
    </FilterContainer>
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
const Open = styled(FilterSubmit)`
   cursor: pointer;
`

const FilterHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    color: #000;
    margin-bottom: 53px;
    @media screen and (max-width: 600px){
        display: none;
    }
`

const FilterContainer = styled('div')`
    /* border: 1px solid red; */
    margin-bottom: 69px;
`