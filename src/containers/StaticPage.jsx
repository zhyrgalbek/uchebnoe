import styled from "styled-components"
import { FilterButton } from "../components/FilterButton"
import all from '../assets/FilterMap/all.svg'
import allblue from '../assets/FilterMap/allblue.svg'
import average from '../assets/FilterMap/average.svg'
import averagewhite from '../assets/FilterMap/averagewhite.svg'
import children from '../assets/FilterMap/childrens.svg'
import childrenswhite from '../assets/FilterMap/childrenswhite.svg'
import general_education from '../assets/FilterMap/general_education.svg'
import general_educationwhite from '../assets/FilterMap/general_educationwhite.svg'
import man from '../assets/IconCounter/man.svg'
import woman from '../assets/IconCounter/woman.svg'
import boy from '../assets/IconCounter/boy.svg'
import people_twice from '../assets/IconCounter/people_twice.svg'
import girl from '../assets/IconCounter/girl.svg'
import count from '../assets/IconCounter/count.svg'
import search from '../assets/Filter/search.svg'
import like from '../assets/IconCounter/like.svg'
import share from '../assets/IconCounter/share.svg'
import filter from '../assets/IconCounter/filter.svg'
import Group from '../assets/FilterMap/Group.svg'
import Groupwhite from '../assets/FilterMap/Groupwhite.svg'
import higher from '../assets/FilterMap/higher.svg'
import higherwhite from '../assets/FilterMap/higherwhite.svg'
import other from '../assets/FilterMap/other.svg'
import otherwhite from '../assets/FilterMap/otherwhite.svg'
import { Stack } from "@mui/system"
import { MapLeaflet } from "../components/MapLeaflet"
import { Filter } from "../components/Filter"
import { AccordionFilter } from "../components/ui/AccordionFilter"
import { useState } from "react"
import AnalizeCompoent from "../components/AnalizeComponent"
import SchoolComponent from "../components/SchoolComponent"
// import schoolImage from '../assets/empty-classNameroom_elementary-school-middle-school-high-school.webp'

const data = [
    {
        text: 'Дошкольное образование',
        icon: childrenswhite,
        icon2: children
    },
    {
        text: 'Общеобразовательные',
        icon: general_educationwhite,
        icon2: general_education
    },
    {
        text: 'Начально-профессиональные',
        icon: Groupwhite,
        icon2: Group
    },
    {
        text: 'Средне-профессиональные',
        icon: averagewhite,
        icon2: average
    },
    {
        text: 'Высшее профессиональное',
        icon: higherwhite,
        icon2: higher
    },
    {
        text: 'Другие учреждения',
        icon: otherwhite,
        icon2: other
    },
]

