import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickNav = (e, id) => {
    e.preventDefault()
    navigate(`${id}`)
  }
  const active = 'btn-primary text-white';
  const noActive = 'btn-outline-primary';
  return (
    <nav className="navbar container navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand d-flex my-auto logo__text" href="index.html">
          <img src="" width="32" height="30" />
          <div className="d-flex flex-column">
            <div>Министерство образования и</div>
            <div>науки Кыргызской республики</div>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link btn ${location.pathname === '/about' ? active : noActive}`} aria-current="page" href="#" onClick={(e) => onClickNav(e, '/about')}>О
                нас</a>
            </li>
            <li className="nav-item mx-4">
              <a className={`nav-link btn ${location.pathname === '/' ? active : noActive}`} href="#" onClick={(e) => onClickNav(e, '/')}> Статистические данные</a>
            </li>
            <li className="nav-item ms-4 my-auto">
              <a className="nav-link btn btn-outline-primary btn-sm py-0" href="#">Кырг</a>
            </li>
            <li className="nav-item ms-4 my-auto">
              <a className="nav-link active btn btn-primary text-white btn-sm py-0" aria-current="page"
                href="#">Рус</a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Header;

