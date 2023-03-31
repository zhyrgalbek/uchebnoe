import styled from "styled-components";
import { MapLeaflet, MemoizedMapLeaflet } from "../components/MapLeaflet/MapLeaflet";
import { Filter, FilterMemoized } from "../components/Filter";
import AnalizeCompoent, { AnalizeCompoentMemoized } from "../components/AnalizeComponent";
import { TopFilter, TopFilterMemoized } from "../components/TopFIlter/TopFilter";
import { Paper } from "@mui/material";
import { SchoolComponent2 } from "../components/SchoolComponent2";
import { useDispatch, useSelector } from "react-redux";
import { FaqComponent, FaqComponentMemoized } from "../components/FaqComponent/FaqComponent";
import { useEffect, useState } from "react";
import { useRef } from "react";
import SeachInstitution from "../components/SearchInstitution/SeachInstitution";
import { institutionInfoActions } from "../store/slices/institutionInfoSlices";
import { Box } from "@mui/system";

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
  const { translation } = useSelector((store) => store.translationStore);
  const { marker, status } = useSelector((store) => store.institutionInfoStore);
  // const { status: statusInstitution } = useSelector(store => store.institutionInfoStore)
  const topMapref = useRef()
  const bottomMapref = useRef()
  const [topMap, setTopMap] = useState();
  const [bottomMap, setBottomMap] = useState();
  const dispatch = useDispatch()
  // console.log(bottomMap)
  useEffect(() => {
    if (topMapref && bottomMapref) {
      setTopMap(topMapref)
      setBottomMap(bottomMapref)
    }
  }, [topMapref, bottomMapref])
  // console.log(status)
  useEffect(() => {
    if (marker) {
      var k = setTimeout(() => {
        dispatch(institutionInfoActions.setStatus('fulfilled'));
        bottomMap?.current.scrollIntoView({ block: "start", behavior: "smooth" });
      }, [2000])
    }
    return () => {
      return clearTimeout(k)
    }
  }, [marker])
  return (
    <>
      <main className="devider">
        <div className="container">
          <div className="title__text">
            <h1 className="header__zag">{staticText[translation].header}</h1>
          </div>
          <Box sx={{ mt: '15px', mb: '10px' }}>
            <SeachInstitution />
          </Box>
          <div className="second_texts">
            <h3 className="third__title__text">
              {staticText[translation].first_title}
            </h3>
          </div>
          <TopFilterMemoized />
          <div className="map__page" ref={topMapref}>
            <h2 className="second__title__text text-center" >
              {staticText[translation].second_title}
            </h2>
            {
              bottomMap && <MemoizedMapLeaflet bottomMap={bottomMap} />
            }
          </div>
        </div>
      </main>

      <section>
        <div className="container">
          {
            topMap && <FilterMemoized topMap={topMap} />
          }
        </div>
      </section>

      {
        marker && <section className="container" ref={bottomMapref}>
          <SchoolComponent2 />
        </section>
      }


      {/* <section> */}
      <div className="container">
        {/* <AnalizeCompoent /> */}
        <AnalizeCompoentMemoized />
      </div>
      {/* </section> */}
      <section className="container">
        {/* <FaqComponent /> */}
        <FaqComponentMemoized />
      </section>
      {status === 'pending' && <Preloader><span className="map2_loader"></span></Preloader>}
    </>
  );
};

const Preloader = styled('div')`
    position: fixed;
    /* background: #263038; */
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled("div")`
  border: 1px solid red;
`;