export const StaticPage = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    const onChangeAccordion = () => {
        setAccordionOpen(prev => !prev)
    }
    return (
        <>
            <main className="devider">
                <div className="container">
                    <div className="title__text">
                        <h1>Статистические данные по учебным заведениям кыргызской республики</h1>
                    </div>
                    <div className="second_texts">
                        <h2 className="second__title__text">
                            Тепловая карта Кыргызстана
                        </h2>
                        <h3 className="third__title__text">
                            Классификация учебных заведений
                        </h3>
                    </div>
                    
                    <div className="buttons__category">
                        <div className="row row-cols-1 row-cols-lg-3 g-4 d-none d-lg-flex">
                            <div className="col-lg-3">
                                <button className="btn w-100 btn-primary btn-icon text-start">
                                    <img src="" className="svg-color-change " alt="" />
                                    Все учреждения
                                </button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn w-100 btn-outline-primary btn-icon text-start">
                                    <img src="" alt="" />
                                    Дошкольное образование
                                </button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn w-100 btn-outline-primary btn-icon text-start">
                                    <img src="" alt="" />
                                    Общеобразовательные
                                </button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn w-100 btn-outline-primary btn-icon text-start">
                                    <img src="" alt="" />
                                    Начально-профессиональные
                                </button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn w-100 btn-outline-primary btn-icon text-start">
                                    <img src="" alt="" />
                                    Средне-профессиональные
                                </button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn w-100 btn-outline-primary btn-icon text-start">
                                    <img src="" alt="" />
                                    Высшее профессиональное
                                </button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn w-100 btn-outline-primary btn-icon text-start">
                                    <img src="" alt="" />
                                    Другие учреждения
                                </button>
                            </div>
                        </div>
                        <div className="row d-block d-lg-none">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item rounded-3">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="w-100 btn rounded__only__top__custom accordion-button padding__button__custom text-start btn border-primary w-100"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            <img src="" alt=""/>
                                            <span className="ms-3">Все учреждения</span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body p-0">
                                            <ul className="w-100 rounded-0 p-0 m-0">
                                                <li className="btn btn-primary text-white w-100 rounded-0 px-0"><button type="button"
                                                    className="w-100 text-start btn">
                                                    <img src="" alt="" />
                                                    <span className="ms-2 text-white">Дошкольное образование</span>
                                                </button></li>
                                                <li className="btn w-100 rounded-0 px-0"><button type="button" className="w-100 text-start btn">
                                                    <img src="" alt="" />
                                                    <span className="ms-2">Общеобразовательные</span>
                                                </button></li>
                                                <li className="btn w-100 rounded-0 px-0"><button type="button" className="w-100 text-start btn">
                                                    <img src="" alt="" />
                                                    <span className="ms-2">Начально-профессиональные</span>
                                                </button></li>
                                                <li className="btn w-100 rounded-0 px-0"><button type="button" className="w-100 text-start btn">
                                                    <img src="" alt="" />
                                                    <span className="ms-2">Средне-профессиональные</span>
                                                </button></li>
                                                <li className="btn w-100 rounded-0 px-0"><button type="button" className="w-100 text-start btn">
                                                    <img src="" alt="" />
                                                    <span className="ms-2">Высшее профессиональное</span>
                                                </button></li>
                                                <li className="btn w-100 rounded-0 px-0"><button type="button" className="w-100 text-start btn">
                                                    <img src="DD" alt="" />
                                                    <span className="ms-2">
                                                        Другие учреждения</span>
                                                </button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="map__page">
                        </div>
                    </div>
                </div>
            </main>



            <section>
                <div className="container">
                    <h4 className="third__title__text">Фильтр для точечного поиска учреждения</h4>
                    <form className="form form-cotrol">
                        <div className="row row-cols-1 row-cols-lg-3 gy-4 d-none d-md-flex">
                            <div className="col-12 col-lg-4">
                                <label className="form form-label">Обалсть</label>
                                <select className="form-select">
                                    <option selected disabled>Выберите область</option>
                                    <option value="1">One</option>
                                    <option value="1">One</option>
                                    <option value="1">One</option>
                                    <option value="1">One</option>
                                    <option value="1">One</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <label className="form-label">Регион, район</label>
                                <select className="form-select">
                                    <option selected disabled>Выберите район</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <label className="form-label">Административный округ (аймак)</label>
                                <select className="form-select">
                                    <option selected disabled>Выберите округ</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <label className="form-label">Тип учреждения</label>
                                <select className="form-select">
                                    <option selected disabled>Выберите тип</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <label className="form-label">Вид учреждения</label>
                                <select className="form-select">
                                    <option selected disabled>Выберите вид учреждения</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <label className="form-label">Цветовая шкала заполненности</label>
                                <select className="form-select">
                                    <option selected disabled>Все уровни</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <label className="form-label">Класс, курс (в зависимости от учреждения)</label>
                                <select className="form-select">
                                    <option selected disabled>Государственный</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-lg-3 gy-5 d-none d-lg-block">
                            <div className="col-12 col-lg-4">
                                <label className="form-label"></label>
                                <button className="btn btn-primary text-center w-100"><img src={search}
                                    alt=""/>Найти</button>
                            </div>
                        </div>


                        <div className="row row-cols-1 d-block d-lg-none">
                            <div className="accordion" id="accordion2">
                                <div className="accordion-item rounded-3">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="w-100 btn__custom__filters btn rounded__only__top__custom p-3 padding__button__custom text-center btn border-primary w-100"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                                            aria-controls="collapseTwo">
                                            <img src={filter} alt=""/>
                                                <span className="ms-3 text-white">Открыть фильтр</span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordion2">
                                        <div className="accordion-body gy-4 row">
                                            <div className="col-12">
                                                <label className="form-label">Область</label>
                                                <select className="form-select multiple">
                                                    <option selected disabled>Выберите область</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Регион, район</label>
                                                <select className="form-select">
                                                    <option selected disabled>Выберите район</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Административный округ (аймак)</label>
                                                <select className="form-select">
                                                    <option selected disabled>Выберите округ</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Тип учреждения</label>
                                                <select className="form-select">
                                                    <option selected disabled>Выберите тип</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Вид учреждения</label>
                                                <select className="form-select">
                                                    <option selected disabled>Выберите вид учреждения</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Цветовая шкала заполненности</label>
                                                <select className="form-select">
                                                    <option selected disabled>Все уровни</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Класс, курс (в зависимости от учреждения)</label>
                                                <select className="form-select">
                                                    <option selected disabled>Государственный</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>
                                            <div className="col-12 w-100">
                                                <button className="btn btn-primary text-center w-100"><img src="images/icons/search_icon.svg"
                                                    alt=""/><span className="buttons__text">Найти</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className="mt-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 px-3 py-5 border">
                        <div className="col">
                            <p className="pt-0 mt-0 third__title__text">Профессиональный лицей №16</p>
                            <img
                                src="https://www.brookings.edu/wp-content/uploads/2020/05/empty-classNameroom_elementary-school-middle-school-high-school.jpg"
                                className="img-thumbnail border-0 pt-0 mt-0 d-block d-md-none" alt=""/>
                                <p className="charts__texts">
                                    Тип учреждения:
                                </p>
                                <p>
                                    Государственный
                                </p>
                                <div className="box d-flex align-items-center mb-1 my-md-4">
                                    <p className="mb-0 charts__texts pb-0">
                                        Общая вместимость:
                                        <div
                                            className="mx-3 icon__info__custom border border-1 border-primary rounded-2 d-none d-md-flex  justify-content-around align-items-center">
                                                <img src={man} alt="example image"/>
                                                150
                                        </div>
                                        <div
                                            className="mx-3 icon__info__custom border border-1 border-primary rounded-2 d-none d-md-flex  justify-content-around align-items-center">
                                            <img src={woman} alt="example image"/>
                                                35
                                        </div>
                                    </p>
                                </div>
                                <div
                                    className="icon__info__custom border border-1 border-primary rounded-2 d-flex d-md-none  justify-content-around align-items-center">
                                    <img src={people_twice} alt=""/>150
                                </div>
                                <div className="box d-flex align-items-center mb-1 mt-4 my-md-4">
                                    <p className="mb-0 charts__texts">
                                        Количество свободных мест:
                                        <div
                                            className="mx-3 icon__info__custom border border-1 border-primary rounded-2 d-none d-md-flex  justify-content-around align-items-center">
                                            <img src={boy} alt="example image"/>
                                                41
                                        </div>
                                        <div
                                            className="mx-3 icon__info__custom border border-1 border-primary rounded-2 d-none d-md-flex  justify-content-around align-items-center">
                                            <img src={girl} alt="example image"/>
                                                35
                                        </div>
                                    </p>
                                </div>
                                <div
                                    className="icon__info__custom border border-1 border-primary rounded-2 d-flex d-md-none mb-3 justify-content-around align-items-center">
                                    <img src={count} alt=""/>150
                                </div>
                                <div className="row" id="acc_bg__custom">
                                    <div className="accordion accordion-flush" id="accordionExample3">
                                        <div className="accordion-item rounded-3">
                                            <h2 className="accordion-header text-center py-0" id="headingThree">
                                                <button
                                                    className="text-center btn btn-sm py-2 rounded-2 text-white btn-primary justify-content-center accordion-button border-primary"
                                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
                                                    aria-controls="collapseThree">
                                                    Подробнее
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="mt-4 accordion-collapse collapse show" aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample3">
                                                <div className="accordion-body p-0">
                                                    <ul className="w-100 rounded-0 p-0 m-0 list-unstyled">
                                                        <li className="w-100 rounded-0 px-0">
                                                            <div className="d-md-block d-none">
                                                                <p className="mb-0 mt-4 charts__texts">
                                                                    Контактные данные:</p>
                                                                <p>+996 312 00 80 00, +996 700 00 80 00 (WhatsApp), почта litsey16@bk.ru</p>
                                                            </div>
                                                        </li>
                                                        <li className="w-100 rounded-0 px-0">
                                                            <p className="mb-0 charts__texts">
                                                                Местоположение:</p>

                                                            <p>Чуйская область, Аламудунский район, село Жайылган, ул Аманова 22</p>
                                                        </li>
                                                        <li className="w-100 rounded-0 px-0">
                                                            <p className="mb-0 charts__texts">
                                                                Время работы:</p>

                                                            <p>9:00 - 17:30</p>
                                                        </li>
                                                        <li className="w-100 rounded-0 px-0">
                                                            <p className="mb-0 charts__texts">
                                                                ФИО Директора/Руководителя</p>

                                                            <p>Баланчаев Баланча Баланчаевич</p>
                                                        </li>
                                                        <li>
                                                            <div className="box  my-4">
                                                                <p className="mb-0 charts__texts">
                                                                    Количество преподавателей:
                                                                </p>
                                                                <div
                                                                    className="icon__info__custom border border-1 border-primary rounded-2 d-flex  justify-content-around align-items-center">
                                                                    <img src={count} alt="example image"/>
                                                                        40
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="w-100 rounded-0 px-0">
                                                            <p className="mb-0 charts__texts">
                                                                Наличие столовой:</p>
                                                            <p>Имеется</p>
                                                        </li>
                                                        <li className="w-100 rounded-0 px-0">
                                                            <p className="mb-0 charts__texts">
                                                                Наличие спортивного зала:</p>
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
                                src="https://www.brookings.edu/wp-content/uploads/2020/05/empty-classNameroom_elementary-school-middle-school-high-school.jpg"
                                className="img-thumbnail border-0 pt-0 mt-0 d-none d-md-block" alt=""/>
                                <div className="d-md-block d-none">
                                    <p className="mb-0 mt-4 charts__texts">
                                        Контактные данные:</p>
                                    <p>+996 312 00 80 00, +996 700 00 80 00 (WhatsApp), почта litsey16@bk.ru</p>
                                </div>
                                <div className="d-none d-md-flex flex-column">
                                    <button className="btn btn-primary text-white text-center mb-4 w-50">
                                        <img src={like} alt="image"/>
                                            <span>490</span>
                                            <span>Поставить лайк</span>
                                    </button>
                                    <button className="btn btn-primary text-white text-center px-5 w-50">
                                        <img src={share} alt="image"/>
                                            <span>Поделиться</span>
                                    </button>
                                </div>
                                <div className="d-flex d-md-none flex-column mt-4">
                                    <button className="btn btn-primary text-white text-center mb-4 w-100">
                                        <img src={like}/>
                                            <span>490</span>
                                            <span>Поставить лайк</span>
                                    </button>
                                    <button className="btn btn-primary text-white text-center px-5 w-100">
                                        <img src={share}/>
                                            <span>Поделиться</span>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Desctop = styled('div')`
    display: block;
    @media screen and (max-width: 600px){
        display: none;
    }
`

const Mobile = styled('div')`
    display: none;
    @media screen and (max-width: 600px){
        display: block;
    }
`

const MapCont = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 600px){
        left: -18px;
        right: -18px;
    }
`

const Map = styled('div')`
    /* border: 1px solid red; */
    position: relative;
    /* display: block; */
    width: 100%;
    height: 706px;
    margin: 40px 0;
    @media screen and (max-width: 600px){
        height: 360px;
    }
`

const MapFilterHeader = styled('h4')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 30px;
    @media screen and (max-width: 600px){
        font-size: 16px;
        color: #5A5A5A;
    }
`

const MapHeader = styled('h3')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 40px;
    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`

const StaticHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 130%;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 70px;
    margin-top: 70px;
    @media screen and (max-width: 600px){
        font-size: 22px;
    }
`
const StaticBlock = styled('div')`
    /* border: 1px solid red; */
`