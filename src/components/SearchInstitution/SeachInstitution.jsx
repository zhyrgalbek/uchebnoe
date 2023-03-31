import { IconButton, InputBase, List, ListItemButton, ListItemText, Paper, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { GetListMemoized } from './GetList'
import search from '../../assets/Filter/search.svg'
import { searchSlicesActions, setResuktAsync } from '../../store/slices/searchSlices'

const TextSeach = [
    [
        {
            text: 'Поиск учебных заведений по названию'
        }
    ],
    [
        {
            text: 'Окуу жайларын аталышы боюнча издөө'
        }
    ]
]

const SeachInstitution = () => {
    const { institutions } = useSelector(store => store.institutionsStore)
    const { translation } = useSelector(store => store.translationStore)
    // const { result } = useSelector(store => store.searchSliceStore)
    const [result, setResult] = useState([]);
    const [seachText, setSeachText] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        if (show) {
            setResult([])
        }
    }, [show])
    useEffect(() => {
        let k = setTimeout(() => {
            if (!show) {
                setResult(prev => {
                    let s = 0;
                    return institutions.filter((elem, index) => {
                        if (s <= 50) {
                            if (seachText === '') {
                                return;
                            }
                            if (elem.name.toLowerCase().trim().replace(/[^a-zа-яё0-9\s]/gi, "").indexOf(seachText.toLowerCase().trim().replace(/[^a-zа-яё0-9\s]/gi, "")) !== -1) {
                                s++;
                                return { name: elem.name, id: elem.id }
                            }
                        }
                    });
                })
            }
        }, [1000])
        return () => {
            return clearTimeout(k)
        }
    }, [seachText])
    const moveKey = (e) => {
        // let pressKey = e.key;
        // if (pressKey === 'ArrowDown') {
        //     // i++;
        //     // if (i > max) {
        //     //     i = 0;
        //     // }
        //     // ul.childNodes[i].classList.add('activeINK');
        //     // input.value = ul.childNodes[i].innerText;
        // }
        // if (pressKey === 'ArrowUp') {
        //     // i--;
        //     // if (i < 0) {
        //     //     i = max;
        //     // }
        //     // ul.childNodes[i].classList.add('activeINK');
        //     // input.value = ul.childNodes[i].innerText;
        // }
    }
    const onChangeSeach = (e) => {
        let text = e.target.value;
        setSeachText(text)
        setShow(false)
    }
    return (
        <Stack sx={{ p: '8', position: 'relative' }} flexGrow={1}>
            {/* <Paper sx={{ display: 'flex' }}> */}
            {/* <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Поиск учебных заведений по названию"
                    inputProps={{ 'aria-label': 'search google maps' }}
                /> */}
            <TextField
                id="outlined-controlled"
                label={TextSeach[translation][0].text}
                sx={{ "& input": { padding: '10px' }, "& label": { top: '-5px' } }}
                value={seachText}
                onChange={onChangeSeach}
                autoComplete="off"
                onKeyUp={moveKey}
            // variant="standard"
            />
            <IconButton type="button" sx={{ p: '10px', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} aria-label="search">
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z" stroke="rgba(0, 0, 0, 0.23)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.4999 21L17.1499 16.65" stroke="rgba(0, 0, 0, 0.23)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </IconButton>
            {
                result.length !== 0 && <GetListMemoized setSeachText={setSeachText} result={result} setShow={setShow} />
            }
        </Stack>
    )
}

export default SeachInstitution

const SeachContainer = styled('div')`
    border: 1px solid red;
`