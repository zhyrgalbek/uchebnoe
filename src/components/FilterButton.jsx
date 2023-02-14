import { Button } from "bootstrap";
import { useState } from "react";
import styled, { css } from "styled-components"
import frame from '../assets/Filter/Frame.svg'
import framewhite from '../assets/Filter/Framewhite.svg'

function createRipple(e) {
    let btn = e.target;
    let boundingBox = btn.getBoundingClientRect();
    let x = e.clientX - boundingBox.left;
    let y = e.clientY - boundingBox.top;
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => { ripple.remove() });
}


export const FilterButton = ({ children, icon, icon2, left, mobile, toggle, active, primary, ...props }) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true)
    }
    const offHover = () => {
        setHover(false)
    }
    return <Block onMouseOver={onHover} onMouseOut={offHover} icon={icon} icon2={icon2} left={left} {...props} mobile={mobile} primary={primary}>
        {/* <Img src={hover || primary ? icon : icon2} alt="#" /> */}
        <Span>{children}</Span>
        {
            toggle && <Div>
                <Img src={hover || primary ? framewhite : frame} active={active} />
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
    position: relative;
    border: 1px solid rgba(55, 99, 255, 0.4);
    /* width: clamp(16.875rem, 16.59059633027523rem + 1.4220183486238533vw, 18.8125rem); */
    /* width: ; */
    padding: 10px 10px;
    padding-left: 30px;
    text-align: left;
    font-weight: 400;
    border-radius: 3px;
    font-family: 'Inter';
    font-style: normal;
    font-size: 0.875rem;
    line-height: 140%;
    display: flex;
    align-items: center;
    background: #fff;
    margin-right: 10px;
    margin-bottom: 10px;
    /* transition: 0.2s ease; */
    overflow: hidden;
    transition: .3s;
    cursor: pointer;
    background-image: url(${props => props.icon2});
    background-repeat: no-repeat;
    background-position: 6px 50%;
    &:hover{
        background-color: #6A8AFF;
        color: #fff;
        background-image: url(${props => props.icon});
    }
    ${props => props.primary && css`
        background-color: #6A8AFF;
        color: #fff;
        background-image: url(${props => props.icon});
    `}
    ${props => props.mobile && css`
        width: 100%;
        margin: 0;
        border-radius: 0;
        border: 1px solid transparent;
        /* padding: 14px 15px; */
    `}
    .ripple {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        background-color: white;
        pointer-events: none;
        opacity: .5;
        animation: ripple .5s linear;
    }

    @keyframes ripple {
        to {
            width: 15rem;
            height: 15rem;
            opacity: 0;
        }
    }
`