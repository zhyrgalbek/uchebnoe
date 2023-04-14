import styled, { css } from "styled-components";

import man from "../assets/IconCounter/man.svg";
import count from "../assets/IconCounter/count.svg";
import share from "../assets/IconCounter/share.svg";
import like from "../assets/IconCounter/like.svg";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { FilterSubmit } from "./FilerSubmit";
import { IconCounter } from "./ui/IconCounter";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ModalComponent from "./ui/ModalComponent"
import Podelitsya from "./Podelitsya"
import { MemoizedMapLeaflet } from "./MapLeaflet/MapLeaflet";


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
            {
                item_header: "Вместимость первого класса",
                item_text: "",
            },
        ],
    },
    {
        header: "№16 Кесиптик лицей",
        btns: ["Дагы", "Лайк басуу", "Бөлүшүү"],
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
                item_header: "Бош орундардын саны:",
                item_text: "",
            },
            {
                item_header: "Жайгашкан жери:",
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
            {
                item_header: "Биринчи класска орундар",
                item_text: "",
            },
        ],
    },
];



export const SchoolComponent2 = () => {
    const { translation } = useSelector(store => store.translationStore)
    const { institution, marker } = useSelector(store => store.institutionInfoStore)
    const { types } = useSelector(store => store.staticDatasStore)
    const [openModal, setOpenModal] = useState(false);
    const onClickShare = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const [openMore, setOpenMore] = useState(false);
    const onClickMore = () => {
        setOpenMore((prev) => !prev);
    };
    let institution_type = types.find(elem => +elem.id === +institution.institution_type_id)
    return (
        <SchoolContainer marker className="mt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 px-2 pt-4 border rounded blue">
                    <div className="col licei">
                        <p className="pt-0 mt-0 mb-4 profession__text__styled">
                            {
                                institution.name
                            }
                        </p>
                        <Box className="d-md-none d-block" sx={{ width: '100%', height: '400px', mb: '20px' }}>
                            <MemoizedMapLeaflet marker={marker} />
                        </Box>
                        <p className="charts__texts mb-1 margin__bottom__custom">
                            {SchoolText[translation].items[0].item_header}
                        </p>
                        <p>{institution_type?.name}</p>
                        <BoxCard>
                            <Stack direction="column" spacing={2}>
                                <Th className="mb-1">
                                    {SchoolText[translation].items[5].item_header}:
                                </Th>
                                <Td>{institution?.contact_person}</Td>
                            </Stack>
                        </BoxCard>

                        <BoxCard>
                            <Stack direction="row" flexWrap="wrap" spacing={1} alignItems="center">
                                <Th>{SchoolText[translation].items[1].item_header}</Th>
                                <Td>
                                    <IconCounter icon={man}>{institution.total_capacity}</IconCounter>
                                </Td>
                            </Stack>
                        </BoxCard>

                        <BoxCard>
                            <Stack direction="row" flexWrap="wrap" spacing={1} alignItems="center">
                                <Th>{SchoolText[translation].items[2].item_header}</Th>
                                <Td>
                                    <IconCounter icon={man}>{institution.total_capacity - institution.actual_quantity}</IconCounter>
                                </Td>
                            </Stack>
                        </BoxCard>
                        {
                            institution.first_class_capacity && <BoxCard>
                                <Stack direction="row" flexWrap="wrap" spacing={1} alignItems="center">
                                    <Th>{SchoolText[translation].items[10].item_header}</Th>
                                    <Td>
                                        <IconCounter icon={man}>{institution.first_class_capacity}</IconCounter>
                                    </Td>
                                </Stack>
                            </BoxCard>
                        }
                        <Grid container >
                            <Grid item xs={12} lg={10} sx={{ margin: "0" }}>
                                <BoxCard>
                                    <Stack direction="row" flexWrap="wrap" spacing={1} alignItems="center">
                                        <Th>{SchoolText[translation].items[6].item_header}</Th>
                                        <Td>
                                            <IconCounter icon={count}>{
                                                institution.active_staff_count
                                            }</IconCounter>

                                        </Td>
                                    </Stack>
                                </BoxCard>
                            </Grid>
                            <Grid item xs={12} lg={10} sx={{ margin: "0" }}>
                                <BoxCard>
                                    <Stack direction="column" spacing={2}>
                                        <Th className="mb-1">
                                            {SchoolText[translation].items[3].item_header}
                                        </Th>

                                        <Td className="mt-1">
                                            {institution.address}
                                        </Td>
                                    </Stack>

                                </BoxCard>
                            </Grid>
                        </Grid>
                        <div className="d-md-none d-block">
                            <p className="mb-1 mt-4 font__contacts_data">
                                {SchoolText[translation].items[9].item_header}
                            </p>
                            <p className="mt-1 hhRoRZ">
                                {`${institution.telephone}, ${institution.fax !== null ? `${institution.fax} (WhatsApp),` : ''} почта: `}
                                <a href={`mailto: ${institution.email}`}>{institution.email}</a>
                            </p>
                        </div>
                    </div>
                    {/* desktop */}
                    <div className="col">
                        <Box className="d-md-block d-none" sx={{ width: '100%', height: '400px' }}>
                            <MemoizedMapLeaflet marker={marker} />
                        </Box>

                        <div className="d-md-block d-none">
                            <p className="mb-1 mt-4 font__contacts_data">
                                {SchoolText[translation].items[9].item_header}
                            </p>

                            <p className="mt-1 hhRoRZ">
                                {`${institution.telephone}, ${institution.fax !== null ? `${institution.fax} (WhatsApp),` : ''} почта: `}
                                <a href={`mailto: ${institution.email}`}>{institution.email}</a>
                            </p>
                        </div>
                        <div className="d-none d-md-flex flex-column col-12 col-md-9 col-lg-7">
                            <BoxCard>

                            </BoxCard>
                            <BoxCard>
                                <FilterSubmit iconLeft={share} variant="like" onClick={onClickShare}>
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
                                <FilterSubmit iconLeft={share} variant="like" onClick={onClickShare}>
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
        </SchoolContainer>
    );
};

const SchoolContainer = styled('section')`
    display: none;
    ${props => props.marker && css`
        display: block;
    `}
`

const BoxCard = styled(Box)`
  margin-bottom: 15px;
`;

const Td = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
`;

const Th = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 140%;
  margin-bottom: 10px;
  margin-right: 10px;
`;
