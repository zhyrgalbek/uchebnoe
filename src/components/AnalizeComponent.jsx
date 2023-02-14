import { Box } from "@mui/system";
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
import { useSelector } from "react-redux";


const analizeText = [
  {
    header: 'Чуйская область',
    items: [
      {
        item_header: 'Количество учебных заведений:',
      },
      {
        item_header: 'Уровень заполненности учебных заведений в районе по шкале:',
      },
      {
        item_header: 'Общая статистика по области:',
      },
    ]
  },
  {
    header: 'Чуй облусу',
    items: [
      {
        item_header: 'Окуу жайлардын саны:',
      },
      {
        item_header: 'Райондогу окуу жайлардын  орун толтуруу деңгээли шкала менен:',
      },
      {
        item_header: 'Облус боюнча жалпы статистика:',
      },
    ]
  },
]

export default function AnalizeCompoent() {
  const { translation } = useSelector(store => store.translate)
  return (
    <AnalizeContainer>
      <AnalizeHeader>{analizeText[translation].header}</AnalizeHeader>
      <Box sx={{ marginBottom: "45px" }}>
        <Stack>
          <ChartHeader>{analizeText[translation].items[0].item_header}</ChartHeader>
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
            {analizeText[translation].items[1].item_header}
          </ChartHeader>
          <ChartHeader primary>89%</ChartHeader>
          <GraphickLine></GraphickLine>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "45px" }}>
        <ChartHeader>{analizeText[translation].items[2].item_header}</ChartHeader>
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
  font-size: 0.75rem;
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
  font-size: 1rem;
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
  font-size: 1.125rem;
  line-height: 130%;
  color: #292d32;
  margin-bottom: 1.25rem;
`;

const AnalizeContainer = styled("div")`
  border: 1px solid #dae2ff;
  border-radius: 6px;
  padding: 20px;
  margin: 0;
  margin-bottom: 86px;
  margin-top: 70px;
`;
