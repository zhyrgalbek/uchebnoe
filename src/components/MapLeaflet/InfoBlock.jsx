import { Paper } from '@mui/material'
import React from 'react'
import styled, { css } from 'styled-components'

export default function InfoBlock() {
    return (
        <InfoContainer>
            <Paper>
                <InfoColor>
                    <Item><SpanColor><Color color="#2b83ba" /></SpanColor>50</Item>
                    <Item><SpanColor><Color color="#abdda4" /></SpanColor>75</Item>
                    <Item><SpanColor><Color color="#ffffbf" /></SpanColor>100</Item>
                    <Item><SpanColor><Color color="#fdae61" /></SpanColor>125</Item>
                    <Item><SpanColor><Color color="#d7191c" /></SpanColor>150</Item>
                </InfoColor>
            </Paper>
        </InfoContainer>
    )
}

const Color = styled('span')`
    display: inline-block;
    background-color: ${props => props.color};
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    ${props => props.radius && css`
        border-radius: 50%;
    `}
`

const SpanColor = styled('div')`
    display: inline-block;
    margin-right: 10px;
    width: 1.25rem;
    height: 1.25rem;
    overflow: hidden;
    ${props => props.radius && css`
        padding: 4px;
        margin-right: 4px;
    `}
`

const Item = styled('li')`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    ${props => props.right && css`
        margin-bottom: 0.5rem;
     `}
    /* margin-top: -1px; */
    /* margin-bottom: -4px; */
`

const InfoContainer = styled('div')`
    position: absolute;
    bottom: 20px;
    left: 20px;
    /* border: 1px solid red; */
    z-index: 1000;
    ${props => props.right && css`
        bottom: auto;
        left: auto;
        right: 10px;
        top: 100px;
    `}
    @media screen and (max-width: 780px){
        bottom: 10px;
        left: 10px;
        ${props => props.right && css`
            bottom: auto;
            left: auto;
            right: 10px;
            top: 80px;
        `}
    }
`

const InfoColor = styled('ul')`
    background-color: #fff;
    border-radius: 16px;
    padding: 11px;
    list-style: none;
`