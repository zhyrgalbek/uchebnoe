import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import styled from "styled-components";
import card1 from '../../assets/logo/EU logobox.png'


function Footer() {
    return <FooterBlock>
        <Grid container spacing="86px">
            <Grid item md={4}>
                <Box >
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
                                <Img src={card1} alt="" />
                            </Box>
                            <Box>
                                <Img src={card1} alt="" />
                            </Box>
                        </Stack>
                        <ErrorBottomText>Содержание сайта не обязательно отражает их точку зрения, программ и проектов.</ErrorBottomText>
                    </ErrorBottom>
                </Box>
            </Grid>
            <Grid item md={4}>
                <Box sx={{ border: '1px solid red', width: '100%', height: '100px' }}></Box>
            </Grid>
            <Grid item md={4}>
                <Box sx={{ border: '1px solid red', width: '100%', height: '100px' }}></Box>
            </Grid>
        </Grid>
    </FooterBlock>
}

export default Footer;

const Img = styled('img')`
    width: 100%;
    height: 100%;
    Object-fit: cover;
`

const ErrorBottomText = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 130%;
    color: #fff;
    margin-bottom: 15px;
    margin-top: 15px;
`

const ErrorBottom = styled(Box)`
    // border: 1px solid red;
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
    border: 1px solid red;
    padding: 70px 0;
    background: #6A8AFF;

`