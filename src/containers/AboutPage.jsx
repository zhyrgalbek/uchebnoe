import { Grid } from "@mui/material";
import styled from "styled-components";
import { FilterSubmit } from "../components/FilerSubmit";
// import BakcgroundImage from "../assets/about/HelpMin.jpg";
import flag from "../assets/about/flag.svg";
import doc from "../assets/about/doc.svg";
import collaborate from "../assets/about/collaborate.svg";
import gmail from "../assets/about/gmail.svg";
import people from "../assets/about/people.svg";
import comand from "../assets/about/comand.svg";
// import BakcgroundImage from "../assets/about/top_image_about_us.jpg";
// import BakcgroundImage from "../assets/about/img1.jpg";
// import BakcgroundImage from "../assets/about/img2.jpg";
// import BakcgroundImage from "../assets/about/img3.JPG";
// import BakcgroundImage from "../assets/about/img4.JPG";
import BakcgroundImage from "../assets/about/img5.jpg";

import { useLocation, useNavigate } from "react-router";

import { Box, Stack } from "@mui/system";
import { useSelector } from "react-redux";

const AboutText = [
  {
    title: 'О проекте',
    aboutUsHeader: 'Мы помогаем гражданам получить точную информацию',
    aboutUsText: `Наша задача помочь гражданам Кыргызстана удобным и легким 
    способом узнать информацию об образовательных учреждениях
    Кыргызской республики.Для этой цели мы создали карту,
    отображающая актуальные данные в Кыргызской республике`,
    icon1: {
      header: 'ЦИФРОВАЯ ГРАМОТНОСТЬ', text: `Повышение навыков цифровой грамотности и кибергигиены`
    },
    icon2: { header: 'УЧАСТИЕ В СООБЩЕСТВЕ', text: `Содействие вовлечению в общественные дела` },
    icon3: { header: 'ЦИФРОВИЗАЦИЯ', text: `Усиление образования и обучение цифровому предпринимательству` },
    misson: [`НАША МИССИЯ`, `Статистическая тепловая карта разработана в рамках проекта «DigiКоnush - Построение прозрачного будущего для сельских сообществ через цифровизацию».`, `Проект Европейского Союза «DigiКоnush - Построение прозрачного будущего для сельских сообществ через цифровизацию» реализуется Эстонским Центром Международного Развития совместно с Центром гражданских инициатив «Лидер».`, `По сравнению со своими сверстниками в городских районах, сельская молодежь и женщины, как правило, находятся в невыгодном положении из-за множества факторов, в том числе цифрового разрыва, низкой доступности государственных услуг и отсутствия перспектив качественного образования и достойного труда.`, `Деятельность проекта направлена на продвижение использования цифровых технологий, вовлечение молодежи, женщин, органов местного самоуправления, организаций гражданского общества, сельского бизнеса в процесс цифровой трансформации, а также повышение потенциала образовательных организаций.`]
  },
  {
    title: 'Долбоор жөнүндө',
    aboutUsHeader: `ЖАРАНДАРДЫН ТАК МААЛЫМАТ АЛУУСУНА ЖАРДАМ БЕРИБИЗ`,
    aboutUsText: `Биздин милдет - Кыргызстандын жарандарына ыңгайлуу жана оңой жардам берүү
    билим берүү мекемелери жөнүндө маалымат алуу үчүн жол
    Кыргыз Республикасы. Бул үчүн биз карта түздүк,
    Кыргыз Республикасындагы актуалдуу маалыматтарды көрсөтүү`,
    icon1: {
      header: 'Санариптик САБАТТУУЛУК',
      text: `Санарип сабаттуулуктун жана кибергигиенанын көндүмдөрүн жогорулатуу`
    },
    icon2: { header: 'КООМДУК КАТЫШУУ', text: `Коомдук иштерге катышууга көмөктөшүү` },
    icon3: { header: 'ЦИФРОВИЗАЦИЯ', text: `Билим берүүнү күчөтүү жана санариптик ишкердикке окутуу` },
    misson: [`БИЗДИН МИССИЯБЫЗ`, `Статистикалык жылуулук картасы «DigiКоnush- санариптештирүү аркылуу элет коомчулуктары үчүн таза, айкын келечек куруу» долбоорунун алкагында иштелип чыккан.`, `Европа Биримдигинин «DigiКоnush - санариптештирүү аркылуу элет коомчулуктары үчүн таза, айкын келечек куруу» долбоору Эстониянын эл аралык Өнүктүрүү Борбору тарабынан "Лидер" атуулдук демилгелер борбору менен биргеликте ишке ашырылууда.`, `Шаар жерлериндеги теңтуштарына салыштырмалуу элеттик жаштар жана аялдар көптөгөн факторлордун, анын ичинде санариптик ажырымдын, мамлекеттик кызмат көрсөтүүлөрдүн жеткиликтүүлүгүнүн төмөндүгүнөн жана сапаттуу билим берүүнүн менен татыктуу жумуштун жоктугунан улам начар абалда болушат.`, `Долбоордун ишмердүүлүгү санариптик технологияларды колдонууну илгерилетүүгө, жаштарды, аялдарды, жергиликтүү өз алдынча башкаруу органдарын, жарандык коом уюмдарын, элеттик бизнести санариптик трансформация процессине тартууга, ошондой эле билим берүү уюмдарынын потенциалын жогорулатууга багытталган.`]
  }
]

