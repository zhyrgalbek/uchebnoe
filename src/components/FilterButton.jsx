import { useState } from "react";
import styled, { css } from "styled-components"

export const FilterButton = ({ children, icon, icon2, left, ...props }) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true)
    }
    const offHover = () => {
        setHover(false)
    }
    return <Block onMouseOver={onHover} onMouseOut={offHover} left={left} {...props}><Img src={hover ? icon : icon2} alt="#" /> <Span>{children}</Span></Block>
}

const Img = styled('img')`
    /* background:  */
    fill: #ff0000;
`
const Span = styled('span')`
    margin-left: 10px;
`
const Block = styled('button')`
    border: 1px solid #6A8AFF;
    width: 280px;
    padding: 20px 15px;
    text-align: left;
    font-weight: 400;
    border-radius: 6px;
    font-family: 'Inter';
    font-style: normal;
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    background: #fff;
    margin-bottom: 20px;
    margin-right: 10px;
    cursor: pointer;
    &:nth-child(4n){
        margin-right: 0;
    }
    &:hover{
        background: #6A8AFF;
        color: #fff;
        font-weight: 300;
    }
    ${props => props.left && css`
        
    `}
`
