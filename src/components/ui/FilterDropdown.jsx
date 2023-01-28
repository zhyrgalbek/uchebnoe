import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import styled, { css } from "styled-components"
import frame from '../../assets/Filter/Frame.svg'
import { FilterButton } from "../FilterButton";

export const FilterDropdown = ({ header, text, icon, icon2, arr, mobile, ...props }) => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(prev => !prev)
    }
    return <DropdownContainer>
        <DropdownHeader>{header}</DropdownHeader>
        {
            mobile ? <MobileDrop onClick={handleClick} icon={icon} icon2={icon2}>{text}</MobileDrop> :
                <FilterDropdownButton
                    onClick={handleClick}>
                    <Span>{text}</Span>
                    <Img src={frame} alt="#" />
                </FilterDropdownButton>
        }
        <MenuDrop show={show}>
            {
                arr?.map((elem, index) => {
                    return <MenuDropItem key={index} icon={elem.icon} icon2={elem.icon2} {...props}>{elem.text}</MenuDropItem>
                })
            }
        </MenuDrop>
    </DropdownContainer>
}

const MobileDrop = styled(FilterButton)`
    width: 100%;
`

const MenuDropItem = styled(FilterButton)`
    border: 1px solid transparent;
    width: 100%;
    margin-bottom: 0;
    border-radius: 0;
    padding: 14px 15px;
    &:hover{
        background: #3763FF;
        color: #fff;
    }
`

const MenuDrop = styled('div')`
    border-top: 0;
    margin-top: -25px;
    height: 0;
    overflow: hidden;
    border: none;
    /* transition: all 0.5s ease; */
    ${props => props.show && css`
        height: 100%;
        border: 1px solid #3763FF;
        border-top: 1px solid transparent;
        background: #fff;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    `}
`

const DropdownContainer = styled('div')`
    position: relative;
    width: 320px;
    margin-right: 30px;
    margin-bottom: 53px;
    @media screen and (max-width: 600px){
        width: 100%;
        margin-right: 0;
    }
`
const DropdownHeader = styled('h3')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    color: #292D32;
    margin-bottom: 5px;
`
const Span = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #5A5A5A;
`
const Img = styled('img')`
    
`
const FilterDropdownButton = styled('button')`
    border: 1px solid #3763FF;
    padding: 12px 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    margin-bottom: 53px;
    width: 100%;
`
