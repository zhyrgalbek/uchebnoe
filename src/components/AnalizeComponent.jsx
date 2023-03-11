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
import { BarChartMax } from "./Graphs/BarChartMax";
import { BarChartfree } from "./Graphs/BarChartfree";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


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

function getRegionName(arr) {
  let region = 'Кыргызстан';
  arr.forEach((elem) => {
    if (elem.type === 'region' && elem.value !== '') {
      if (+elem.value === 2 || +elem.value === 5) {
        region = elem.text;
        return;
      }
      region = `${elem.text} область`;
    }
    if (elem.type === 'areas' && elem.value !== '') {
      region = getRegionText(elem.text)
    }
  })
  return region;
}

function getRegionText(text) {
  if (text[0] === 'г' && text[1] === '.') {
    return text;
  }
  if (text[text.length - 1] === 'н' && text[text.length - 2] === '-' && text[text.length - 3] === 'р') {
    let arr = text.split('');
    let length = arr.length;
    let idx = length - 3;
    let newArr = arr.splice(0, idx);
    let newText = newArr.join('');
    return newText + 'район'
  }
}

function getColInstitutions(institutions) {
  let one = [];
  let two = [];
  let three = [];
  let foure = [];
  let five = [];
  let sixe = [];
  institutions?.forEach(elem => {
    // 1, 2, 3, 4, 6
    if (elem.institution_type_id === '1') {
      one.push(elem)
      return;
    }
    if (elem.institution_type_id === '2') {
      two.push(elem);
      return;
    }
    if (elem.institution_type_id === '3') {
      three.push(elem)
      return;
    }
    if (elem.institution_type_id === '4') {
      foure.push(elem);
      return;
    }
    if (elem.institution_type_id === '6') {
      five.push(elem)
      return;
    }
    return sixe.push(elem)
  })
  return [one, two, three, foure, five, sixe];
}

function getCols(arr) {
  if (arr) {
    if (arr.length !== 0) {
      return arr.length;
    }
  }
  return 0;
}

function getSrednee(arr) {
  let result = 0;
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach(elem => {
    if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
      return;
    }
    result += +elem.fullness
  })
  return result / arr.length;
}

function getOccup(arr) {
  let s = 0;
  arr.forEach((elem) => {
    s += elem;
  })
  let k = s / arr.length;
  return k.toFixed(2)
}

export default function AnalizeCompoent() {
  // const { translation } = useSelector(store => store.translate)
  const { translation } = useSelector(store => store.translationStore)
  const { areas, regions, types } = useSelector(store => store.staticDatasStore)
  const { requestFilter } = useSelector(store => store.requestSlicesStore)
  const { institutions, status } = useSelector(store => store.institutionsStore)
  const { occupancyInstitutes, occupancyCols } = useSelector(store => store.analizeSlicesStore)
  const [name, setName] = useState();
  const [instiTypeCol, setInstiTypesCol] = useState([])
  const [employmentAverage, setEmploymentAverage] = useState(0)
  // console.log(instiTypeCol)
  // console.log(types)
  useEffect(() => {
    if (status === 'fulfilled') {
      setInstiTypesCol(getColInstitutions(institutions));
      setName(getRegionName(requestFilter));
      setEmploymentAverage(getSrednee(institutions));
    }
  }, [status])
  // console.log(getOccup(occupancyCols))
  return (
    <AnalizeContainer>
      {/* <AnalizeHeader>{analizeText[translation].header}</AnalizeHeader> */}
      <AnalizeHeader>{name}</AnalizeHeader>
      <Box sx={{ marginBottom: "45px" }}>
        <Stack>
          <ChartHeader>{analizeText[translation].items[0].item_header}</ChartHeader>
          <Stack direction="row" justifyContent="flex-start" flexWrap="wrap">
            <IconCounter icon={child}>{getCols(instiTypeCol[0])}</IconCounter>
            <IconCounter icon={general_education}>{getCols(instiTypeCol[1])}</IconCounter>
            <IconCounter icon={Group}>{getCols(instiTypeCol[2])}</IconCounter>
            <IconCounter icon={average}>{getCols(instiTypeCol[3])}</IconCounter>
            <IconCounter icon={higher}>{getCols(instiTypeCol[4])}</IconCounter>
            <IconCounter icon={other}>{getCols(instiTypeCol[5])}</IconCounter>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "45px" }}>
        <Stack>
          <ChartHeader>
            {analizeText[translation].items[1].item_header}
          </ChartHeader>
          <ChartHeader primary>{employmentAverage.toFixed(2)}%</ChartHeader>
          <GraphickLine data={employmentAverage}></GraphickLine>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "45px" }}>
        <ChartHeader>{analizeText[translation].items[2].item_header}</ChartHeader>
        <Grid
          container
          direction="row"
          spacing={2}
        >
          {/* <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <Box>
                <Stack direction="row">
                  <Chart1 />
                </Stack>
              </Box>
            </Paper>
          </Grid> */}
          <Grid item xs={12} md={6} lg={6} >
            <Stack direction="row" sx={{ height: '100%' }} >
              <Paper sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                {occupancyCols.length !== 0 && <Chart2 strokeWidth="0" label="Занятость: " width="100%" height="400" size="60%" scale="1" series={occupancyCols} occupation={employmentAverage} />
                }
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={6} >
            <Paper sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Stack direction="row" sx={{ height: '100%' }} >
                {occupancyCols.length !== 0 && <Chart2 strokeWidth="3" label="вместимость: " width="100%" height="400" size="60%" scale="1.05" series={occupancyCols} occupation={employmentAverage} />
                }
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <Stack direction="row">
                <Chart1 />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <Stack direction="row">
                <BarChartMax />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <Stack direction="row">
                <BarChartfree />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ marginBottom: "45px" }}>
        <Grid container justifyContent="flex-start" spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <P>Статистика</P>
              <ChartHeader>Демография</ChartHeader>
              <Chart5 />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ width: '100%', padding: '10px' }}>
              <P>Статистика</P>
              <ChartHeader>Динамика</ChartHeader>
              <Chart4 />
            </Paper>
          </Grid>
        </Grid>
      </Box> */}
    </AnalizeContainer >
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
    width: 20%;
    background: #6a8aff;
    border-radius: 6px;
    transition: 0.2s ease;
    ${props => props.data && css`
      width: ${props.data > 100 ? 100 : props.data}%;
`}
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
