import styled from "styled-components"

export const AboutPage = () => {
    return <AboutContainer>
        <AboutHeader>О нас</AboutHeader>
    </AboutContainer>
}

const AboutHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 130%;
    text-transform: uppercase;
    text-align: left;
    margin: 50px 0;
`

const AboutContainer = styled('div')`
    border: 1px solid red;
`