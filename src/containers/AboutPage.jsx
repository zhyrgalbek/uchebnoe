import { Grid } from "@mui/material";
import styled from "styled-components";
import { FilterSubmit } from "../components/FilerSubmit";
import BakcgroundImage from "../assets/about/HelpMin.jpg";
import flag from "../assets/about/flag.svg";
import doc from "../assets/about/doc.svg";
import collaborate from "../assets/about/collaborate.svg";
import gmail from "../assets/about/gmail.svg";
import people from "../assets/about/people.svg";
import comand from "../assets/about/comand.svg";
import { Box, Stack } from "@mui/system";

export const AboutPage = () => {
  return (
    <>
      <main className="devider">
        <div className="container">
          <div className="title__text">
            <h1>О проекте </h1>
          </div>
          <div className="container">
            <div className="row py-0 border rounded-3 border-primary blue">
              <div className="col-12 col-lg-7 px-5 py-5">
                <p className="pt-0 mt-0 title__text mb-4">
                  Мы помогаем гражданам получить точную информацию
                </p>
                <p className="about__us__text">
                  Наша задача помочь гражданам Кыргызстана удобным и легким
                  способом узнать информацию об образовательных учреждениях
                  Кыргызской республики. Для этой цели мы создали карту,
                  отображающая актуальные данные в Кыргызской республике
                </p>
                <div className="col-12 col-lg-5 ">
                  <button className="btn btn-primary text-center w-100">
                    <span className="buttons__text">Перейти к карте</span>
                  </button>
                </div>
              </div>
              <div className="col-5 px-0 mx-0 rounded-0">
                <img
                  src={BakcgroundImage}
                  className="img-thumbnail h-100 border-0 p-0 ms-auto rounded-0 d-none d-md-block"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- *TODO: features -->
            <!-- *TODO: features -->
            <!-- *TODO: features -->
            <!-- *TODO: features -->
            <!-- *TODO: features --> */}
      <section>
        <div className="container">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary p-3 rounded-pill bg-gradient fs-2 mb-4">
                <img src={flag} />
              </div>
              <h3 className="second__title__text">Featured title</h3>
              <p className="about__us__text">
                Повышение навыков цифровой грамотности и кибергигиены{" "}
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary p-3 rounded-pill bg-gradient fs-2 mb-4">
                <img src={doc} />
              </div>
              <h3 className="second__title__text">50M montly enrichments</h3>
              <p className="about__us__text">
                Содействие вовлечению в общественные дела{" "}
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary p-3 rounded-pill bg-gradient fs-2 mb-4">
                <img src={collaborate} />
              </div>
              <h3 className="second__title__text">400k User</h3>
              <p className="about__us__text">
                Усиление образования и обучение цифровому предпринимательству{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="box pe-0 pe-md-5 ">
              <h2 className="pb-2">Наша миссия</h2>
              <p className="pb-3">
                Статистическая тепловая карта разработана в рамках проекта «DigiКоnush - Построение прозрачного будущего для сельских сообществ через цифровизацию».
              </p>
              <p>
                Проект Европейского Союза «DigiКоnush - Построение прозрачного будущего для сельских сообществ через цифровизацию» реализуется Эстонским Центром Международного Развития совместно с Центром гражданских инициатив «Лидер».
              </p>
              <p>
                По сравнению со своими сверстниками в городских районах, сельская молодежь и женщины, как правило, находятся в невыгодном положении из-за множества факторов, в том числе цифрового разрыва, низкой доступности государственных услуг и отсутствия перспектив качественного образования и достойного труда.
              </p>
              <p>
                Деятельность проекта направлена на продвижение использования цифровых технологий, вовлечение молодежи, женщин, органов местного самоуправления, организаций гражданского общества, сельского бизнеса в процесс цифровой трансформации, а также повышение потенциала образовательных организаций.
              </p>
            </div>
            <div className="box">
              <div className="row g-5 row-cols-1 row-cols-lg-1">
                <div className="p-3 col bg__abouts__us__features d-flex align-items-start">
                  <div className="mx-auto my-auto icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src={comand} />
                  </div>
                  <div>
                    <h3 className="fs-2 about_header">Команда</h3>
                    <p className="about_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </p>
                  </div>
                </div>
                <div className="p-3 col bg__abouts__us__features d-flex align-items-start">
                  <div className="mx-auto my-auto icon-square  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src={people} />
                  </div>
                  <div>
                    <h3 className="fs-2 about_header">Совет</h3>
                    <p className="about_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </p>
                  </div>
                </div>
                <div className="p-3 col bg__abouts__us__features d-flex align-items-start">
                  <div className="mx-auto my-auto icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src={gmail} />
                  </div>
                  <div>
                    <h3 className="fs-2 about_header">Пресс-служба</h3>
                    <p className="about_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
