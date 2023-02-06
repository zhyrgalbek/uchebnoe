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
import people_twice from "../assets/IconCounter/people_twice.svg";
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
import { MapLeaflet } from "../components/MapLeaflet";
import { Filter } from "../components/Filter";
import { AccordionFilter } from "../components/ui/AccordionFilter";
import { useState } from "react";
import AnalizeCompoent from "../components/AnalizeComponent";
import SchoolComponent from "../components/SchoolComponent";
import { ButtonFilter } from "../components/ButtonFilter";
import { TopFilter } from "../components/TopFilter";
import { Paper } from "@mui/material";
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
            <h2 className="second__title__text">Тепловая карта Кыргызстана</h2>
            <h3 className="third__title__text">
              Классификация учебных заведений
            </h3>
          </div>
          <TopFilter />
          <div className="map__page">
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
      <section className="mt-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2  p-4 border rounded blue">
            <div className="col licei">
              <p className="pt-0 mt-0 third__title__text">
                Профессиональный лицей №16
              </p>
              <img
                src="https://www.brookings.edu/wp-content/uploads/2020/05/empty-classroom_elementary-school-middle-school-high-school.jpg"
                className="img-thumbnail border-0 pt-0 mt-0 d-block d-md-none"
                alt=""
              />
              <p className="charts__texts">Тип учреждения:</p>
              <p>Государственный</p>
              <div className="box d-flex align-items-center mb-1 my-md-4">
                <p className="mb-0 d-flex charts__texts align-items-center pb-0">
                  Общая вместимость:
                  <div className="mx-3 icon__info__custom border border-1 border-primary rounded-2 d-none d-md-flex  justify-content-around align-items-center">
                    <img src={man} alt="example image" />
                    150
                  </div>
                  <div className="mx-3 icon__info__custom border border-1 border-primary rounded-2 d-none d-md-flex  justify-content-around align-items-center">
                    <img src={woman} alt="example image" />
                    35
                  </div>
                </p>
              </div>
              <div className="icon__info__custom border border-1 border-primary rounded-2 d-flex d-md-none  justify-content-around align-items-center">
                <img src={people_twice} alt="" />
                150
              </div>
              <div className="box d-flex align-items-center mb-1 mt-4 my-md-4">
                <p className="mb-0 d-flex charts__texts align-items-center pb-0">
                  Количество свободных мест:
                  <div className="mx-3 icon__info__custom border border-1 border-primary rounded-2 d-none d-md-flex  justify-content-around align-items-center">
                    <img src={boy} alt="example image" />
                    41
                  </div>
                  <div className="mx-3 icon__info__custom border border-1 border-primary rounded-2 d-none d-md-flex  justify-content-around align-items-center">
                    <img src={girl} alt="example image" />
                    35
                  </div>
                </p>
              </div>
              <div className="icon__info__custom border border-1 border-primary rounded-2 d-flex d-md-none mb-3 justify-content-around align-items-center">
                <img src={people_twice} alt="" />
                150
              </div>
              <div className="row" id="acc_bg__custom">
                <div
                  className="accordion accordion-flush col-12 col-md-10"
                  id="accordionExample3"
                >
                  <div className="accordion-item rounded-3">
                    <h2
                      className="accordion-header text-center py-0"
                      id="headingThree"
                    >
                      <button
                        className="text-center btn btn-sm py-2 rounded-2 text-white btn-primary justify-content-center accordion-button border-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Подробнее
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="mt-4 accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="accordion-body p-0">
                        <ul className="w-100 rounded-0 p-0 m-0 list-unstyled">
                          <li className="w-100 rounded-0 px-0">
                            <div className="d-md-block d-none">
                              <p className="mb-0 mt-4 charts__texts">
                                Контактные данные:
                              </p>
                              <p>
                                +996 312 00 80 00, +996 700 00 80 00 (WhatsApp),
                                почта litsey16@bk.ru
                              </p>
                            </div>
                          </li>
                          <li className="w-100 rounded-0 px-0">
                            <p className="mb-0 charts__texts">
                              Местоположение:
                            </p>

                            <p>
                              Чуйская область, Аламудунский район, село
                              Жайылган, ул Аманова 22
                            </p>
                          </li>
                          <li className="w-100 rounded-0 px-0">
                            <p className="mb-0 charts__texts">Время работы:</p>

                            <p>9:00 - 17:30</p>
                          </li>
                          <li className="w-100 rounded-0 px-0">
                            <p className="mb-0 charts__texts">
                              ФИО Директора/Руководителя
                            </p>

                            <p>Баланчаев Баланча Баланчаевич</p>
                          </li>
                          <li>
                            <div className="box my-4">
                              <p className="mb-2 charts__texts">
                                Количество преподавателей:
                              </p>
                              <div className="icon__info__custom border border-1 border-primary rounded-2 d-flex  justify-content-around align-items-center">
                                <img src={count} alt="example image" />
                                40
                              </div>
                            </div>
                          </li>
                          <li className="w-100 rounded-0 px-0">
                            <p className="mb-0 charts__texts">
                              Наличие столовой:
                            </p>
                            <p>Имеется</p>
                          </li>
                          <li className="w-100 rounded-0 px-0">
                            <p className="mb-0 charts__texts">
                              Наличие спортивного зала:
                            </p>
                            <p>Имеется</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                src="https://www.brookings.edu/wp-content/uploads/2020/05/empty-classroom_elementary-school-middle-school-high-school.jpg"
                className="img-thumbnail border-0 pt-0 mt-0 d-none d-md-block"
                alt=""
              />
              <div className="d-md-block d-none">
                <p className="mb-0 mt-4 charts__texts">Контактные данные:</p>
                <p>
                  +996 312 00 80 00, +996 700 00 80 00 (WhatsApp), почта{" "}
                  <a href="mailto: litsey16@bk.ru">litsey16@bk.ru</a>
                </p>
              </div>
              <div className="d-none d-md-flex flex-column col-12 col-md-9 col-lg-7">
                <button className="btn btn-primary text-white text-center mb-4 w-100 like">
                  <img src={like} alt="image" />
                  <span className="ms-1">490</span>
                  <span className="ms-3">Поставить лайк</span>
                </button>
                <button className="btn btn-primary text-white text-center px-5 w-100 like">
                  <img src={share} alt="image" />
                  <span className="ms-3">Поделиться</span>
                </button>
              </div>
              <div className="d-flex d-md-none flex-column mt-4">
                <button className="btn btn-primary text-white text-center mb-4 w-100">
                  <img src={like} alt="image" />
                  <span className="ms-1">490</span>
                  <span className="ms-3">Поставить лайк</span>
                </button>
                <button className="btn btn-primary text-white text-center px-5 w-100">
                  <img src={share} alt="image" />
                  <span className="ms-3">Поделиться</span>
                </button>
              </div>
            </div>
          </div>
        </div>
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
