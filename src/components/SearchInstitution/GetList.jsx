import { List, ListItemButton, ListItemText, ListSubheader, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { institutionInfoActions } from '../../store/slices/institutionInfoSlices'

const GetList = ({ result, setSeachText, setShow }) => {
    // const { result } = useSelector(store => store.searchSliceStore)
    const dispatch = useDispatch()
    const onClickItem = ({ elem }) => {
        setSeachText(elem.name)
        setShow(true)
        setTimeout(() => {
            dispatch(institutionInfoActions.setStatus('pending'))
            dispatch(institutionInfoActions.setMarker({
                lat: elem.latitude,
                lng: elem.longitude
            }))
            dispatch(institutionInfoActions.setInstitution(elem))
        }, [500])
    }
    return (
        <Paper sx={{ position: 'absolute', top: '100%', left: '0', right: '0', zIndex: '10000', minHeight: '50px', maxHeight: '300px', overflow: 'auto' }}>
            <List>
                {
                    result.map(elem => {
                        return <ListItemButton key={Math.random().toString()}>
                            <ListItemText primary={elem.name} onClick={() => onClickItem({ elem })} />
                        </ListItemButton>
                    })
                }
            </List>
        </Paper>
    )
}

export default GetList

export const GetListMemoized = React.memo(GetList)