import styled, { css } from "styled-components"

export const FilterSubmit = ({ iconLeft, iconRight, children, variant, active, info, bgNone, map, ...props }) => {
    return <Submit {...props} variant={variant} active={active} bgNone={bgNone} map={map}>
        {
            variant === 'like' && info
        }
        {
            iconLeft && <Img src={iconLeft} alt="#" />
        }
        <Span bgNone={bgNone}>
            {children}
        </Span>
        {
            variant === 'more' && <Img src={iconRight} alt="#" active={active} />
        }
    </Submit>
}

const Span = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: #fff;
    display: inline-block;
    margin-right: 10px;
    ${props => props.bgNone && css`
        color: #5A5A5A;
    `}
`

const Img = styled('img')`
    margin-right: 0.625rem;
    width: 1.5rem;
    height: 1.5rem;
    ${props => props.active && css`
        transform: rotateX(180deg);
    `}
`

const Submit = styled('button')`
    border-radius: 3px;
    background: #6A8AFF;
    width: clamp(15.9375rem, 4.910714285714285rem + 22.61904761904762vw, 21.875rem);
    padding: 0.625rem 0;
    border: 1px solid #6A8AFF;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    margin-bottom: 0;
    transition: 0.5s ease;
    box-shadow: 1px 1px 4px 1px rgba(106, 138, 255, 0.8);
    &:hover{
        background: #4470F3;
    }
    &:active{
        background: #3763FF;
    }
    ${props => props.active && css`
        background: #3763FF;
        margin-bottom: 20px;
        transition: 0.2s ease;
     `}
    ${props => props.bgNone && css`
        background: transparent;
        box-shadow: none;
        border: 1px solid rgba(106, 138, 255, 0.6);
        justify-content: flex-start;
        padding-left: 0.625rem;
        margin-top: 24px;
        &:hover{
            background: transparent;
            box-shadow: none;
            border: 1px solid rgba(106, 138, 255, 0.6);
        }
    `}
    ${props => props.variant === 'more' && css`
        width: 100%;
    `}
    ${props => props.variant === 'desctop' && css`
        width: 100%;
        padding: 10px 8px;
    `}
    ${props => props.variant === 'more' && props.active && css`
        margin-bottom: 30px;
    `}
    ${props => props.variant === 'like' && css`
        width: 280px;
    `}
    ${props => props.map && css`
        padding: 5px 10px;
    `}
    @media screen and (max-width: 780px){
        width: 100%;
    }
`