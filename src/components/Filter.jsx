import { Stack } from "@mui/system"
import { Box } from "@mui/material"
import styled, { css } from "styled-components"
import { FilterSubmit } from "./FilerSubmit"
import { FilterDropdown } from "./ui/FilterDropdown"
import search from '../assets/Filter/search.svg'
import open from '../assets/Filter/open.svg'
import clean from '../assets/Filter/filter-slash.svg'
import { useState } from "react"
import { AccordionFilter } from "./ui/AccordionFilter"
import { useDispatch, useSelector } from "react-redux";
import states from '../utils/Constants/json/states2.json'
import { useEffect } from "react"
import { getAreas, getFilter, getFilterInstitutions, getSectors, getViews } from "../store/slices/mapSlices"
const oblast = ["Нарынская", "Чуйская", "Ыссык-Кульская", "Таласская", "Джалал-Абадская", "Ошская", "Баткенская", "г.Бишкек", "г.Ош"];
const rayons = []

const colorText = [
    ['до 20% - много свободных мест', 'до 40% - достаточно мест', 'до 60% - заполнен наполовину', 'до 80% - места ограничены', 'до 100% - почти заполнен'],
    ['20% чейин - көптөгөн бош орундар', '40% чейин - жетиштүү орундар', '60% чейин - жарымы толтурулган', '80% чейин - орундар чектелген', '100% чейин - дээрлик толук']
]

