import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import logo from "../../assets/IconCounter/logo.png";
import { FilterButton } from "../../components/FilterButton";
import { mapActions } from "../../store/slices/mapSlices";
import HeaderButton from "../../components/ui/HeaderButton";

const headerText = [
  {
    logo: 'Министерство образования и науки Кыргызской республики',
    btns: ['О нас', 'Статистические данные', 'Очередь в СОШ и ДОО']
  },
  {
    logo: 'Кыргыз Республикасынын Билим берүү жана илим министрлиги',
    btns: ['Биз жөнүндө', 'Статистикалык маалымат', 'Очередь в СОШ и ДОО']
  },
]

const Header = () => {
  const { translation } = useSelector(store => store.translate)
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickTranslate = (e, id) => {
    e.preventDefault();
    dispatch(mapActions.setTranslation(id))
  }
  const onClickNav = (e, id) => {
    e.preventDefault();
    navigate(`${id}`);
  };
  const onClickLogo = (e) => {
    e.preventDefault()
    navigate(`/`);
  }
  const active = "btn-primary text-white";
  const noActive = "btn-outline-primary";
  const transActive = 'active btn-primary text-white';
  return (
    <nav className="navbar container mt-3 navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand d-flex my-auto logo__text" href="index.html" onClick={onClickLogo}>
          <img src={logo} width="32" height="30" />
          <div className="text-wrap text-width-logo">
            {headerText[translation].logo}
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-block d-lg-none ms-auto mb-2 mb-lg-0 row">
            <div className="d-flex d-lg-none my-4 justify-content-end">
              <li className="nav-item  ms-0 my-auto d-block w__button__md__custom d-lg-none ">
                <a
                  className={`nav-link btn btn-outline-primary btn-sm py-0 ${translation === 1 && transActive}`}
                  href="#"
                  onClick={(e) => onClickTranslate(e, 1)}
                >
                  Кырг
                </a>
              </li>
              <li className="nav-item ms-4 my-auto d-block w__button__md__custom d-lg-none">
                <a
                  className={`nav-link btn btn-outline-primary btn-sm py-0 ${translation === 0 && transActive}`}
                  aria-current="page"
                  href="#"
                  onClick={(e) => onClickTranslate(e, 0)}
                >
                  Рус
                </a>
              </li>
            </div>
            <div className="d-flex flex-wrap justify-content-end col-md-12 col-12">
              <li className="nav-item me-2 mb-2">
                <a
                  className={`nav-link btn px-2 ${location.pathname === "/about" ? active : noActive
                    }`}
                  aria-current="page"
                  href="#"
                  onClick={(e) => onClickNav(e, "/about")}
                >
                  {headerText[translation].btns[0]}
                </a>
              </li>
              <li className="nav-item mx-0 me-2 mb-2 mx-lg-4">
                <a
                  className={`nav-link px-2 btn ${location.pathname === "/" ? active : noActive
                    }`}
                  href="#"
                  onClick={(e) => onClickNav(e, "/")}
                >
                  {" "}
                  {headerText[translation].btns[1]}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  className={`nav-link btn px-2 ${noActive}`}
                  href="https://mektep.edu.gov.kg/"
                  target="_blank"
                >
                  {" "}
                  {headerText[translation].btns[2]}
                </a>
              </li>
            </div>
          </ul>
          <ul className="d-none d-lg-flex align-items-center navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item w-auto">
              <a
                className={`nav-link btn ${location.pathname === "/about" ? active : noActive
                  }`}
                aria-current="page"
                href="#"
                onClick={(e) => onClickNav(e, "/about")}
              >
                {headerText[translation].btns[0]}
              </a>
            </li> */}
            <HeaderButton href="#" onClick={(e) => onClickNav(e, "/about")} active={location.pathname === "/about"}>О нас</HeaderButton>
            {/* <li className="nav-item mx-4 w-auto">
              <a
                className={`nav-link btn ${location.pathname === "/" ? active : noActive
                  }`}
                href="#"
                onClick={(e) => onClickNav(e, "/")}
              >
                {" "}
                {headerText[translation].btns[1]}
              </a>
            </li> */}
            <HeaderButton href="#" onClick={(e) => onClickNav(e, "/")} active={location.pathname === "/"}>{headerText[translation].btns[1]}</HeaderButton>
            {/* <li className="nav-item w-auto">
              <a
                className={`nav-link btn ${noActive}`}
                aria-current="page"
                href="https://mektep.edu.gov.kg/"
                target="_blank"
              >
                {headerText[translation].btns[2]}
              </a>
            </li> */}
            <HeaderButton href="https://mektep.edu.gov.kg/" target="_blank">{headerText[translation].btns[2]}</HeaderButton>
            {/* <li className="nav-item ms-4 my-auto">
              <a className={`nav-link btn btn-outline-primary btn-sm py-0 ${translation === 1 && transActive}`}
                href="#"
                onClick={(e) => onClickTranslate(e, 1)}
              >
                Кырг
              </a>
            </li> */}
            <li className="nav-item ms-4 my-auto">
              <HeaderButton secondary href='#' active={translation === 1} onClick={(e) => onClickTranslate(e, 1)} >Кырг</HeaderButton>
            </li>
            <HeaderButton secondary href='#' active={translation === 0} onClick={(e) => onClickTranslate(e, 0)} >Руc</HeaderButton>
            {/* <li className="nav-item ms-4 my-auto">
              <a
                className={`nav-link btn btn-outline-primary btn-sm py-0 ${translation === 0 && transActive}`}
                aria-current="page"
                href="#"
                onClick={(e) => onClickTranslate(e, 0)}
              >
                Руc
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Header;
