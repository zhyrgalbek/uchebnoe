import { Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export default function InfoBlock({ text }) {
    return (
        <InfoBlock right>
            <Paper>
                <InfoColor>
                    <Item right><SpanColor radius><Color color="#FF0600" radius /></SpanColor>20%</Item>
                    <Item right><SpanColor radius><Color color="#FFCD02" radius /></SpanColor>40%</Item>
                    <Item right><SpanColor radius><Color color="#FFF800" radius /></SpanColor>60%</Item>
                    <Item right><SpanColor radius><Color color="#A9FF00" radius /></SpanColor>80%</Item>
                    <Item right><SpanColor radius><Color color="#51FF00" radius /></SpanColor>100%</Item>
                </InfoColor>
            </Paper>
        </InfoBlock>
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

const InfoBlock = styled('div')`
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