import React from 'react'
import { Box, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { FilterButton } from "../FilterButton";
import { AccordionFilter } from "../ui/AccordionFilter";
import { ShkolaRus } from './ShkolaRus';
import { SadikRus } from './SadikRus';
import { ShkolaKyr } from './ShkolaKyr';
import { SadikKyr } from './SadikKyr';

const ButtonShkola = ({ header, text, active, ...props }) => {
    return <Paper sx={{ marginBottom: '20px', overflow: 'hidden' }} >
        <ButtonShkolaBlock {...props} active={active}>
            <Buttonheader>{header}</Buttonheader>
            <ButtonText>{text}</ButtonText>
        </ButtonShkolaBlock>
    </Paper>
}

const ButtonText = styled('p')`
    font-size: 1rem;
  `

const Buttonheader = styled('h3')`
    font-size: 18px;
    color: #6A8AFF;
  `

const ButtonShkolaBlock = styled('div')`
    /* border: 1px solid red; */
    padding: 20px;
    /* width: 350px; */
    /* background: #fff; */
    /* border: none; */
    cursor: pointer;
    ${props => props.active && css`
        background: #6A8AFF;
        color: #fff;
        & > h3{
            color: #fff;
        }
    `}
  `

const buttonData = {
    shkola: [
        {
            header: 'Школа',
            text: 'Ответы на часто задаваемые вопросы при подачи заявки в школу'
        },
        {
            header: 'Мектеп',
            text: 'Мектепке тапшырууда көп берилүүчү суроолорго жооптор'
        },
    ],
    sadik: [
        {
            header: 'Детский сад',
            text: 'Ответы на часто задаваемые вопросы при подачи заявки в детский сад'
        },
        {
            header: 'Бала бакча',
            text: 'Бала бакчага тапшырууда көп берилүүчү суроолорго жооптор'
        }
    ]
}


export const FaqComponent = () => {
    const { translation } = useSelector(store => store.translate)
    const [showFaq, setShowFaq] = useState(0);
    const [accordionOpen, setAccordionOpen] = useState(false);
    const onChangeAccordion = () => {
        setAccordionOpen(prev => !prev)
    }
    const onClickBtn = (id) => {
        setShowFaq(id)
    }
    return (
        <>
            <AccordionFilter onClick={onChangeAccordion} header={<FilterButton primary active={accordionOpen} mobile toggle>Часто задаваемые вопросы</FilterButton>}>
                <Grid container spacing={3} sx={{ padding: '20px' }}>
                    <Grid item xs={12} md={3}>
                        <ButtonShkola active={showFaq === 0} onClick={() => onClickBtn(0)} header={buttonData.shkola[translation].header} text={buttonData.shkola[translation].text} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <ButtonShkola active={showFaq === 1} onClick={() => onClickBtn(1)} header={buttonData.sadik[translation].header} text={buttonData.sadik[translation].text} />
                    </Grid>
                </Grid>
                {
                    showFaq === 0 ? <Box sx={{ px: 2, py: 2, pb: 5 }}>
                        {
                            translation === 0 ? <ShkolaRus /> : <ShkolaKyr />
                        }
                    </Box> : <Box sx={{ px: 2, py: 2, pb: 5 }}>
                        {
                            translation === 0 ? <SadikRus /> : <SadikKyr />
                        }
                    </Box>
                }
            </AccordionFilter>
        </>
    );
};