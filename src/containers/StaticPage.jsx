import styled from "styled-components";
import { MapLeaflet } from "../components/MapLeaflet/MapLeaflet";
import { Filter } from "../components/Filter";
import AnalizeCompoent from "../components/AnalizeComponent";
import { TopFilter } from "../components/TopFIlter/TopFilter";
import { Paper } from "@mui/material";
import { SchoolComponent2 } from "../components/SchoolComponent2";
import { useSelector } from "react-redux";
import { FaqComponent } from "../components/FaqComponent/FaqComponent";

const staticText = [
  {
    header: "Статистические данные по учебным заведениям кыргызской республики",
    first_title: "Классификация учебных заведений",
    second_title: "Тепловая карта Кыргызстана",
  },
  {
    header:
      "КЫРГЫЗ РЕСПУБЛИКАСЫНЫН окуу жайлары БОЮНЧА СТАТИСТИКАЛЫК МААЛЫМАТТАР",
    first_title: "Окуу жайлардын классификациясы ",
    second_title: "Кыргызстандын жылуулук картасы",
  },
];

export const StaticPage = () => {
  const { translation, marker } = useSelector((store) => store.translate);
  return (
    <>
      <main className="devider">
        <div className="container">
          <div className="title__text">
            <h1 className="header__zag">{staticText[translation].header}</h1>
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
            <MapLeaflet />
            
          </div>
        </div>
      </main>

      <section>
        <div className="container">
          <Filter />
        </div>
      </section>
      {
        marker && <section className="container">
          <SchoolComponent2 />
        </section>
      }

      {/* <section>
        <div className="container">
          <AnalizeCompoent />
        </div>
      </section> */}
      {/* <section className="container">
        <FaqComponent />
      </section> */}
    </>
  );
};

const Icon = styled("div")`
  border: 1px solid red;
`;
