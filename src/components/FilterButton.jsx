import { useState } from "react";
import styled, { css } from "styled-components"
import frame from '../assets/Filter/Frame.svg'
import framewhite from '../assets/Filter/Framewhite.svg'

export const FilterButton = ({ children, icon, icon2, left, mobile, toggle, active, ...props }) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true)
    }
    const offHover = () => {
        setHover(false)
    }
    return <Block onMouseOver={onHover} onMouseOut={offHover} left={left} {...props} mobile={mobile}>
        <Img src={hover ? icon : icon2} alt="#" />
        <Span>{children}</Span>
        {
            toggle && <Div>
                <Img src={hover ? framewhite : frame} active={active} />
            </Div>
        }
    </Block>
}

const Div = styled('div')`
    /* border: 1px solid red; */
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`
const Img = styled('img')`
    ${props => props.active && css`
        transform: rotateX(180deg);
    `}
`
const Span = styled('span')`
    margin-left: 10px;
`
const Block = styled('button')`
    border: 1px solid #6A8AFF;
    width: 301px;
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
    margin-bottom: 30px;
    margin-right: 30px;
    cursor: pointer;
    &:nth-child(4n){
        margin-right: 0;
    }
    &:hover{
        background: #6A8AFF;
        color: #fff;
        font-weight: 300;
    }
    ${props => props.mobile && css`
        width: 100%;
        margin: 0;
        border-radius: 0;
        border: 1px solid transparent;
        padding: 14px 15px;
    `}
`
