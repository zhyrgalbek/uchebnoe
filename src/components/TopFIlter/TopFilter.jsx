import styled from 'styled-components';
import { FilterButton } from '../FilterButton';
import { AccordionFilter } from '../ui/AccordionFilter';
import { Stack } from "@mui/system";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFilterInstitutions, getInstitutions, getTypes, mapActions } from '../../store/slices/mapSlices';
import { getIcons } from './getIcons';
import { getIcon } from '../MapLeaflet/markers/getIcon';

const buttonText = [
    [
        { name: 'Все', id: 'all', icon: "all" },
        { name: 'Дошкольные', id: '1', icon: "childrens" },
        { name: 'Общеобраз.', id: '2', icon: 'general_education' },
        { name: 'Начально-проф.', id: '3', icon: 'group' },
        { name: 'Средне-проф.', id: '4', icon: 'average' },
        { name: 'Высшее проф.', id: '6', icon: 'higher' },
        { name: 'Другие', id: 'other', icon: 'other' }
    ],
    [
        { name: 'Бардыгы', id: 'all', icon: 'all' },
        { name: 'Мектепке ч-ки', id: '1', icon: 'childrens' },
        { name: 'Жалпы билим б-чү', id: '2', icon: 'general_education' },
        { name: 'Баштапкы кес-к', id: '3', icon: 'group' },
        { name: 'Орто кес-к', id: '4', icon: 'average' },
        { name: 'Жогорку кес-к', id: '6', icon: 'higher' },
        { name: 'Башкалар', id: 'other', icon: 'other' }
    ]
]
// другие 5, 7, 8,9,18,19,20,21,23

export const TopFilter = () => {
    const { translation, types, requestFilter, areas } = useSelector(store => store.translate)
    const [accordionOpen, setAccordionOpen] = useState(false);
    const [filterActive, setFilterActive] = useState(0)
    const [one, setOne] = useState(false);
    const dispatch = useDispatch()
    // console.log(types)
    const onChangeAccordion = () => {
        setAccordionOpen(prev => !prev)
    }
    // console.log(types)
    useEffect(() => {
        if (!one) {
            setOne(true);
            return;
        }
        // console.log(requestFilter[requestFilter.length - 1])
        dispatch(getFilterInstitutions(requestFilter, areas));
    }, [requestFilter[requestFilter.length - 1]])
    const onClickBtn = (e, index, id) => {
        e.preventDefault();
        setFilterActive(index);
        dispatch(mapActions.setRequestFilter({ type: 'typeId', value: id, text: '' }));
        dispatch(mapActions.setMarker(false));
    }
    useEffect(() => {
        dispatch(getTypes())
        dispatch(getInstitutions('all'))
    }, [])
    return <>
        <Mobile>
            <AccordionFilter topFilter onClick={onChangeAccordion} header={<FilterButton mobile icon={buttonText[translation][0].icon} toggle active={accordionOpen} primary={filterActive === 0} onClick={(e) => onClickBtn(e, 0)}>{buttonText[translation][0].name}</FilterButton>}>
                {
                    buttonText[translation].map((elem, index) => {
                        if (index === 0) {
                            return '';
                        }
                        return <FilterButton key={elem.id} mobile icon={elem.icon} primary={filterActive === index} onClick={(e) => onClickBtn(e, index, elem.id)}>{elem.name}</FilterButton>
                    })
                }
            </AccordionFilter>
        </Mobile>
        <Desctop>
            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start">
                {
                    buttonText[translation].map((elem, index) => {
                        return <FilterButton key={elem.id} icon={elem.icon} onClick={(e) => onClickBtn(e, index, elem.id)} primary={filterActive === index}>{elem.name}</FilterButton>
                    })
                }
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