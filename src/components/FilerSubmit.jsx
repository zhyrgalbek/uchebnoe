import styled, { css } from "styled-components"

export const FilterSubmit = ({ icon, children, variant, active, info, ...props }) => {
    return <Submit {...props} variant={variant} active={active}>
        {
            variant === 'like' && info
        }
        {
            variant !== 'more' && variant === 'like' && icon && <Img src={icon} alt="#" />
        }
        <Span>
            {children}
        </Span>
        {
            variant === 'more' && <Img src={icon} alt="#" active={active} />
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
`

const Img = styled('img')`
    margin-right: 10px;
    ${props => props.active && css`
        transform: rotateX(180deg);
    `}
`

const Submit = styled('button')`
    border-radius: 3px;
    background: #6A8AFF;
    width: clamp(15.9375rem, 4.910714285714285rem + 22.61904761904762vw, 21.875rem);
    padding: 0.8125rem 0;
    border: 1px solid #6A8AFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
    ${props => props.variant === 'more' && css`
        width: 100%;
    `}
    ${props => props.variant === 'desctop' && css`
        width: 100%;
    `}
    ${props => props.variant === 'more' && props.active && css`
        margin-bottom: 30px;
    `}
    ${props => props.variant === 'like' && css`
        width: 280px;
    `}
    @media screen and (max-width: 780px){
        width: 100%;
    }
`