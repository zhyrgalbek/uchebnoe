import { Box } from "@mui/system";
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
import Chart from "react-apexcharts";
import styled, { css } from "styled-components";
import { IconCounter } from "./ui/IconCounter";
import { Grid, Paper, Stack } from "@mui/material";
import child from "../assets/chart/child.svg";
import average from "../assets/FilterMap/average.svg";
import general_education from "../assets/FilterMap/general_education.svg";
import Group from "../assets/FilterMap/Group.svg";
import higher from "../assets/FilterMap/higher.svg";
import other from "../assets/FilterMap/other.svg";
import { Chart1 } from "./Graphs/Chart1";
import { Chart2 } from "./Graphs/Chart2";
import { Chart3 } from "./Graphs/Chart3";
import { Chart4 } from "./Graphs/Chart4";
import { Chart5 } from "./Graphs/Chart5";
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
    id: "basic-bar",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

export default function AnalizeCompoent() {
  return (
    <AnalizeContainer>
      <AnalizeHeader>Чуйская область</AnalizeHeader>
      <Box sx={{ marginBottom: "45px" }}>
        <Stack>
          <ChartHeader>Количество учебных заведений:</ChartHeader>
          <Stack direction="row" justifyContent="flex-start" flexWrap="wrap">
            <IconCounter icon={child}>25</IconCounter>
            <IconCounter icon={general_education}>20</IconCounter>
            <IconCounter icon={Group}>30</IconCounter>
            <IconCounter icon={average}>3</IconCounter>
            <IconCounter icon={higher}>10</IconCounter>
            <IconCounter icon={other}>3</IconCounter>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "45px" }}>
        <Stack>
          <ChartHeader>
            Уровень заполненности учебных заведений в районе по шкале:
          </ChartHeader>
          <ChartHeader primary>89%</ChartHeader>
          <GraphickLine></GraphickLine>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "45px" }}>
        <ChartHeader>Общая статистика по области:</ChartHeader>
        <Grid
          container
          direction="row"
          spacing={2}
        >
          <Grid item xs={12} md={4}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <Box>
                <Stack direction="row">
                  <Chart1 />
                </Stack>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} >
            <Stack direction="row" sx={{ height: '100%' }} >
              <Paper sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Box sx={{ width: "50%", display: "flex", alignItems: 'center' }}>
                  <Chart2 strokeWidth="0" size="85%" scale="1" />
                </Box>
                <Box sx={{ width: "50%", display: "flex", alignItems: 'center' }}>
                  <Chart2 strokeWidth="3" size="80%" scale="1.05" />
                </Box>
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction="row">
              <Paper sx={{ width: '100%', padding: '10px' }}>
                <Chart3 />
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginBottom: "45px" }}>
        <Grid container justifyContent="flex-start" spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <P>Статистика</P>
              <ChartHeader>Демография</ChartHeader>
              <Chart5 />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <P>Статистика</P>
              <ChartHeader>Динамика</ChartHeader>
              <Chart4 />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </AnalizeContainer>
  );
}

const P = styled("p")`
  /* border: 1px solid red; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #5a5a5a;
  margin-left: 0px;
  margin-bottom: 4px;
`;

const GraphickLine = styled("div")`
  height: 10px;
  max-width: 315px;
  background-color: #f0f1f1;
  position: relative;
  border-radius: 6px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    background: #6a8aff;
    border-radius: 6px;
  }
`;

const ChartHeader = styled("h4")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 24px;
  color: #292d32;
  /* margin-left: 18px; */
  /* margin-bottom: -10px; */
  ${(props) =>
    props.primary &&
    css`
      margin-bottom: 6px;
    `}
`;

const AnalizeHeader = styled("h3")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  color: #292d32;
  margin-bottom: 30px;
`;

const AnalizeContainer = styled("div")`
  border: 1px solid #dae2ff;
  border-radius: 6px;
  padding: 30px;
  margin: 0;
  margin-bottom: 86px;
  margin-top: 70px;
`;