export const AboutPage = () => {
  const { translation } = useSelector(store => store.translate)
  const navigate = useNavigate();
  const onClickNav = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <main className="devider">
        <div className="container">
          <div className="my-4">
            <h1 className="title__text">{AboutText[translation].title}</h1>
          </div>
          <div className="container">
            <div className="row py-0 border rounded-3 border-primary blue">
              <div className="col-12 col-lg-7 px-5 py-5 my-auto">
                <p className="pt-0 mt-0 title__text mb-4">
                  {AboutText[translation].aboutUsHeader}
                </p>
                <p className="about__us__text">
                  {AboutText[translation].aboutUsText}
                </p>
                <div className="col-12 col-lg-5 ">
                  <a
                    className="btn btn-primary text-center w-100"
                    href="index.html"
                    onClick={onClickNav}
                  >
                    <span className="buttons__text">Перейти к карте</span>
                  </a>
                </div>
              </div>
              <div className="col-5 px-0 mx-0 rounded-0">
                <img
                  src={BakcgroundImage}
                  className="img-thumbnail h-100 border-0 p-0 ms-auto rounded-2 d-none d-md-block"
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
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary p-3 rounded-pill bg-gradient mb-4">
                <img src={flag} />
              </div>
              <h3 className="second__title__text">{AboutText[translation].icon1.header}</h3>
              <p className="about__us__text">
                {AboutText[translation].icon1.text}
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary p-3 rounded-pill bg-gradient mb-4">
                <img src={collaborate} />
              </div>
              <h3 className="second__title__text">{AboutText[translation].icon2.header}</h3>
              <p className="about__us__text">
                {AboutText[translation].icon2.text}
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary p-3 rounded-pill bg-gradient mb-4">
                <img src={doc} />
              </div>
              <h3 className="second__title__text">{AboutText[translation].icon3.header}</h3>
              <p className="about__us__text">
                {AboutText[translation].icon3.text}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="box pe-0 pe-md-5 ">
              <h2 className="pb-2 title__text">{AboutText[translation].misson[0]}</h2>
              <p className="pb-3">
                {AboutText[translation].misson[1]}
              </p>
              <p>
                {AboutText[translation].misson[2]}
              </p>
              <p>
                {AboutText[translation].misson[3]}
              </p>
              <p>
                {AboutText[translation].misson[4]}
              </p>
            </div>
            <div className="box">
              <div className="row g-5 row-cols-1 row-cols-lg-1">
                <div className="p-3 col bg__abouts__us__features d-flex align-items-start">
                  <div className="mx-auto my-auto icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src={comand} />
                  </div>
                  <div>
                    <h3 className="about_header">Команда</h3>
                    <p className="about_text">
                      Наша команда обладает высокими профессиональными навыками
                      для достижения общей цели."{" "}
                    </p>
                  </div>
                </div>
                <div className="p-3 col bg__abouts__us__features d-flex align-items-start">
                  <div className="mx-auto my-auto icon-square  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src={people} />
                  </div>
                  <div>
                    <h3 className="about_header">Совет</h3>
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
                    <h3 className="about_header">Пресс-служба</h3>
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
