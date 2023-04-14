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
import { CapacitybarChart } from "./Graphs/CapacitybarChart";
import React from "react";


const analizeText = [
  {
    header: 'Чуйская область',
    items: [
      {
        item_header: 'Количество учебных заведений:',
      },
      {
        item_header: 'Уровень заполненности общеобразовательных учебных заведений:',
      },
      {
        item_header: 'Общая статистика: ',
      },
      {
        item_header: 'Заполненность общеобразовательных учреждений'
      },
      {
        item_header: 'Заполненность дошкольных образовательных учреждений'
      },
      {
        item_header: 'Занятость общеобразовательных учреждений по территориальным районам'
      },
      {
        item_header: 'Количество вместимости 1-го класса общеобразовательных учреждений по территориальным районам'
      },
      {
        item_header: 'Топ-5 самых занятых общеобразовательных учреждений'
      },
      {
        item_header: 'Топ-5 самых свободных общеобразовательных учреждений'
      },
      {
        item_header: 'Уровень заполненности дошкольных образовательных учебных заведений:',
      },
      {
        item_header: 'Занятость: '
      }
    ]
  },
  {
    header: 'Чуй облусу',
    items: [
      {
        item_header: 'Окуу жайлардын саны:',
      },
      {
        item_header: 'Жалпы билим берүү мекемелерин толтуруу деңгээли:',
      },
      {
        item_header: 'Жалпы статистика: ',
      },
      {
        item_header: 'Жалпы билим берүү мекемелеринин толтуруу деңгээли:'
      },
      {
        item_header: 'Мектепке чейинки билим берүү мекемелеринин толтуруу деңгээли:'
      },
      {
        item_header: 'Аймактык округдар боюнча жалпы билим берүү мекемелерин толтуруу деңгээли:'
      },
      {
        item_header: 'Аймактык округдар боюнча билим берүү мекемелеринин 1-класска бөлүнгөн орундарынын саны'
      },
      {
        item_header: 'Топ - 5 эң көп толтурулган мекеме'
      },
      {
        item_header: 'Топ-5 орундары толо элек мекеме'
      },
      {
        item_header: 'Мектепке чейинки билим берүү мекемелерин толтуруу деңгээли:',
      },
      {
        item_header: 'толгондугу: '
      }
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
  let arr = [[], [], [], [], [], []]
  institutions?.forEach(elem => {
    if (elem.institution_type_id === '1') {
      arr[0].push(elem)
      return;
    }
    if (elem.institution_type_id === '2') {
      arr[1].push(elem)
      return;
    }
    if (elem.institution_type_id === '3') {
      arr[2].push(elem)
      return;
    }
    if (elem.institution_type_id === '4') {
      arr[3].push(elem)
      return;
    }
    if (elem.institution_type_id === '6') {
      arr[4].push(elem)
      return;
    }
    return arr[5].push(elem)
  })
  return [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]
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
  let s = 0;
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach(elem => {
    if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
      return;
    }
    s++;
    result += +elem.fullness
  })
  return result / s;
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
  const { translation } = useSelector(store => store.translationStore)
  const { areas, regions, types } = useSelector(store => store.staticDatasStore)
  const { requestFilter } = useSelector(store => store.requestSlicesStore)
  const { institutions, status } = useSelector(store => store.institutionsStore)
  const { occupancyInstitutes, generalEducationalQuantity, preschoolQuantity, occupancyCols, generalEducational, preschool } = useSelector(store => store.analizeSlicesStore)
  const [name, setName] = useState();
  const [instiTypeCol, setInstiTypesCol] = useState([])
  const [generalEducationEmpoyment, setGeneralEducationEmpoyment] = useState(0)
  const [preschoolEmployment, setPreschoolEmployment] = useState(0)
  const [employmentAverage, setEmpoymentAverage] = useState(0)
  useEffect(() => {
    if (status === 'fulfilled') {
      setInstiTypesCol(getColInstitutions(institutions));
      setName(getRegionName(requestFilter));
      setEmpoymentAverage(getSrednee([...preschool.flat(), ...generalEducational.flat()]));
      setPreschoolEmployment(getSrednee(preschool.flat()));
      setGeneralEducationEmpoyment(getSrednee(generalEducational.flat()));
    }
  }, [status])
  return (
    <AnalizeContainer>
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
          <ChartHeader primary>{generalEducationEmpoyment.toFixed(2)}%</ChartHeader>
          <GraphickLine data={generalEducationEmpoyment}></GraphickLine>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "45px" }}>
        <Stack>
          <ChartHeader>
            {analizeText[translation].items[9].item_header}
          </ChartHeader>
          <ChartHeader primary>{preschoolEmployment.toFixed(2)}%</ChartHeader>
          <GraphickLine data={preschoolEmployment}></GraphickLine>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "45px" }}>
        <ChartHeader>{analizeText[translation].items[2].item_header} {getRegionName(requestFilter)}</ChartHeader>
        <Grid
          container
          direction="row"
          spacing={2}
          alignItems="stretch"
        >
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', pb: '20px', height: '100%', pt: '10px' }}>
              <ChartHeader center>{analizeText[translation].items[3].item_header}</ChartHeader>
              <Stack direction="row" sx={{ height: '100%' }} >
                {generalEducationalQuantity.length !== 0 && <Chart2 strokeWidth="0" label={analizeText[translation].items[10].item_header} width="100%" height="400" size="60%" scale="1" series={generalEducationalQuantity} occupation={generalEducationEmpoyment} />
                }
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', pb: '20px', height: '100%', pt: '10px' }}>
              <ChartHeader center>{analizeText[translation].items[4].item_header}</ChartHeader>
              <Stack direction="row" sx={{ height: '100%' }} >
                {preschoolQuantity.length !== 0 && <Chart2 strokeWidth="3" label={analizeText[translation].items[10].item_header} width="100%" height="400" size="60%" scale="1.05" series={preschoolQuantity} occupation={preschoolEmployment} />
                }
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', padding: '10px', height: '100%' }}>
              <ChartHeader center>{analizeText[translation].items[5].item_header}</ChartHeader>
              <Stack direction="row">
                <Chart1 />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', padding: '10px', height: '100%' }}>
              <ChartHeader center>{analizeText[translation].items[6].item_header}</ChartHeader>
              <Stack direction="row">
                <CapacitybarChart />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', padding: '10px', height: '100%' }}>
              <ChartHeader center>{analizeText[translation].items[7].item_header}</ChartHeader>
              <Stack direction="row">
                <BarChartMax />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ width: '100%', padding: '10px', height: '100%' }}>
              <ChartHeader center>{analizeText[translation].items[8].item_header}</ChartHeader>
              <Stack direction="row">
                <BarChartfree />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </AnalizeContainer >
  );
}

export const AnalizeCompoentMemoized = React.memo(AnalizeCompoent)

const P = styled("p")`
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
    width: 0%;
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
  ${(props) =>
    props.primary &&
    css`
      margin-bottom: 6px;
    `}
  ${props => props.center && css`
    text-align: center;
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
