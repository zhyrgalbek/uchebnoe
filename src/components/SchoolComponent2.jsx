import styled from "styled-components"
import man from '../assets/IconCounter/man.svg'
import woman from '../assets/IconCounter/woman.svg'
import boy from '../assets/IconCounter/boy.svg'
import girl from '../assets/IconCounter/girl.svg'
import toggle from '../assets/Filter/Frame.svg'
import togglewhite from '../assets/Filter/Framewhite.svg'
import count from '../assets/IconCounter/count.svg'
import share from '../assets/IconCounter/share.svg'
import like from '../assets/IconCounter/like.svg'
import people_twice from "../assets/IconCounter/people_twice.svg";
import { AccordionFilter } from "./ui/AccordionFilter"
import { Box, Stack } from "@mui/material"
import { useState } from "react"
import { FilterSubmit } from "./FilerSubmit"
import { IconCounter } from "./ui/IconCounter"
import { Grid } from "@mui/material";

export const SchoolComponent2 = () => {
    const [openMore, setOpenMore] = useState(false);
    const onClickMore = () => {
        setOpenMore(prev => !prev)
    }
    return <section className="mt-5">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2  p-4 border rounded blue">
                <div className="col licei">
                    <p className="pt-0 mt-0 third__title__text">
                        Профессиональный лицей №16
                    </p>
                    <img
                        src="https://www.brookings.edu/wp-content/uploads/2020/05/empty-classroom_elementary-school-middle-school-high-school.jpg"
                        className="img-thumbnail border-0 pt-0 mt-0 d-block d-md-none"
                        alt=""
                    />
                    <p className="charts__texts">Тип учреждения:</p>
                    <p>Государственный</p>
                    <div className="box d-flex align-items-center mb-1 my-md-4">
                        <p className="mb-0 d-flex charts__texts align-items-center pb-0">
                            Общая вместимость:
                            <div className="numbers_fonts_weight mx-3 icon__info__custom border border-1 border-primary rounded-2 mx-2 d-none d-md-flex  justify-content-center align-items-center">
                                <img src={man} alt="example image" />
                                150
                            </div>
                            <div className="mx-3 numbers_fonts_weight icon__info__custom border border-1 border-primary rounded-2 mx-2 d-none d-md-flex  justify-content-center align-items-center">
                                <img src={woman} alt="example image" />
                                35
                            </div>
                        </p>
                    </div>
                    <div className="icon__info__custom numbers_fonts_weight border border-1 border-primary rounded-2 mx-2 d-flex d-md-none  justify-content-center align-items-center">
                        <img src={people_twice} alt="" />
                        150
                    </div>
                    <div className="box d-flex align-items-center mb-1 mt-4 my-md-4">
                        <p className="mb-0 d-flex charts__texts align-items-center pb-0">
                            Количество свободных мест:
                            <div className="mx-3 icon__info__custom numbers_fonts_weight border border-1 border-primary rounded-2 mx-2 d-none d-md-flex  justify-content-center align-items-center">
                                <img src={boy} alt="example image" />
                                41
                            </div>
                            <div className="mx-3 numbers_fonts_weight icon__info__custom border border-1 border-primary rounded-2 mx-2 d-none d-md-flex  justify-content-center align-items-center">
                                <img src={girl} alt="example image" />
                                35
                            </div>
                        </p>
                    </div>
                    <div className=" numbers_fonts_weight icon__info__custom border border-1 border-primary rounded-2 mx-2 d-flex d-md-none mb-3 justify-content-center align-items-center">
                        <img src={people_twice} alt="" />
                        150
                    </div>
                    <Grid container xs={12} lg={10} sx={{ margin: '0' }}>
                        <BoxCard>
                            <AccordionFilter onClick={onClickMore} none header={<FilterSubmit variant="more" icon={togglewhite} icon2={toggle} active={openMore}>Подробнее</FilterSubmit>}>
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
                </div>
                <div className="col">
                    <img
                        src="https://www.brookings.edu/wp-content/uploads/2020/05/empty-classroom_elementary-school-middle-school-high-school.jpg"
                        className="img-thumbnail border-0 pt-0 mt-0 d-none d-md-block"
                        alt=""
                    />
                    <div className="d-md-block d-none">
                        <p className="mb-0 mt-4 charts__texts">Контактные данные:</p>
                        <p>
                            +996 312 00 80 00, +996 700 00 80 00 (WhatsApp), почта{" "}
                            <a href="mailto: litsey16@bk.ru">litsey16@bk.ru</a>
                        </p>
                    </div>
                    <div className="d-none d-md-flex flex-column col-12 col-md-9 col-lg-7">
                        <BoxCard>
                            <FilterSubmit info={<IconCounter like icon={like}>490</IconCounter>} variant="like">Поставить лайк</FilterSubmit>
                        </BoxCard>
                        <BoxCard>
                            <FilterSubmit icon={share} variant="like">Поделиться</FilterSubmit>
                        </BoxCard>
                    </div>
                    <div className="d-flex d-md-none flex-column mt-4">
                        <BoxCard>
                            <FilterSubmit info={<IconCounter like icon={like}>490</IconCounter>} variant="like">Поставить лайк</FilterSubmit>
                        </BoxCard>
                        <BoxCard>
                            <FilterSubmit icon={share} variant="like">Поделиться</FilterSubmit>
                        </BoxCard>
                    </div>
                </div>
            </div>
        </div>
    </section >
}

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
    margin-bottom: 10px;
    margin-right: 10px;
`