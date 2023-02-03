import card1 from "../../assets/logo/EU logobox.png";
import card2 from "../../assets/logo/ESTDEV logobox.png";
import card3 from "../../assets/logo/Leader logobox.jpg";
import HeaderButton from "../../components/ui/HeaderButton";
import { useLocation, useNavigate } from "react-router";
import { LogoType } from "../../components/LogoType";
import logo1 from "../../assets/IconCounter/funded_eu.svg";
import logo2 from "../../assets/IconCounter/funded_estdev.svg";
import logo3 from "../../assets/IconCounter/funded_leader.svg";
import logo from "../../assets/logo/logo.svg";

const data = [
  {
    text: "Приемная министра",
    contact: "+996(312) 66-24-42",
  },
  {
    text: "Телефон доверия",
    contact: "+996(312) 66-24-42",
  },
  {
    text: "Горячая линия",
    contact: "1222",
  },
  {
    text: "Общественная приемная",
    contact: "+996(312) 62-05-19",
  },
  {
    text: "Факс",
    contact: "+996(312) 62-15-20",
  },
  {
    text: "Почтовый адрес",
    contact: "minedukg@gmail.com",
  },
  {
    text: "Адрес",
    contact: "Кыргызская Республика, г. Бишкек 720040, Тыныстанова у., 257",
  },
];

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickNav = (e, id) => {
    e.preventDefault();
    navigate(`${id}`);
  };
  const active = "btn-light text-black";
  const noActive = "btn-outline-light";
  return (
    <footer className="bg-primary text-white ">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-lg-3">
          <div className="d-none d-md-block">
            <div className=" bg-primary border-white text-white card p-5">
              <p className="p-0 mb-2">
                Если нашли где-то ошибку, то напишите нам на
              </p>
              <a
                className="text-white text-decoration-none"
                href="mailto:supportaddress@email.com"
              >
                supportaddress@email.com
              </a>
            </div>
            <div className="">
              <p className="mt-lg-5 mt-4 text__found">
                Веб-сайт создан при содействии и финансовой поддержке
                Европейского Союза и партнеров:
              </p>
              <div className="row d-flex justify-content-around text-black">
                <div className="col-3 px-0 bg-white border-rounded rounded-2 pt-1 py-auto">
                  <div className="row py-auto my-auto">
                    <div className="col text-center ">
                      <img className="w-100 img__footer__fund" src={logo1} />
                    </div>
                  </div>
                </div>
                <div className="col-3 px-0 bg-white border-rounded rounded-2 pt-1 py-auto">
                  <div className="row py-auto my-auto">
                    <div className="col text-center ">
                      <img className="w-100 img__footer__fund" src={logo2} />
                    </div>
                  </div>
                </div>
                <div className="col-3 px-0 bg-white border-rounded rounded-2 py-auto">
                  <div className="row p-2">
                    <div className="col text-center my-auto py-auto">
                      <img className="w-100 img__footer__fund" src={logo3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text__found">
              Содержание сайта не обязательно отражает их точку зрения, программ
              и проектов.
            </p>
          </div>
          <div className="mb-4 d-block d-md-none">
            <a
              className="navbar-brand d-flex mb-3  text-wrap"
              href="index.html"
            >
              <img src={logo} width="32" height="30" />
              <p className="ms-3 footer__logo__text">
                Министерство образования и науки Кыргызской республики
              </p>
            </a>
            <p className="mb-0">
              Если нашли на сайте ошибку, то напишите нам на:
            </p>
            <a
              className="pt-0 text-white text-decoration-none"
              href="mailto:supportaddress@email.com"
            >
              supportaddress@email.com
            </a>
          </div>
          <div className="container">
            <div className="d-flex justify-content-around row row-cols-2 mb-2 mb-lg-0">
              <a
                className={`btn w-auto mx-sm-3 hover ${location.pathname === "/about" ? active : noActive
                  }`}
                aria-current="page"
                href="about_us.html"
                onClick={(e) => onClickNav(e, "/about")}
              >
                О нас
              </a>
              <a
                className={`btn w-auto hover ${location.pathname === "/" ? active : noActive
                  }`}
                href="index.html"
                onClick={(e) => onClickNav(e, "/")}
              >
                Статистические данные
              </a>
            </div>
          </div>

          <div className="text-white">
            <p className="d-block d-md-none mt-3 mt-lg-0 contact__text">
              Наши контакты
            </p>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 pb-2">
                Приемная министра
              </li>
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 pb-2">
                +996(312) 66-24-42
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                Телефон доверия
              </li>
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                +996(312) 66-24-42
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                Горячая линия
              </li>
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                1222
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                Общественная приемная
              </li>
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                +996(312) 62-05-19
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                Факс
              </li>
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                +996(312) 62-15-20
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                Почтовый адрес
              </li>
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                minedukg@gmail.com
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                Адрес
              </li>
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                Кыргызская Республика, г. Бишкек 720040, Тыныстанова у., 257
              </li>
            </ul>
          </div>
          <div className="d-block d-md-none">
            <p className="mt-lg-5 mt-4 text__found">
              Веб-сайт создан при содействии и финансовой поддержке Европейского
              Союза и партнеров:
            </p>
            <div className="row d-flex justify-content-around text-black">
              <div className="col-3 px-0 bg-white border-rounded rounded-2 pt-0 py-auto">
                <div className="row p-2">
                  <div className="col text-center my-auto py-auto">
                    <img className="w-100 img__footer__fund" src={logo1} />
                  </div>
                </div>
              </div>
              <div className="col-3 px-0 bg-white border-rounded rounded-2 pt-0 py-auto">
                <div className="row p-2">
                  <div className="col text-center my-auto py-auto">
                    <img className="w-100 img__footer__fund" src={logo2} />
                  </div>
                </div>
              </div>
              <div className="col-3 px-0 bg-white border-rounded rounded-2 py-auto">
                <div className="row p-2">
                  <div className="col text-center my-auto py-auto">
                    <img className="w-100 img__footer__fund" src={logo3} />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text__found">
              Содержание сайта не обязательно отражает их точку зрения, программ
              и проектов.
            </p>
          </div>
        </div>
        <p className="text-start text-md-center mt-4 ">
          © 2023. Министерство образования и науки Кыргызской Республики.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
