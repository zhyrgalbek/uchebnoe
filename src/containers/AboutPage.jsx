import { Grid } from "@mui/material"
import styled from "styled-components"
import { FilterSubmit } from "../components/FilerSubmit"
import BakcgroundImage from '../assets/about/HelpMin.jpg'
import flag from '../assets/about/flag.svg'
import doc from '../assets/about/doc.svg'
import collaborate from '../assets/about/collaborate.svg'
import gmail from '../assets/about/gmail.svg'
import people from '../assets/about/people.svg'
import comand from '../assets/about/comand.svg'
import { Box, Stack } from "@mui/system"

export const AboutPage = () => {
    return <AboutContainer>
        <AboutHeader>О нас</AboutHeader>
        <HelpComponent>
            <Grid container>
                <Grid item md={7} sx={{ padding: '70px 50px' }}>
                    <HelpHeader>Мы помогаем гражданам получить точную информацию</HelpHeader>
                    <HelpText>Наша задача помочь гражданам Кыргызстана удобным и легким способом
                        узнать информацию об образовательных учреждениях Кыргызской республики.
                        Для этой цели мы создали карту, отображающая актуальные данные в Кыргызской
                        республике</HelpText>
                    <FilterSubmit>Перейти к карте</FilterSubmit>
                </Grid>
                <Grid item md={5}>
                    <Img src={BakcgroundImage} alt="#" />
                </Grid>
            </Grid>
        </HelpComponent>
        <InfoTop>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Card>
                        <IconBlock>
                            <Icon src={flag} alt="#" />
                        </IconBlock>
                        <CardHeader>Founded</CardHeader>
                        <CardText>It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </CardText>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <IconBlock>
                            <Icon src={doc} alt="#" />
                        </IconBlock>
                        <CardHeader>50M montly enrichments</CardHeader>
                        <CardText>It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </CardText>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <IconBlock>
                            <Icon src={collaborate} alt="#" />
                        </IconBlock>
                        <CardHeader>400k User</CardHeader>
                        <CardText>It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </CardText>
                    </Card>
                </Grid>
            </Grid>
        </InfoTop>
        <MissionComponent>
            <Grid container spacing="30px">
                <Grid item xs={12} md={6}>
                    <MissionHeader>Наша миссия</MissionHeader>
                    <MissionText>It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum.In the first place we have granted to God,
                        and by this our present charter confirmed for us and our heirs forever that
                        the English Church shall be free, and shall have her rights entire, and her liberties inviolate;
                        and we will that it be thus observed; which is apparent from</MissionText>
                    <MissionText>It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using Lorem
                        Ipsum.In the first place we have granted to God, and by this our present charter
                        confirmed for us and our heirs forever that the English Church shall be free, and
                        shall have her rights entire, and her liberties inviolate; and we will that it be
                        thus observed; which is apparent from</MissionText>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <MissionAdvice>
                                <Stack direction="row" alignItems="center">
                                    <Box sx={{ marginRight: '24px' }}>
                                        <Icon src={comand} alt="#" />
                                    </Box>
                                    <Box>
                                        <AdviceHeader>Команда</AdviceHeader>
                                        <AdviceText>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. </AdviceText>
                                    </Box>
                                </Stack>
                            </MissionAdvice>
                        </Grid>
                        <Grid item xs={12}>
                            <MissionAdvice>
                                <Stack direction="row" alignItems="center">
                                    <Box sx={{ marginRight: '24px' }}>
                                        <Icon src={people} alt="#" />
                                    </Box>
                                    <Box>
                                        <AdviceHeader>Совет</AdviceHeader>
                                        <AdviceText>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. </AdviceText>
                                    </Box>
                                </Stack>
                            </MissionAdvice>
                        </Grid>
                        <Grid item xs={12}>
                            <MissionAdvice>
                                <Stack direction="row" alignItems="center">
                                    <Box sx={{ marginRight: '24px' }}>
                                        <Icon src={gmail} alt="#" />
                                    </Box>
                                    <Box>
                                        <AdviceHeader>Пресс-служба</AdviceHeader>
                                        <AdviceText>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. </AdviceText>
                                    </Box>
                                </Stack>
                            </MissionAdvice>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MissionComponent>
    </AboutContainer>
}

const AdviceText = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #777777;
`

const AdviceHeader = styled('h4')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #292D32;
    margin-bottom: 8px;
`

const MissionAdvice = styled('div')`
    padding: 16px;
    background: #EBF0FF;
    border-radius: 6px;
    margin-bottom: 48px;
`

const MissionText = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 24px;
    color: #4B5563;
`

const MissionHeader = styled('h3')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    text-align: left;
    margin-top: 45px;
    margin-bottom: 16px;
    color: #292D32;
`

const MissionComponent = styled('div')` 
    margin-bottom: 100px;
`

const Icon = styled('img')`
    /* width: 100%; */
    /* height: 100%; */
    object-fit: cover;
`

const IconBlock = styled('div')`
    display: inline-block;
    border: 1px solid #3763FF;
    background: #3763FF;
    padding: 10px 12px;
    margin-bottom: 24px;
    border-radius: 50%;
`

const CardText = styled("p")`   
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: left;
    color: #4B5563;
`

const CardHeader = styled('h3')`    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    text-align: left;
    margin-bottom: 24px;
    color: #292D32;
`

const Card = styled('div')` 
    margin-bottom: 70px;
    /* border: 1px solid red; */
`

const InfoTop = styled('div')`
`

const Img = styled('img')`  
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
`

const HelpText = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #4B5563;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`

const HelpHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    text-align: left;
    margin-bottom: 30px;
    color: #292D32;
`

const HelpComponent = styled('div')`
    border: 1px solid #3763FF;
    border-radius: 6px;
    margin-bottom: 70px;
`
const AboutHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 130%;
    text-transform: uppercase;
    text-align: left;
    margin: 50px 0;
    color: #292D32;
`

const AboutContainer = styled('div')`
    /* border: 1px solid red; */
`