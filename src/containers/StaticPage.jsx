import styled from "styled-components";
import { MapLeaflet } from "../components/MapLeaflet/MapLeaflet";
import { Filter } from "../components/Filter";
import { useState } from "react";
import AnalizeCompoent from "../components/AnalizeComponent";
import { TopFilter } from "../components/TopFilter";
import { Paper } from "@mui/material";
import { SchoolComponent2 } from "../components/SchoolComponent2";
import { useSelector } from "react-redux";
import { FaqComponentRus } from "../components/FaqComponentRus";
import { FaqComponentKyr } from "../components/FaqComponentKyr";
// import schoolImage from '../assets/empty-classNameroom_elementary-school-middle-school-high-school.webp'

const staticText = [
  {
    header: 'Статистические данные по учебным заведениям кыргызской республики',
    first_title: 'Классификация учебных заведений',
    second_title: 'Тепловая карта Кыргызстана'
  },
  {
    header: 'Кыргыз Республикасынын билим берүү мекемелери боюнча статистикалык маалыматтар',
    first_title: 'Билим берүү мекемелеринин классификациясы',
    second_title: 'Кыргызстандын жылуулук картасы'
  },
]

export const StaticPage = () => {
  const { translation } = useSelector(store => store.translate)
  return (
    <>
      <main className="devider">
        <div className="container">
          <div className="title__text">
            <h1 className="header__zag">
              {staticText[translation].header}
            </h1>
          </div>
          <div className="second_texts">
            <h3 className="third__title__text">
              {staticText[translation].first_title}
            </h3>
          </div>
          <TopFilter />
          <div className="map__page">
            <h2 className="second__title__text text-center">
              {staticText[translation].second_title}
            </h2>
            <Paper sx={{ width: "100%", height: "100%" }}>
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
      <section className="container px-0 rounded rounded-5">
        <FaqComponentRus />
        {/* <FaqComponentKyr /> */}
      </section>
    </>
  );
};

const Icon = styled("div")`
  border: 1px solid red;
`;
