import { Box, Grid } from "@mui/material"
import { Stack } from "@mui/system"
import styled from "styled-components"
import { IconCounter } from "./ui/IconCounter"
import man from '../assets/IconCounter/man.svg'
import woman from '../assets/IconCounter/woman.svg'
import boy from '../assets/IconCounter/boy.svg'
import girl from '../assets/IconCounter/girl.svg'
import toggle from '../assets/Filter/Frame.svg'
import togglewhite from '../assets/Filter/Framewhite.svg'
import count from '../assets/IconCounter/count.svg'
import share from '../assets/IconCounter/share.svg'
import like from '../assets/IconCounter/like.svg'

import { FilterSubmit } from "./FilerSubmit"
import { AccordionFilter } from "./ui/AccordionFilter"
import { useState } from "react"
import { FilterButton } from "./FilterButton"


export default function SchoolComponent() {
    const [openMore, setOpenMore] = useState(false);
    const onClickMore = () => {
        setOpenMore(prev => !prev)
    }
    return <SchoolContainer>
        <Grid container spacing="128px">
            <Grid item md={6}>
                <SchoolHeader>Профессиональный лицей №16</SchoolHeader>
                <BoxCard>
                    <Th>Тип учреждения:</Th>
                    <Td>Государственный</Td>
                </BoxCard>
                <BoxCard>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Th>Общая вместимость:</Th>
                        <Td><IconCounter icon={man}>150</IconCounter></Td>
                        <Td><IconCounter icon={woman}>150</IconCounter></Td>
                    </Stack>
                </BoxCard>
                <BoxCard>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Th>Количество свободных мест:</Th>
                        <Td><IconCounter icon={boy}>41</IconCounter></Td>
                        <Td><IconCounter icon={girl}>35</IconCounter></Td>
                    </Stack>
                </BoxCard>
                <BoxCard>
                    <AccordionFilter onClick={onClickMore} header={<FilterSubmit variant="more" icon={togglewhite} icon2={toggle} active={openMore}>Подробнее</FilterSubmit>}>
                        <BoxCard>
                            <Stack direction="column" spacing={2}>
                                <Th>Местоположение:</Th>
                                <Td>Чуйская область, Аламудунский район, село Жайылган, ул Аманова 22</Td>
                            </Stack>
                        </BoxCard>
                        <BoxCard>
                            <Stack direction="column" spacing={2}>
                                <Th>Время работы:</Th>
                                <Td>9:00 - 17:30</Td>
                            </Stack>
                        </BoxCard>
                        <BoxCard>
                            <Stack direction="column" spacing={2}>
                                <Th>ФИО Директора/Руководителя</Th>
                                <Td>Баланчаев Баланча Баланчаевич</Td>
                            </Stack>
                        </BoxCard>
                        <BoxCard>
                            <Stack direction="column" spacing={2}>
                                <Th>Количество преподавателей:</Th>
                                <Td><IconCounter icon={count}>40</IconCounter></Td>
                            </Stack>
                        </BoxCard>
                        <BoxCard>
                            <Stack direction="column" spacing={2}>
                                <Th>Наличие столовой:</Th>
                                <Td>Имеется</Td>
                            </Stack>
                        </BoxCard>
                        <BoxCard>
                            <Stack direction="column" spacing={2}>
                                <Th>Наличие спортивного зала:</Th>
                                <Td>Имеется</Td>
                            </Stack>
                        </BoxCard>
                    </AccordionFilter>
                </BoxCard>
            </Grid>
            <Grid item md={6}>
                <BoxCard>
                    <Img src="" alt="#" />
                </BoxCard>
                <BoxCard>
                    <Stack direction="column">
                        <Th>Контактные данные:</Th>
                        <Td>+996 312 00 80 00, +996 700 00 80 00 (WhatsApp), почта <a href="">litsey16@bk.ru</a></Td>
                    </Stack>
                </BoxCard>
                <BoxCard>
                    <FilterSubmit info={<IconCounter like icon={like}>490</IconCounter>} variant="like">Поставить лайк</FilterSubmit>
                </BoxCard>
                <BoxCard>
                    <FilterSubmit icon={share} variant="like">Поделиться</FilterSubmit>
                </BoxCard>
            </Grid>
        </Grid>
    </SchoolContainer>
}

const Img = styled('div')`
    border: 1px solid blue;
    width: 100%;
    height: 310px;
    border-radius: 6px;
`

const BoxCard = styled(Box)`
    margin-bottom: 30px;
`

const Td = styled('div')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
`

const Th = styled('div')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 5px;
`

const SchoolHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 30px;
`

const SchoolContainer = styled('div')`
    border: 1px solid #3763FF;
    padding: 30px;
    border-radius: 6px;
    margin-bottom: 70px;
`