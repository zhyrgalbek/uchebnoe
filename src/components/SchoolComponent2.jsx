import styled from "styled-components";
import man from "../assets/IconCounter/man.svg";
import woman from "../assets/IconCounter/woman.svg";
import boy from "../assets/IconCounter/boy.svg";
import girl from "../assets/IconCounter/girl.svg";
import toggle from "../assets/Filter/Frame.svg";
import togglewhite from "../assets/Filter/Framewhite.svg";
import count from "../assets/IconCounter/count.svg";
import share from "../assets/IconCounter/share.svg";
import like from "../assets/IconCounter/like.svg";
// import people_twice from "../assets/IconCounter/people_twice.svg";
import { AccordionFilter } from "./ui/AccordionFilter";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { FilterSubmit } from "./FilerSubmit";
import { IconCounter } from "./ui/IconCounter";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ModalComponent from "./ui/ModalComponent"
import Podelitsya from "./Podelitsya"

const SchoolText = [
    {
        header: "Профессиональный лицей №16",
        btns: ["Подробнее", "Поставить лайк", "Поделиться"],
        items: [
            {
                item_header: "Тип учреждения:",
                item_text: "Государственный",
            },
            {
                item_header: "Общая вместимость:",
                item_text: "",
            },
            {
                item_header: "Количество свободных мест:",
                item_text: "",
            },
            {
                item_header: "Местоположение:",
                item_text:
                    "Чуйская область, Аламудунский район, село Жайылган, ул Аманова 22",
            },
            {
                item_header: "Время работы:",
                item_text: "9:00 - 17:30",
            },
            {
                item_header: "ФИО Директора/Руководителя",
                item_text: "Баланчаев Баланча Баланчаевич",
            },
            {
                item_header: "Количество преподавателей:",
                item_text: "",
            },
            {
                item_header: "Наличие столовой:",
                item_text: "Имеется",
            },
            {
                item_header: "Наличие спортивного зала:",
                item_text: "Имеется",
            },
            {
                item_header: "Контактные данные:",
                item_text: "",
            },
        ],
    },
    {
        header: "Кесиптик лицей №16",
        btns: ["Дагы", "Лайк койуу", "Бөлүшүү"],
        items: [
            {
                item_header: "Мекеме түрү:",
                item_text: "Мамлекеттик",
            },
            {
                item_header: "Жалпы орундар:",
                item_text: "",
            },
            {
                item_header: "Жеткиликтүү орундардын саны:",
                item_text: "",
            },
            {
                item_header: "Жайгашкан жер:",
                item_text:
                    "Чуйская область, Аламудунский район, село Жайылган, ул Аманова 22",
            },
            {
                item_header: "Иш убактысы:",
                item_text: "9:00 - 17:30",
            },
            {
                item_header: "Директордун/Жетекчинин толук аты-жөнү",
                item_text: "Баланчаев Баланча Баланчаевич",
            },
            {
                item_header: "Мугалимдердин саны:",
                item_text: "",
            },
            {
                item_header: "ашкананын болушу:",
                item_text: "Имеется",
            },
            {
                item_header: "Спорт залдын болушу:",
                item_text: "Имеется",
            },
            {
                item_header: "Байланыш маалыматтары:",
                item_text: "",
            },
        ],
    },
];

