import styled, { css } from "styled-components"

export const IconCounter = ({ icon, children, like }) => {
    return <IconCounterBlock like={like}>
        <Icon src={icon} alt="#" />
        <Number>{children}</Number>
    </IconCounterBlock>
}

const Number = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 140%;
`

const Icon = styled('img')`
    margin-right: 0.3125rem;
    width: 1.5rem
    height: 1.5rem;
`

const IconCounterBlock = styled('div')` 
    border: 1px solid #A2B6FF;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-right: 10px;
    ${props => props.like && css`
        border: none;
        padding: 0;
        color: #fff;
        font-size: 600;
        margin-right: 0.625rem;
        margin-bottom: 0;
    `}
`