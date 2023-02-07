import styled from "styled-components";
import { FilterButton } from "../components/FilterButton";
import all from "../assets/FilterMap/all.svg";
import allblue from "../assets/FilterMap/allblue.svg";
import average from "../assets/FilterMap/average.svg";
import averagewhite from "../assets/FilterMap/averagewhite.svg";
import children from "../assets/FilterMap/childrens.svg";
import childrenswhite from "../assets/FilterMap/childrenswhite.svg";
import general_education from "../assets/FilterMap/general_education.svg";
import general_educationwhite from "../assets/FilterMap/general_educationwhite.svg";
import man from "../assets/IconCounter/man.svg";
import woman from "../assets/IconCounter/woman.svg";
import boy from "../assets/IconCounter/boy.svg";
import girl from "../assets/IconCounter/girl.svg";
import count from "../assets/IconCounter/count.svg";
import search from "../assets/Filter/search.svg";
import like from "../assets/IconCounter/like.svg";
import share from "../assets/IconCounter/share.svg";
import filter from "../assets/IconCounter/filter.svg";
import Group from "../assets/FilterMap/Group.svg";
import Groupwhite from "../assets/FilterMap/Groupwhite.svg";
import higher from "../assets/FilterMap/higher.svg";
import higherwhite from "../assets/FilterMap/higherwhite.svg";
import other from "../assets/FilterMap/other.svg";
import otherwhite from "../assets/FilterMap/otherwhite.svg";
import { Stack } from "@mui/system";
import { MapLeaflet } from "../components/MapLeaflet/MapLeaflet";
import { Filter } from "../components/Filter";
import { AccordionFilter } from "../components/ui/AccordionFilter";
import { useState } from "react";
import AnalizeCompoent from "../components/AnalizeComponent";
import SchoolComponent from "../components/SchoolComponent";
import { ButtonFilter } from "../components/ButtonFilter";
import { TopFilter } from "../components/TopFilter";
import { Paper } from "@mui/material";
import { SchoolComponent2 } from "../components/SchoolComponent2";
// import schoolImage from '../assets/empty-classNameroom_elementary-school-middle-school-high-school.webp'

const data = [
  {
    text: "Дошкольное образование",
    icon: childrenswhite,
    icon2: children,
  },
  {
    text: "Общеобразовательные",
    icon: general_educationwhite,
    icon2: general_education,
  },
  {
    text: "Начально-профессиональные",
    icon: Groupwhite,
    icon2: Group,
  },
  {
    text: "Средне-профессиональные",
    icon: averagewhite,
    icon2: average,
  },
  {
    text: "Высшее профессиональное",
    icon: higherwhite,
    icon2: higher,
  },
  {
    text: "Другие учреждения",
    icon: otherwhite,
    icon2: other,
  },
];

export const StaticPage = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const onChangeAccordion = () => {
    setAccordionOpen((prev) => !prev);
  };
  return (
    <>
      <main className="devider">
        <div className="container">
          <div className="title__text">
            <h1 className="header__zag">
              Статистические данные по учебным заведениям кыргызской республики
            </h1>
          </div>
          <div className="second_texts">
            <h3 className="third__title__text">
              Классификация учебных заведений
            </h3>
          </div>
          <TopFilter />
          <div className="map__page">
            <h2 className="second__title__text text-center">Тепловая карта Кыргызстана</h2>
            <Paper sx={{ width: '100%', height: '100%' }}>
              <MapLeaflet />
            </Paper>
          </div>
        </div>
      </main>

      <section>
        <div className="container">
          <Filter />
        </div>
      </section>

      <section className="container px-0">
        <SchoolComponent2 />
      </section>
      <section>
        <div className="container px-0">
          <AnalizeCompoent />
        </div>
      </section>
    </>
  );
};

const Icon = styled("div")`
  border: 1px solid red;
`;
