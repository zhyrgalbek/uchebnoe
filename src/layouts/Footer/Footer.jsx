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
import { useSelector } from "react-redux";

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

const footerText = [
  {
    pochta: 'Если нашли где-то ошибку, то напишите нам на',
    companies: ['Веб-сайт создан при содействии и финансовой поддержке Европейского Союза и партнеров:', 'Содержание сайта не обязательно отражает их точку зрения, программ и проектов.'],
    btns: ['О нас', 'Статистические данные'],
    list: {
      list_header: 'Наши контакты',
      items: ['Приемная министра', 'Телефон доверия', 'Горячая линия', 'Общественная приемная', 'Факс', 'Почтовый адрес', 'Адрес']
    },
    logo: 'Министерство образования и науки Кыргызской Республики.'
  },
  {
    pochta: 'Эгер кандайдыр бир жерден ката тапсаңыз, бизге жазыңыз',
    companies: ['Веб-сайт Европа Бирлигинин жана өнөктөштөрдүн колдоосу жана каржылык колдоосу менен түзүлгөн:', 'Сайттын мазмуну сөзсүз түрдө алардын көз карашын, программаларын жана долбоорлорун чагылдырбайт.'],
    btns: ['Биз жөнүндө', 'Статистикалык маалымат'],
    list: {
      list_header: 'Биздин байланыштар',
      items: ['Министрдин кабыл алуусу', 'Ишеним телефону', 'Ишеним телефону', 'коомдук кабылдама', 'Факс', 'Почта дареги', 'Дарек']
    },
    logo: 'Кыргыз Республикасынын Билим берүү жана илим министрлиги.'
  },
]

function Footer() {
  const { translation } = useSelector(store => store.translate)
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
              <p className="p-0 mb-2 contact__text">
                {footerText[translation].pochta}
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
                {footerText[translation].companies[0]}
              </p>
              <div className="row d-flex justify-content-around text-black" style={{ marginLeft: '-18px' }}>
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
              {footerText[translation].companies[1]}
            </p>
          </div>
          <div className="mb-4 d-block d-md-none">
            <a
              className="navbar-brand d-flex mb-3  text-wrap"
              href="index.html"
            >
              <img src={logo} width="32" height="30" />
              <p className="ms-3 footer__logo__text">
                {footerText[translation].logo}
              </p>
            </a>
            <p className="mb-0">
              {footerText[translation].pochta}
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
                className={`btn w-auto mx-sm-3 mb-2 hover ${location.pathname === "/about" ? active : noActive
                  }`}
                aria-current="page"
                href="about_us.html"
                onClick={(e) => onClickNav(e, "/about")}
              >
                {footerText[translation].btns[0]}
              </a>
              <a
                className={`btn w-auto mb-2 hover ${location.pathname === "/" ? active : noActive
                  }`}
                href="index.html"
                onClick={(e) => onClickNav(e, "/")}
              >
                {footerText[translation].btns[1]}
              </a>
            </div>
          </div>

          <div className="text-white">
            <p className="d-block mt-3 mt-lg-0 contact__text">
              {footerText[translation].list.list_header}
            </p>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 pb-2">
                {footerText[translation].list.items[0]}
              </li>
              <li className="list-group-item-text bg-primary text-white border-0 w-50 p-0 pb-2">
                +996(312) 66-24-42
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                {footerText[translation].list.items[1]}
              </li>
              <li className="list-group-item-text bg-primary text-white border-0 w-50 p-0 py-2">
                +996(312) 66-24-42
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                {footerText[translation].list.items[2]}
              </li>
              <li className="list-group-item-text bg-primary text-white border-0 w-50 p-0 py-2">
                1222
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                {footerText[translation].list.items[3]}
              </li>
              <li className="list-group-item-text bg-primary text-white border-0 w-50 p-0 py-2">
                +996(312) 62-05-19
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                {footerText[translation].list.items[4]}
              </li>
              <li className="list-group-item-text bg-primary text-white border-0 w-50 p-0 py-2">
                +996(312) 62-15-20
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                {footerText[translation].list.items[5]}
              </li>
              <li className="list-group-item-text bg-primary text-white border-0 w-50 p-0 py-2">
                minedukg@gmail.com
              </li>
            </ul>
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item bg-primary text-white border-0 w-50 p-0 py-2">
                {footerText[translation].list.items[6]}
              </li>
              <li className="list-group-item-text bg-primary text-white border-0 w-50 p-0 py-2">
                Кыргызская Республика, г. Бишкек 720040, Тыныстанова у., 257
              </li>
            </ul>
          </div>
          <div className="d-block d-md-none">
            <p className="mt-lg-5 mt-4 text__found">
              {footerText[translation].companies[0]}
            </p>
            <div className="row d-flex justify-content-around px-0 mx-0 text-black" style={{ marginLeft: '-20px' }}>
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
              {footerText[translation].companies[1]}
            </p>
          </div>
        </div>
        <p className="text-start text-md-center mt-4 ">
          © 2023. {footerText[translation].logo}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
