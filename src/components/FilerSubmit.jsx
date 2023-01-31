import styled, { css } from "styled-components"

export const FilterSubmit = ({ icon, children, variant, active, info, ...props }) => {
    return <Submit {...props} variant={variant} active={active}>
        {
            variant === 'like' && info
        }
        {
            variant !== 'more' && variant !== 'like' && icon && <Img src={icon} alt="#" />
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
    font-weight: 600;
    font-size: 14px;
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
    border-radius: 6px;
    background: #6A8AFF;
    width: 320px;
    padding: 13px 0;
    border: 1px solid #6A8AFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 0;
    transition: 0.5s ease;
    ${props => props.active && css`
        background: #3763FF;
        margin-bottom: 20px;
        transition: 0.2s ease;
     `}
    ${props => props.variant === 'more' && css`
        width: 100%;
    `}
    ${props => props.variant === 'more' && props.active && css`
        margin-bottom: 30px;
    `}
    ${props => props.variant === 'like' && css`
        width: 280px;
    `}
    @media screen and (max-width: 600px){
        width: 100%;
    }
`