export const Filter = ({ header }) => {
    const { translation, areas, regions, county, types, view, sectors } = useSelector(store => store.translate);
    // console.log(types)
    // console.log(view)
    // console.log(regions)
    // console.log()
    const [openState, setOpenState] = useState(false);
    const [filterValue, setFilterValue] = useState([
        {
            type: 'region',
            value: '',
        },
        {
            type: 'areas',
            value: '',
        },
        {
            type: 'county',
            value: '',
        },
        {
            type: 'type',
            value: ''
        },
        {
            type: 'view',
            value: ''
        },
        {
            type: 'capacity',
            value: ''
        },
        {
            type: 'sector',
            value: ''
        }
    ]);
    console.log(filterValue)
    const onClickSeach = () => {
        const obj = {};
        filterValue.forEach(elem => {
            obj[elem.type] = elem.value;
        });
        console.log(obj)
        dispatch(getFilterInstitutions(obj))
    }
    const onChangeValue = (type, value) => {
        let idx = 0;
        setFilterValue(prev => {
            return prev.map((elem, index) => {
                if (elem.type === type) {
                    idx = index;
                    return { ...elem, value: value };
                }
                if (index > idx) {
                    return { ...elem, value: '' }
                }
                return elem;
            })
        });
    }
    useEffect(() => {
        dispatch(getFilter({ searchValues: filterValue }))
    }, [filterValue])
    const [filterText, setFilterText] = useState([
        {
            header: 'Фильтр для точечного поиска учреждения',
            btns: [
                {
                    type: 'region',
                    btn_header: 'Область',
                    btn_text: 'Выберите область',
                    btn_text2: 'Выберите область',
                    // items: regions
                },
                {
                    type: 'areas',
                    btn_header: 'Регион, район',
                    btn_text: 'Выберите район',
                    btn_text2: 'Выберите район',
                    // items: areas
                },
                {
                    type: 'county',
                    btn_header: 'Административный округ (аймак)',
                    btn_text: 'Выберите округ',
                    btn_text2: 'Выберите округ',
                    // items: county
                },
                {
                    type: 'type',
                    btn_header: 'Вид учреждения',
                    btn_text: 'Выберите тип',
                    btn_text2: 'Выберите тип'
                },
                {
                    type: 'view',
                    btn_header: 'Вид учреждения',
                    btn_text: 'Выберите вид учреждения',
                    btn_text2: 'Выберите вид учреждения'
                },
                {
                    type: 'capacity',
                    btn_header: 'Цветовая шкала заполненности',
                    btn_text: 'Все уровни',
                    btn_text2: 'Все уровни',
                    items: []
                },
                {
                    type: 'sector',
                    btn_header: 'форма собственности',
                    btn_text: 'Выберите форму',
                    btn_text2: 'Выберите форму',
                    // items: ['Государственная', 'Муниципиальная', "Частная", "Смешанная форма собственности"]
                },
                {
                    btn_header: 'Класс, курс (в зависимости от учреждения)',
                    btn_text: 'Государственный',
                    btn_text2: 'Государственный'
                },
                {
                    btn_header: '',
                    btn_text: 'Найти',
                    btn_text2: 'Найти'
                },
                {
                    btn_header: 'Открыть фильтр',
                    btn_text: 'Закрыть фильтр',
                    btn_text2: 'Закрыть фильтр'
                },
                {
                    btn_header: '',
                    btn_text: 'Очистить фильтр',
                    btn_text2: 'Очистить фильтр'
                },
            ]
        },
        {
            header: 'Мекемени издөө үчүн чыпкалоо',
            btns: [
                {
                    type: 'region',
                    btn_header: 'Облус',
                    btn_text: 'Облусту тандаңыз',
                    btn_text2: 'Облусту тандаңыз',
                    // items: regions
                },
                {
                    type: 'areas',
                    btn_header: 'Регион, район',
                    btn_text: 'Районду танданыз',
                    btn_text2: 'Районду танданыз',
                    // items: areas
                },
                {
                    type: 'county',
                    btn_header: 'Административдик аймак',
                    btn_text: 'Аймакты танданыз',
                    btn_text2: 'Аймакты танданыз',
                    // items: county
                },
                {
                    type: 'type',
                    btn_header: 'Мекеме түрү',
                    btn_text: 'Түрү тандоо',
                    btn_text2: 'Түрү тандоо'
                },
                {
                    type: 'view',
                    btn_header: 'Мекеменин түрү',
                    btn_text: 'Мекеменин түрүн тандаңыз',
                    btn_text2: 'Мекеменин түрүн тандаңыз'
                },
                {
                    type: 'capacity',
                    btn_header: 'Түс масштабын толтуруңуз',
                    btn_text: 'Бардык деңгээлдер',
                    btn_text2: 'Бардык деңгээлдер',
                    items: []
                },
                {
                    type: 'sector',
                    btn_header: 'форма собственности',
                    btn_text: 'Форманы танданыз',
                    btn_text2: 'Форманы танданыз',
                    // items: ['Государственная', 'Муниципиальная', "Частная", "Смешанная форма собственности"]
                },
                {
                    btn_header: 'Класс, курс (мекемеге жараша)',
                    btn_text: 'Мамлекеттик',
                    btn_text2: 'Мамлекеттик'
                },
                {
                    btn_header: '',
                    btn_text: 'Издөө',
                    btn_text2: 'Издөө'
                },
                {
                    btn_header: 'Чыпканы ачуу',
                    btn_text: 'Чыпканы жабуу',
                    btn_text2: 'Чыпканы жабуу'
                },
                {
                    btn_header: '',
                    btn_text: 'Чыпканы тазалоо',
                    btn_text2: 'Чыпканы тазалоо'
                },
            ]
        }
    ]);

    const onChangeFilterText = ({ type, text, value }) => {
        setFilterText(prev => {
            return prev.map(elem => {
                return {
                    ...elem, btns: elem.btns.map((el, index) => {
                        if (el.type === type) {
                            return { ...el, btn_text: text };
                        }
                        return el;
                    })
                }
            })
        })
        onChangeValue(type, value);
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAreas());
        dispatch(getViews());
        dispatch(getSectors());
    }, [])
    const onChangeFilter = () => {
        setOpenState(prev => !prev);
    };

    useEffect(() => {
        const colorChoise = [
            <Item><SpanColor color="#6A8AFF" />{filterText[translation].btns[5].btn_text}</Item>,
            <Item><SpanColor color="#51FF00" />{colorText[translation][0]}</Item>,
            <Item><SpanColor color="#A9FF00" />{colorText[translation][1]}</Item>,
            <Item><SpanColor color="#FFF800" />{colorText[translation][2]}</Item>,
            <Item><SpanColor color="#FFCD02" />{colorText[translation][3]}</Item>,
            <Item><SpanColor color="#FF0600" />{colorText[translation][4]}</Item>,
        ];
        setFilterText(prev => {
            return prev.map(elem => {
                return {
                    ...elem, btns: elem.btns.map((el, index) => {
                        if (index === 5) {
                            return { ...el, items: colorChoise }
                        }
                        return el
                    })
                }

            })
        })
    }, [translation]);
    return <FilterContainer>
        <FilterHeader className="font__contacts_data" header={header}>{filterText[translation].header}</FilterHeader>
        <Mobile header={header}>
            <AccordionFilter onClick={onChangeFilter} none header={<FilterSubmit iconLeft={open} active={openState}>{!openState ? filterText[translation].btns[9].btn_header : filterText[translation].btns[9].btn_text}</FilterSubmit>}>
                {
                    filterText[translation].btns.map((elem, index) => {
                        if (index > 6) {
                            return
                        }
                        return <Box >
                            <FilterDropdown key={Math.random().toLocaleString()} header={elem.btn_header} text={elem.btn_text} items={elem.items && elem.items} />
                        </Box>
                    })
                }
                <Box>
                    <FilterSubmit iconLeft={search}>{filterText[translation].btns[8].btn_text}</FilterSubmit>
                </Box>
            </AccordionFilter>
        </Mobile>
        <Desctop header={header}>
            {/* <AccordionFilter onClick={onChangeFilter} none header={<FilterSubmit icon={open} active={openState}>{!openState ? filterText[translation].btns[9].btn_header : filterText[translation].btns[9].btn_text}</FilterSubmit>}> */}
            <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" flexWrap="wrap">
                <FilterDropdown onClick={onChangeFilterText} type={filterText[translation].btns[0].type} header={filterText[translation].btns[0].btn_header} text={filterText[translation].btns[0].btn_text} items={regions} />
                <FilterDropdown onClick={onChangeFilterText} type={filterText[translation].btns[1].type} header={filterText[translation].btns[1].btn_header} text={filterText[translation].btns[1].btn_text} items={areas} />
                <FilterDropdown onClick={onChangeFilterText} type={filterText[translation].btns[2].type} header={filterText[translation].btns[2].btn_header} text={filterText[translation].btns[2].btn_text} items={county} />
                <FilterDropdown onClick={onChangeFilterText} type={filterText[translation].btns[3].type} header={filterText[translation].btns[3].btn_header} text={filterText[translation].btns[3].btn_text} items={types} />
                <FilterDropdown onClick={onChangeFilterText} type={filterText[translation].btns[4].type} header={filterText[translation].btns[4].btn_header} text={filterText[translation].btns[4].btn_text} items={view} />
                {/* <FilterDropdown onClick={onChangeFilterText} type={filterText[translation].btns[5].type} header={filterText[translation].btns[5].btn_header} text={filterText[translation].btns[5].btn_text} items={filterText[translation].btns[5].items} /> */}
                <FilterDropdown onClick={onChangeFilterText} type={filterText[translation].btns[6].type} header={filterText[translation].btns[6].btn_header} text={filterText[translation].btns[6].btn_text} items={sectors} />
                {/* <FilterDropdown onClick={onChangeFilterText} type={elem.type} header={elem.btn_header} text={elem.btn_text} items={elem?.items} /> */}
            </Stack>
            <Stack direction="row" spacing={3}>
                <FilterSubmit iconLeft={search} onClick={onClickSeach}>{filterText[translation].btns[8].btn_text}</FilterSubmit>
                <FilterSubmit iconLeft={clean}>{filterText[translation].btns[10].btn_text}</FilterSubmit>
            </Stack>
            {/* </AccordionFilter> */}
        </Desctop>
    </FilterContainer>
}

const SpanColor = styled('span')`
    display: inline-block;
    background: ${props => props.color};
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 10px;
`

const Item = styled('div')`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.875rem;
    line-height: 140%;
    /* border: 1px solid red; */
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
    font-size: 1.125rem;
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