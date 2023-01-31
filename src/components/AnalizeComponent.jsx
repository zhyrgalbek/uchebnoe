import { Box } from '@mui/system';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
import Chart from 'react-apexcharts';
import styled, { css } from 'styled-components';
import { IconCounter } from './ui/IconCounter';
import { Grid, Stack } from '@mui/material';
import child from '../assets/chart/child.svg'
import average from '../assets/FilterMap/average.svg'
import general_education from '../assets/FilterMap/general_education.svg'
import Group from '../assets/FilterMap/Group.svg'
import higher from '../assets/FilterMap/higher.svg'
import other from '../assets/FilterMap/other.svg'
import { Chart1 } from './Graphs/Chart1';
import { Chart2 } from './Graphs/Chart2';
import { Chart3 } from './Graphs/Chart3';
import { Chart4 } from './Graphs/Chart4';
// import faker from 'faker';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );


// export const options = {
//     elements: {
//         bar: {
//             // border
//         }
//     },
//     layout: {
//         padding: 0
//     },
//     responsive: true,
//     plugins: {
//         legend: {
//             display: true,
//             position: 'bottom',
//             rotation: 30,
//         },
//         title: {
//             display: true,
//             text: 'Статистика демография',
//         },
//     },
// };

// const labels = ['2019', '2020', '2021', '2022'];

// export const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Мужчины',
//             data: { [2019]: 300, [2020]: 400, [2021]: 500, [2022]: 300 },
//             backgroundColor: '#3763FF',
//             barThickness: 22,
//             maxBarThickness: 15,
//         },
//         {
//             label: 'Женщины',
//             data: { [2019]: 230, [2020]: 250, [2021]: 350, [2022]: 50 },
//             backgroundColor: '#FD9588',
//             barThickness: 22,
//             maxBarThickness: 15,
//         },
//     ],
// };

const options = {
    chart: {
        id: "basic-bar"
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
}
const series = [
    {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
]

export default function AnalizeCompoent() {
    return <AnalizeContainer>
        <AnalizeHeader>Чуйская область</AnalizeHeader>
        <Box sx={{ marginBottom: '45px' }}>
            <Stack>
                <ChartHeader>Количество учебных заведений:</ChartHeader>
                <Stack direction="row" spacing="15px">
                    <IconCounter icon={child} >25</IconCounter>
                    <IconCounter icon={general_education} >20</IconCounter>
                    <IconCounter icon={Group} >30</IconCounter>
                    <IconCounter icon={average} >3</IconCounter>
                    <IconCounter icon={higher} >10</IconCounter>
                    <IconCounter icon={other} >3</IconCounter>
                </Stack >
            </Stack>
        </Box>
        <Box sx={{ marginBottom: '45px' }}>
            <Stack>
                <ChartHeader>Уровень заполненности учебных заведений в районе по шкале:</ChartHeader>
                <ChartHeader primary>89%</ChartHeader>
                <GraphickLine></GraphickLine>
            </Stack>
        </Box>
        <Box sx={{ marginBottom: '45px' }}>
            <ChartHeader>Общая статистика по области:</ChartHeader>
            <Grid container alignItems="center" spaing="0">
                <Grid item md={4}>
                    <Box>
                        <Stack direction="row">
                            <Box>
                                <Chart1 />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Grid container>
                        <Grid item md={6}>
                            <Chart2 />
                        </Grid>
                        <Grid item md={6}>
                            <Chart2 />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4}>
                    <Stack direction="row">
                        <Chart3 />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ marginBottom: '45px' }}>
            <ChartHeader>Динамика</ChartHeader>
            <Grid container>
                <Grid item md={4}>
                    <Chart4 />
                </Grid>
            </Grid>
        </Box>
    </AnalizeContainer>
}

const GraphickLine = styled('div')`
    height: 10px;
    width: 315px;
    background-color: #F0F1F1;
    position: relative;
    border-radius: 6px;
    &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 50%;
        background: #6A8AFF;
        border-radius: 6px;
    }
`

const ChartHeader = styled('h4')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 24px;
    color: #292D32;
    ${props => props.primary && css`
        margin-bottom: 6px;
    `}
`

const AnalizeHeader = styled('h3')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    color: #292D32;
    margin-bottom: 30px;
`

const AnalizeContainer = styled('div')` 
    border: 1px solid #3763FF;
    border-radius: 6px;
    padding: 30px;
    margin-bottom: 86px;
`