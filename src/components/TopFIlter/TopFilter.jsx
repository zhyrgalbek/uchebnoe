import styled from 'styled-components';
import { FilterButton } from '../FilterButton';
import { AccordionFilter } from '../ui/AccordionFilter';
import { Stack } from "@mui/system";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { requestActions } from '../../store/slices/requestSlices';
import { institutionInfoActions } from '../../store/slices/institutionInfoSlices';
import { getTypes } from '../../store/slices/staticDatasSlices';
import { getInstitutions } from '../../store/slices/institutionsSlices';
import { getRequestFilter } from '../../utils/helpers/helpers';

const buttonText = [
    [
        { name: 'Все', id: 'all', icon: "all" },
        { name: 'Дошкольные', id: '1', icon: "childrens" },
        { name: 'Общеобраз.', id: '2', icon: 'general_education' },
        // { name: 'Начально-проф.', id: '3', icon: 'group' },
        // { name: 'Средне-проф.', id: '4', icon: 'average' },
        // { name: 'Высшее проф.', id: '6', icon: 'higher' },
        { name: 'Другие', id: 'other', icon: 'other' }
    ],
    [
        { name: 'Бардыгы', id: 'all', icon: 'all' },
        { name: 'Мектепке ч-ки', id: '1', icon: 'childrens' },
        { name: 'Жалпы билим б-чү', id: '2', icon: 'general_education' },
        // { name: 'Баштапкы кес-к', id: '3', icon: 'group' },
        // { name: 'Орто кес-к', id: '4', icon: 'average' },
        // { name: 'Жогорку кес-к', id: '6', icon: 'higher' },
        { name: 'Башкалар', id: 'other', icon: 'other' }
    ]
]
// другие 5, 7, 8,9,18,19,20,21,23

export const TopFilter = () => {
    const { translation } = useSelector(store => store.translationStore)
    const { types, areas } = useSelector(store => store.staticDatasStore)
    const { requestFilter, activeFilterType } = useSelector(store => store.requestSlicesStore)
    const { areas2 } = useSelector(store => store.filterAreasStore)

    const [accordionOpen, setAccordionOpen] = useState(false);
    const [filterActive, setFilterActive] = useState(0)
    const [geoPosition, setGeoPosition] = useState('');
    const [one, setOne] = useState(false)
    const dispatch = useDispatch()
    const onChangeAccordion = () => {
        setAccordionOpen(prev => !prev)
    }
    // console.log(requestFilter)
    useEffect(() => {
        if (activeFilterType === 'type') {
            setFilterActive(prev => {
                const id = requestFilter.find(elem => elem.type === 'type');
                if (id === '') {
                    return buttonText[translation].findIndex(elem => elem.id === 'all');
                }
                const idx = buttonText[translation].findIndex(elem => elem.id === id.value);
                if (idx === -1) {
                    return buttonText[translation].findIndex(elem => elem.id === 'other');
                }
                return idx;
            })
        }
    }, [requestFilter[3]])

    useEffect(() => {
        if (!one) {
            setOne(true);
            return;
        }
        const arr = areas2.length !== 0 ? areas2 : areas;
        dispatch(getInstitutions(getRequestFilter(requestFilter, arr, activeFilterType)))
    }, [requestFilter[requestFilter.length - 1]])
    const onClickBtn = (e, index, id) => {
        e.preventDefault();
        if (filterActive === index) {
            return;
        }
        setFilterActive(index);
        dispatch(requestActions.setRequestFilter({ type: 'typeId', value: id, text: '' }));
        dispatch(requestActions.setActiveFilterType('typeId'));
        dispatch(institutionInfoActions.setMarker(false));
    }

    useEffect(() => {
        dispatch(getTypes())
        const arr = areas2.length !== 0 ? areas2 : areas;
        dispatch(getInstitutions(getRequestFilter(requestFilter, arr, activeFilterType)))
        // dispatch(getInstitutions('all'))
        // dispatch(getFilterInstitutions(requestFilter, areas))
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