export const SchoolComponent2 = () => {
    const { translation } = useSelector((store) => store.translate);
    const [openModal, setOpenModal] = useState(false);
    const onClickShare = () => {
        // alert('Hello world')
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const [openMore, setOpenMore] = useState(false);
    const onClickMore = () => {
        alert('Hello world')
        setOpenMore((prev) => !prev);
    };
    return (
        <section className="mt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 px-2 pt-4 border rounded blue">
                    <div className="col licei">
                        <p className="pt-0 mt-0 mb-4 profession__text__styled">
                            {SchoolText[translation].header}
                        </p>
                        <img
                            src="https://www.brookings.edu/wp-content/uploads/2020/05/empty-classroom_elementary-school-middle-school-high-school.jpg"
                            className="img-thumbnail border-0 pt-0 mt-0 d-block d-md-none"
                            alt=""
                        />
                        <p className="charts__texts mb-1 margin__bottom__custom">
                            {SchoolText[translation].items[0].item_header}
                        </p>
                        <p>{SchoolText[translation].items[0].item_text}</p>
                        <BoxCard>
                            <Stack direction="column" spacing={2}>
                                <Th className="mb-1">
                                    {SchoolText[translation].items[5].item_header}
                                </Th>
                                <Td className="mt-1">Баланчаев Баланча Баланчаевич</Td>
                            </Stack>
                        </BoxCard>
                        <div className="box d-flex align-items-center mb-1 my-md-2">
                            <p className="mb-0 d-flex charts__texts align-items-center pb-0">
                                {SchoolText[translation].items[1].item_header}
                                <div className="numbers_fonts_weight mx-3 icon__info__custom border border-1 border-primary rounded-2 mx-2 d-none d-md-flex  justify-content-center align-items-center">
                                    <img src={man} alt="example image" />
                                    150
                                </div>
                            </p>
                        </div>
                        <div className="icon__info__custom numbers_fonts_weight border border-1 border-primary rounded-2 mx-2 d-flex d-md-none  justify-content-center align-items-center">
                            <img src={man} alt="" />
                            150
                        </div>
                        <div className="box d-flex align-items-center mb-1 mt-4 my-md-2">
                            <p className="mb-0 d-flex charts__texts align-items-center pb-0">
                                {SchoolText[translation].items[2].item_header}
                                <div className="mx-3 numbers_fonts_weight icon__info__custom border border-1 border-primary rounded-2 mx-2 d-none d-md-flex  justify-content-center align-items-center">
                                    <img src={girl} alt="example image" />
                                    35
                                </div>
                            </p>
                        </div>
                        <div className=" numbers_fonts_weight icon__info__custom border border-1 border-primary rounded-2 mx-2 d-flex d-md-none mb-2 justify-content-center align-items-center">
                            <img src={man} alt="" />
                            150
                        </div>
                        <Grid container xs={12} lg={10} sx={{ margin: "0" }}>
                            <BoxCard>
                                <BoxCard>
                                    <Stack direction="row" flexWrap="wrap" spacing={1} alignItems="center">
                                        <Th>{SchoolText[translation].items[6].item_header}</Th>
                                        <Td>
                                            <IconCounter icon={count}>40</IconCounter>
                                        </Td>
                                    </Stack>
                                </BoxCard>
                                <BoxCard>
                                    <Stack direction="column" spacing={2}>
                                        <Th className="mb-1">
                                            {SchoolText[translation].items[3].item_header}:
                                        </Th>
                                        <Td className="mt-1">
                                            Чуйская область, Аламудунский район, село Жайылган, ул
                                            Аманова 22
                                        </Td>
                                    </Stack>
                                </BoxCard>
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
                            <p className="mb-1 mt-4 font__contacts_data">
                                {SchoolText[translation].items[9].item_header}
                            </p>
                            <p className="mt-1 hhRoRZ">
                                +996 312 00 80 00, +996 700 00 80 00 (WhatsApp), почта{" "}
                                <a href="mailto: litsey16@bk.ru">litsey16@bk.ru</a>
                            </p>
                        </div>
                        <div className="d-none d-md-flex flex-column col-12 col-md-9 col-lg-7">
                            <BoxCard>
                                <FilterSubmit
                                    info={
                                        <IconCounter like icon={like}>
                                            490
                                        </IconCounter>
                                    }
                                    variant="like"
                                >
                                    {SchoolText[translation].btns[1]}
                                </FilterSubmit>
                            </BoxCard>
                            <BoxCard>
                                <FilterSubmit icon={share} variant="like" onClick={onClickShare}>
                                    {SchoolText[translation].btns[2]}
                                </FilterSubmit>
                            </BoxCard>
                        </div>
                        <div className="d-flex d-md-none flex-column mt-4">
                            <BoxCard>
                                <FilterSubmit
                                    info={
                                        <IconCounter like icon={like}>
                                            490
                                        </IconCounter>
                                    }
                                    variant="like"
                                >
                                    {SchoolText[translation].btns[1]}
                                </FilterSubmit>
                            </BoxCard>
                            <BoxCard>
                                <FilterSubmit icon={share} variant="like">
                                    {SchoolText[translation].btns[2]}
                                </FilterSubmit>
                            </BoxCard>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent handleClose={handleCloseModal} open={openModal}>
                <Podelitsya />
            </ModalComponent>
        </section>
    );
};

const BoxCard = styled(Box)`
  margin-bottom: 15px;
`;

const Td = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
`;

const Th = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 10px;
  margin-right: 10px;
`;
