import { Container, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import styled, { css } from "styled-components";
import card1 from '../../assets/logo/EU logobox.png'
import card2 from '../../assets/logo/ESTDEV logobox.png'
import card3 from '../../assets/logo/Leader logobox.jpg'
import HeaderButton from "../../components/ui/HeaderButton";
import { useLocation, useNavigate } from "react-router";

const data = [
    {
        text: 'Приемная министра',
        contact: '+996(312) 66-24-42',
    },
    {
        text: 'Телефон доверия',
        contact: '+996(312) 66-24-42',
    },
    {
        text: 'Горячая линия',
        contact: '1222',
    },
    {
        text: 'Общественная приемная',
        contact: '+996(312) 62-05-19'
    },
    {
        text: 'Факс',
        contact: '+996(312) 62-15-20'
    },
    {
        text: 'Почтовый адрес',
        contact: 'minedukg@gmail.com'
    },
    {
        text: 'Адрес',
        contact: 'Кыргызская Республика, г. Бишкек 720040, Тыныстанова у., 257'
    }
]

function Footer() {
    const navigate = useNavigate()
    const location = useLocation()
    const onClickNav = (id) => {
        navigate(`${id}`)
    }
    return <FooterBlock>
        <Container maxWidth="lg">
            <Grid container spacing="86px">
                <Grid item xs={12} md={4}>
                    <Box sx={{ marginBottom: '50px' }}>
                        <ErrorBlock>
                            <ErrorText>Если нашли где-то ошибку, то напишите нам на</ErrorText>
                            <ErrorGmail>supportaddress@email.com</ErrorGmail>
                        </ErrorBlock>
                        <ErrorBottom>
                            <ErrorBottomText>Веб-сайт создан при содействии и финансовой поддержке Европейского Союза и партнеров:</ErrorBottomText>
                            <Stack direction="row" alignItems="center" spacing="10px">
                                <Box>
                                    <Img src={card1} alt="" />
                                </Box>
                                <Box>
                                    <Img src={card2} alt="" />
                                </Box>
                                <Box>
                                    <Img src={card3} alt="" />
                                </Box>
                            </Stack>
                            <ErrorBottomText>Содержание сайта не обязательно отражает их точку зрения, программ и проектов.</ErrorBottomText>
                        </ErrorBottom>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <Stack direction="row" spacing="20px">
                            <HeaderButton footer active={location.pathname === '/about'} onClick={() => onClickNav('/about')}>О нас</HeaderButton>
                            <HeaderButton footer active={location.pathname === '/'} onClick={() => onClickNav('/')}>Cтатистические данные</HeaderButton>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <Ul>
                            {
                                data.map((elem, index) => {
                                    return <Li key={index}>
                                        <Stack direction="row" spacing="10px">
                                            <Span primary>{elem.text}</Span>
                                            <Span>{elem.contact}</Span>
                                        </Stack>
                                    </Li>
                                })
                            }
                        </Ul>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="center" sx={{ marginTop: '50px' }}>
                        <ErrorBottomText>© 2023. Министерство образования и науки Кыргызской Республики.</ErrorBottomText>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    </FooterBlock >
}

export default Footer;

const Span = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 130%;
    color: #fff;
    width: 500px;
    display: block;
    ${props => props.primary && css`
        font-weight: 500;
    `}
    /* @media screen and (max-width: 720px){
        width: 100%;
    } */
`

const Li = styled('li')`
    /* border: 1px solid red; */
    margin-bottom: 17px;
`

const Ul = styled('ul')`
    margin: 0;
    padding: 0;
    list-style: none;
`

const Img = styled('img')`
    width: 100%;
    height: 100%;
    Object-fit: cover;
`

const ErrorBottomText = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 130%;
    color: #fff;
    margin-top: 50px;
    margin-bottom: 15px;
    margin-top: 15px;
`

const ErrorBottom = styled(Box)`
    /* // border: 1px solid red; */
`

const ErrorGmail = styled('a')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    color: #fff;
    cursor: pointer;
`

const ErrorText = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #fff;
    margin-bottom: 15px;
`

const ErrorBlock = styled(Box)`
    border: 1px solid #fff;
    padding: 50px;
    border-radius: 10px;
    margin-bottom: 50px;
`
const FooterBlock = styled(Box)`
    /* border: 1px solid red; */
    padding: 70px 0;
    background: #6A8AFF;

`