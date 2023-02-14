import { Paper } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

export default function MapSnackbar() {
    return (
        <MapSnackbar>
            <Paper sx={{ padding: '10px' }}>
                <Stack direction="row" alignItems="center">
                    <Img src={point} alt="#" />
                    <Text>
                        Цвета иконок меняются в зависимости от заполненности
                    </Text>
                    <Img src={krestik} alt="#" krestik />
                </Stack>
            </Paper>
        </MapSnackbar>
    )
}

const Text = styled('p')`
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
`
const Img = styled('img')`
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 10px;
    ${props => props.krestik && css`
        margin: 0;
    `}
`
const MapSnackbar = styled('div')`
    position: absolute;
    top: 20px;
    right: 10px;
    background: #fff;
    border-radius: 6px;
    z-index: 1000;
    font-size: 0.75rem;
    width: 320px;
`