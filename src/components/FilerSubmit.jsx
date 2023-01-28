import styled from "styled-components"

export const FilterSubmit = ({ icon }) => {
    return <Submit>
        <Img src={icon} alt="#" />
        <Span>
            Найти
        </Span>
    </Submit>
}

const Span = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    color: #fff;
`

const Img = styled('img')`
    margin-right: 10px;
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
    @media screen and (max-width: 600px){
        width: 100%;
    }
`