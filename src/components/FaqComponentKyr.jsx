
const fqText = [
    [
        {
            fqHeader: 'Часто задаваемые вопросы'
        },
        {
            item_header: 'С какого возраста можно зарегистрировать ребенка?',
            item_text: `Регистрация ребенка в системе «Электронная запись в школу»
            возможна при условии исполнения ребенку полных 6 лет на начало
            учебного года.`
        },
        {
            item_header: 'Если моему ребенку 5,5 лет могу ли зарегистрировать ребенка?',
            item_text: `Регистрация ребенка в системе «Электронная запись в школу»
            возможна при условии исполнения ребенку полных 6 лет на начало
            учебного года.`
        },
        {
            item_header: 'Если моему ребенку 5,5 лет могу ли зарегистрировать ребенка?',
            item_text: {
                firstText: `Сиздин каттоо дарегиңиз табылган жок. Даректи тактоо үчүн жакынкы калкты тейлөө борборуна кайрылуу керек. Эгерде сиз үйдүн ээси болсоңуз, анда сиз төмөнкү дөкументтерди алып барыңыз:`,

            }
        },
    ],
    [
        {
            fqHeader: 'Часто задаваемые вопросы'
        },
        {
            item_header: 'С какого возраста можно зарегистрировать ребенка?',
            item_text: `Регистрация ребенка в системе «Электронная запись в школу»
            возможна при условии исполнения ребенку полных 6 лет на начало
            учебного года.`
        },
        {
            item_header: 'Если моему ребенку 5,5 лет могу ли зарегистрировать ребенка?',
            item_text: `Регистрация ребенка в системе «Электронная запись в школу»
            возможна при условии исполнения ребенку полных 6 лет на начало
            учебного года.`
        },
    ],
]

export const FaqComponentKyr = () => {
    return <>
        <p className="text-center third__title__text">Часто задаваемые вопросы</p>
        <div class="accordion accordion-flush rounded border-primary__custom" id="accordionFlushExample">
            <div class="accordion-item rounded-top">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button
                        class="accordion-button rounded-top collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                    >
                        С какого возраста можно зарегистрировать ребенка?
                    </button>
                </h2>
                <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Регистрация ребенка в системе «Электронная запись в школу»
                        возможна при условии исполнения ребенку полных 6 лет на начало
                        учебного года.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                    >
                        Если моему ребенку 5,5 лет могу ли зарегистрировать ребенка?
                    </button>
                </h2>
                <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Регистрация ребенка в системе «Электронная запись в школу»
                        возможна при условии исполнения ребенку полных 6 лет на начало
                        учебного года.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                    >
                        А если моему ребенку исполнилось уже 8-9 лет, можем ли мы пойти
                        в школу?
                    </button>
                </h2>
                <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Регистрация ребенка в системе «Электронная запись в школу»
                        возможна при условии исполнения ребенку полных 6 лет на начало
                        учебного года.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                    >
                        Где и как узнать, за какой школой закреплен мой адрес
                        проживания?
                    </button>
                </h2>
                <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Placeholder content for this accordion, which is intended to
                        demonstrate the <code>.accordion-flush</code> class. This is the
                        third item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space to make
                        it look, at least at first glance, a bit more representative of
                        how this would look in a real-world application.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                    >
                        А в какие школы я не могу отдать своего ребенка?
                    </button>
                </h2>
                <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Система не предусматривает прием детей в специализированные
                        школы и классы, интернаты, музыкальные школы.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                    >
                        Могу ли я выбрать сразу две школы?
                    </button>
                </h2>
                <div
                    id="flush-collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingSix"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Вы можете выбрать для своего ребенка только одну школу по
                        микроучастку либо вне микроучастка.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                    >
                        Могу ли я зарегистрировать своего ребенка в этом году, но пойти
                        в школу в следующем году?
                    </button>
                </h2>
                <div
                    id="flush-collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingSeven"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Зарегистрировать ребенка заранее в текущем году, чтобы пойти в
                        следующем году в школу нельзя. То есть, год регистрации и год
                        поступления в школу должны совпадать.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingEight">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseEight"
                        aria-expanded="false"
                        aria-controls="flush-collapseEight"
                    >
                        Есть ли ограничения по выбору школы?
                    </button>
                </h2>
                <div
                    id="flush-collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingEight"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Система не предусматривает прием детей в специализированные
                        школы и классы, интернаты, музыкальные школы.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingNine">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseNine"
                        aria-expanded="false"
                        aria-controls="flush-collapseNine"
                    >
                        Если я гражданин другой страны могу ли я зарегистрировать своих
                        детей и как?
                    </button>
                </h2>
                <div
                    id="flush-collapseNine"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingNine"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Граждане другой страны, проживающие на территории г. Бишкек тоже
                        могут регистрировать своих детей, используя Инструкцию для
                        родителей.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTen">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTen"
                        aria-expanded="false"
                        aria-controls="flush-collapseTen"
                    >
                        Мамлекеттик жана муниципалдык мектептерге биринчи класска
                        электрондук каттоо
                    </button>
                </h2>
                <div
                    id="flush-collapseTen"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTen"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        <iframe
                            class="ql-video"
                            frameborder="0"
                            allowfullscreen="true"
                            src="https://www.youtube.com/embed/90GtZ-ZaTqY?showinfo=0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading11">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse11"
                        aria-expanded="false"
                        aria-controls="flush-collapse11"
                    >
                        У нас нет свидетельства о рождении ребенка, что делать?
                    </button>
                </h2>
                <div
                    id="flush-collapse11"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading11"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Если у Вас нет одного документа на момент подачи заявления в
                        системе, Вам нужно взять/получить не хватающий документ и
                        продолжить регистрацию. Поскольку система не примет Вашу заявку
                        при отсутствии одного из 3 –х основных документов (копия
                        свидетельства о рождении ребенка, копия паспорта одного из
                        родителей, справка с места жительства (если есть льгота это
                        четвертый документ подтверждающий наличие льготы. В случае если
                        отсутствуют все документы, то Вам нужно написать заявление в МОН
                        КР.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading12">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse12"
                        aria-expanded="false"
                        aria-controls="flush-collapse12"
                    >
                        Я зарегистрировала своего ребенка и отдала документы в школу, но
                        передумала обучать ребенка в этой школе, что делать?
                    </button>
                </h2>
                <div
                    id="flush-collapse12"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading12"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        Если вы до 15 августа передумали, то можно заново поменять
                        заявку через личный кабинет родителя, выбрать желаемую школу. Но
                        если Вы передумали после 15 августа Вам необходимо узнать издан
                        ли приказ о зачислении Вашего ребенка, если да, то это уже
                        процедура перевода из школы в школу и нет необходимости заново
                        вставать в очередь. Если приказа нет, то Вам необходимо написать
                        заявление в МОН КР.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading13">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse13"
                        aria-expanded="false"
                        aria-controls="flush-collapse13"
                    >
                        Инструкция для родителей/законных представителей для подачи
                        заявления о зачислении в школу
                    </button>
                </h2>
                <div
                    id="flush-collapse13"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading13"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        <iframe
                            class="ql-video"
                            frameborder="0"
                            allowfullscreen="true"
                            src="https://www.youtube.com/embed/4C5LZ5uR44g?showinfo=0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading14">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse14"
                        aria-expanded="false"
                        aria-controls="flush-collapse14"
                    >
                        У вас отсутствует адрес регистрации. Вам необходимо обратиться в
                        ближайший ЦОН для уточнения адреса
                    </button>
                </h2>
                <div
                    id="flush-collapse14"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading14"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        <p>
                            У вас отсутствует адрес регистрации. Вам необходимо обратиться
                            в ближайший ЦОН для уточнения адреса. В случае, если Вы
                            являетесь собственником жилья, при себе иметь:
                        </p>
                        <ol>
                            <li>Паспорт;</li>
                            <li>Технический паспорт недвижимости.</li>
                        </ol>
                        <p>
                            В случае, если Вы не являетесь собственником жилья, подать
                            заявление о регистрации Вас по адресу проживания должен
                            владелец жилья при личном присутствии. При себе иметь:
                        </p>
                        <ol>
                            <li>Паспорт;</li>
                            <li>Паспорт владельца жилья;</li>
                            <li>Технический паспорт недвижимости.</li>
                        </ol>
                        <p>
                            Для получения дополнительной информации обращаться по
                            следующим номерам:
                        </p>
                        <ul>
                            <li>Call-Center 119</li>
                            <li>+996 (312) 988940</li>
                            <li>+996 (220) 022196</li>
                            <li>+996 (220) 022183</li>
                            <li>+996 (220) 022381</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading15">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse15"
                        aria-expanded="false"
                        aria-controls="flush-collapse15"
                    >
                        Контактные данные и адреса РЦО МОН
                    </button>
                </h2>
                <div
                    id="flush-collapse15"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading15"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        <p>Райондук борборлор</p>
                        <ol>
                            <li>
                                Первомайский районный центр образования, ул. Москва 121,
                                Телефон: 660334, 660668
                            </li>
                            <li>
                                Октябрьский районный центр образования, ул. Байтик баарыра
                                17, Телефон: 510996, 511861
                            </li>
                            <li>
                                Свердловский районный центр образования, ул. Литовский 91,
                                Телефон: 536337, 687963
                            </li>
                            <li>
                                Ленинский районный центр образования, ул. Чүй 315, 6 /611,
                                Телефон: 656913, 656922
                            </li>
                        </ol>
                        <p>Ошская область</p>
                        <ol>
                            <li>
                                Управление образования г. Ош &nbsp;&nbsp;Ленина
                                көчөсү&nbsp;, 308 &nbsp;
                                <a
                                    href="mailto:oshgoruo1@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    oshgoruo1@mail.ru
                                </a>
                                , Телефон: 25070
                            </li>
                            <li>
                                АРАВАН райондук билим берүү бөлүмү 715320, Араван айылы,
                                Ташматова көчөсү, 3,{" "}
                                <a
                                    href="mailto:ulukbek800430@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    ulukbek800430@mail.ru
                                </a>
                                , Телефон: 51302
                            </li>
                            <li>
                                КАРА-СУУ райондук билим берүү бөлүмү 715500, Кара-Суу шаары,
                                Заводская көчөсү, 2, &nbsp;
                                <a
                                    href="mailto:karasuu.roo@gmail.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    karasuu.roo@gmail.com
                                </a>
                                , Телефон: 51623
                            </li>
                            <li>
                                КАРА-КУЛЖА райондук билим берүү бөлүмү 715547, Кара-Кулжа
                                айылы, Маткадыров көчөсү,{" "}
                                <a
                                    href="mailto:karakulja.roo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    karakulja.roo@mail.ru
                                </a>
                                , Телефон: 50504
                            </li>
                            <li>
                                ЧОҢ-АЛАЙ райондук билим берүү бөлүмү 723700, Дароот-Коргон
                                айылы, Ч.Сулайманов көчөсү, 68,{" "}
                                <a
                                    href="mailto:baktybaevp@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    egem 61@mail.ru
                                </a>
                                , Телефон: 22043
                            </li>
                            <li>
                                АЛАЙ райондук билим берүү бөлүмү, Гүлчө айылы, Нарматов
                                көчөсү, 43, Телефон: 51442
                            </li>
                            <li>
                                ӨЗГӨН шаардык билим берүү бөлүмү, Өзгөн шаары, Гагарин
                                көчөсү{" "}
                                <a
                                    href="mailto:sNurilloh@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    sNurilloh@mail.ru
                                </a>
                                , Телефон: 50423
                            </li>
                            <li>
                                ӨЗГӨН райондук билим берүү бөлүмү, Өзгөн шаары, Ленин
                                көчөсү, 115, &nbsp;
                                <a
                                    href="mailto:uzgenrayoo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    uzgenrayoo@mail.ru
                                </a>
                                , Телефон: 50423
                            </li>
                            <li>
                                НООКАТ райондук билим берүү бөлүмү, Ноокат шаары, Ленин
                                көчөсү, 19,{" "}
                                <a
                                    href="mailto:nookat.raibbb@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    nookat.raibbb@mail.ru
                                </a>
                                , Телефон: 50143
                            </li>
                        </ol>
                        <p>Жалал-Абадская область</p>
                        <ol>
                            <li>
                                АЛА-БУКА райондук билим берүү бөлүмү, Ала-Бука айылы,
                                С.Ибрагимов көчөсү, 77,{" "}
                                <a
                                    href="mailto:alabukaroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    alabukaroo@mail.ru
                                </a>
                                , Телефон: 50415
                            </li>
                            <li>
                                АКСЫ райондук билим берүү бөлүмү, Кербен шаары, Т.Уметалиев
                                көчөсү, 145, &nbsp;&nbsp;
                                <a
                                    href="mailto:aksybeks@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    aksybeks@mail.ru
                                </a>
                                , Телефон: 50290
                            </li>
                            <li>
                                БАЗАР-КОРГОН райондук билим берүү бөлүмү, Базар-Коргон
                                айылы, Б.Осмонов көчөсү, 47, Тынычбек&nbsp;Усенов{" "}
                                <a
                                    href="mailto:b-k_rbbb@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    b-k_rbbb@mail.ru
                                </a>
                                , Телефон: 60042
                            </li>
                            <li>
                                НООКЕН райондук билим берүү бөлүмү, Масы айылы, Токтогул
                                көчөсү, 4,{" "}
                                <a
                                    href="mailto:nookenraiono@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    nookenraiono@mail.ru
                                </a>
                                ,{" "}
                                <a
                                    href="mailto:nurba1952@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    nurba1952@mail.ru
                                </a>
                                , Телефон: 60152
                            </li>
                            <li>
                                ТОКТОГУЛ райондук билим берүү бөлүмү, Токтогул шаары,
                                А.Суеркулов көчөсү, 1,{" "}
                                <a
                                    href="mailto:o.madylbaev@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    o.madylbaev@mail.ru
                                </a>
                                , Телефон: 50251
                            </li>
                            <li>
                                ТОГУЗ-ТОРО&nbsp;райондук билим берүү бөлүмү, Казарман айылы,
                                Жээналиев көчөсү, 52,{" "}
                                <a
                                    href="mailto:toguztoro@list.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    toguztoro@list.ru
                                </a>
                                , Телефон: 50329
                            </li>
                            <li>
                                ЧАТКАЛ&nbsp;райондук билим берүү бөлүмү, Каныш-Кыя кыштагы,
                                Кошбаева көчөсү,50{" "}
                                <a
                                    href="mailto:chatkalraybbb@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    chatkalraybbb@mail.ru
                                </a>
                                , Телефон: 60142
                            </li>
                            <li>
                                ЖАЛАЛ-АБАД&nbsp;ШААРдык билим берүү бөлүмү, Жалал-Абад
                                шаары, Ж.Бакиев көчөсү, 15, goruo_2013{" "}
                                <a
                                    href="mailto:goruo_2013@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    goruo_2013@mail.ru
                                </a>
                                , Телефон: 24465
                            </li>
                            <li>
                                КӨК-ЖАҢГАК ШААРдык билим берүү бөлүмү, Ленин көчөсү, 67,
                                &nbsp;
                                <a
                                    href="mailto:kokjangak.goroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    kokjangak.goroo@mail.ru
                                </a>
                                , Телефон:
                            </li>
                            <li>
                                КАРА-КӨЛ&nbsp;ШААРдык билим берүү бөлүмү, Кара-Көл шаары,
                                Ленин көчөсү, 1,{" "}
                                <a
                                    href="mailto:alymkan.myrzalieva@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    alymkan.myrzalieva@mail.ru
                                </a>
                                , Телефон:
                            </li>
                            <li>
                                МАЙЛУУ-СУУ&nbsp;ШААРдык билим берүү бөлүмү, Майлуу-Суу
                                шаары, Ленин көчөсү, 135а,{" "}
                                <a
                                    href="mailto:m-suu_goroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    m-suu_goroo@mail.ru
                                </a>
                                , Телефон: 52071
                            </li>
                            <li>
                                ТАШ-КӨМҮР&nbsp;ШААРдык билим берүү бөлүмү, Таш-Көмүр шаары,
                                Ш.Сыдыков көчөсү, 22,{" "}
                                <a
                                    href="mailto:tash-kymur2013@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    tash-kymur2013@mail.ru
                                </a>
                                , Телефон: 50205
                            </li>
                            <li>
                                СУЗАК райондук билим берүү бөлүмү, Сузак айылы, Дакан Палван
                                көчөсү, 7,{" "}
                                <a
                                    href="mailto:suzak.raioo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    suzak.raioo@mail.ru
                                </a>
                                .
                            </li>
                        </ol>
                        <p>Баткенская область</p>
                        <ol>
                            <li>
                                БАТКЕН&nbsp;райондук билим&nbsp;берүү бөлүмү, Баткен шаары,
                                К.Сабыров көчөсү,{" "}
                                <a
                                    href="mailto:batken_zaitov@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    batken_zaitov@mail.ru
                                </a>{" "}
                                Телефон: 50674
                            </li>
                            <li>
                                КАДАМЖАЙ&nbsp;райондук билим&nbsp;берүү бөлүмү, Кадамжай
                                шаары, А.Орозбеков көчөсү, 180а,{" "}
                                <a
                                    href="mailto:sabahat@bk.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    sabahat@bk.ru
                                </a>
                                , Телефон: 50938
                            </li>
                            <li>
                                ЛЕЙЛЕК&nbsp;райондук билим&nbsp;берүү бөлүмү, Исфана шаары,
                                Кошмуратов көчөсү, 7,{" "}
                                <a
                                    href="mailto:leilek.raioo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    leilek.raioo@mail.ru
                                </a>
                                , Телефон: 50613
                            </li>
                            <li>
                                СҮЛҮКТҮ ШААРдык билим берүү бөлүмү, Сүлүктү шаары,
                                И.Раззаков көчөсү, 2,{" "}
                                <a
                                    href="mailto:a.abdyvahap@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    a.abdyvahap@mail.ru
                                </a>
                                , Телефон: 50434
                            </li>
                            <li>
                                КЫЗЫЛ-КЫЯ ШААРдык билим берүү бөлүмү, Кызыл-Кыя шаары,
                                Масалиева, 60,{" "}
                                <a
                                    href="mailto:goroo2013@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    goroo2013@mail.ru
                                </a>
                                , Телефон: 60126
                            </li>
                            <li>
                                БАТКЕН ШААРдык билим берүү бөлүмү, Баткен шаары, Ш. Жусупова
                                көчөсү,&nbsp;
                                <a
                                    href="mailto:gorOO_2009@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    gorOO_2009@mail.ru
                                </a>
                                , Телефон: 51543.
                            </li>
                        </ol>
                        <p>Талаская область</p>
                        <ol>
                            <li>
                                КАРА-БУУРА&nbsp;райондук билим&nbsp;берүү бөлүмү, Кызыл-Адыр
                                айылы, Ч.Айтматов көчөсү, 7,{" "}
                                <a
                                    href="mailto:kalybaevb@gmail.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    kalybaevb@gmail.com
                                </a>
                                , Телефон: 60009
                            </li>
                            <li>
                                МАНАС райондук билим&nbsp;берүү бөлүмү, Покровка айылы,
                                М.Кояшов көчөсү,{" "}
                                <a
                                    href="mailto:gsubanova@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    gsubanova@mail.ru
                                </a>
                                , Телефон: 22574
                            </li>
                            <li>
                                БАКАЙ-АТА &nbsp;райондук билим&nbsp;берүү бөлүмү, Манас
                                көчөсү, 103,{" "}
                                <a
                                    href="mailto:bakaiatarayoo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    bakaiatarayoo@mail.ru
                                </a>
                                , Телефон: 32185
                            </li>
                            <li>
                                ТАЛАС аймактык &nbsp;билим&nbsp;берүү бөлүмү, Талас шаары,
                                Ч. Сатаев көчөсү, 29,{" "}
                                <a
                                    href="mailto:Talas_gorOO@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Talas_gorOO@mail.ru
                                </a>
                                , Телефон: 52422.
                            </li>
                        </ol>
                        <p>Нарынская область</p>
                        <ol>
                            <li>
                                НАРЫН&nbsp;райондук билим берүү бөлүмү, Нарын
                                шаары,&nbsp;Т.Мамбеталиев көчөсү, 20, ишеним тел.: (03532)
                                5-18-27,{" "}
                                <a
                                    href="mailto:raion-2013@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    raion-2013@mail.ru
                                </a>
                                , Телефон: 51776
                            </li>
                            <li>
                                АК- Талаа райондук билим берүү бөлүмү, Ак-Талаа айылы, Манас
                                көчөсү,45,{" "}
                                <a
                                    href="mailto:moldakmatov@gmail.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    moldakmatov@gmail.com
                                </a>
                                , Телефон: 92663
                            </li>
                            <li>
                                АТ-БАШЫ &nbsp;райондук билим берүү бөлүмү, Ат-Башы айылы,
                                С.Абыкеев көчөсү, 44,{" "}
                                <a
                                    href="mailto:raiono_1@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    raiono_1@mail.ru
                                </a>
                                , Телефон: 60042
                            </li>
                            <li>
                                ЖУМГАЛ&nbsp;райондук билим берүү бөлүмү, Чаек айылы,
                                Э.Матыев көчөсү,127,{" "}
                                <a
                                    href="mailto:jumgalraioo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    jumgalraioo@mail.ru
                                </a>
                                , Телефон: 23265
                            </li>
                            <li>
                                НАРЫН ШААРдык&nbsp;билим берүү бөлүмү, Нарын шаары,
                                Турдубаев көчөсү,39, ишеним тел.: (03532) 5-18-23, &nbsp;
                                <a
                                    href="mailto:naryngoo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    naryngoo@mail.ru
                                </a>
                                , Телефон: 51823
                            </li>
                            <li>
                                КОЧКОР&nbsp;райондук билим берүү бөлүмү, Кочкор айылы,
                                Токтогул көчөсү,65, ишеним тел.: (03535) 5-11-44,{" "}
                                <a
                                    href="mailto:kochkor.raibbb@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    kochkor.raibbb@mail.ru
                                </a>
                                , Телефон: 50971.
                            </li>
                        </ol>
                        <p>Иссык-Кульская область</p>
                        <ol>
                            <li>
                                ТҮП райондук билим берүү бөлүмү, Түп айылы, Боромбай көчөсү,
                                12,{" "}
                                <a
                                    href="mailto:tiupskiiroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    tiupskiiroo@mail.ru
                                </a>
                                , Телефон: 24059
                            </li>
                            <li>
                                ТОҢ райондук билим берүү бөлүмү, Боконбаев айылы, Ленин
                                көчөсү, 69,{" "}
                                <a
                                    href="mailto:tonroo2013@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    tonroo2013@mail.ru
                                </a>
                                , Телефон: 91463
                            </li>
                            <li>
                                ЫСЫК-КӨЛ райондук билим берүү бөлүмү, Чолпон-Ата шаары,
                                Мамбеталиев көчөсү, 14,{" "}
                                <a
                                    href="mailto:issyk11@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    issyk11@mail.ru
                                </a>
                                , Теелфон: 43187
                            </li>
                            <li>
                                ЖЕТИ-ӨГҮЗ райондук билим берүү бөлүмү, Кызыл-Суу айылы,
                                Манас көчөсү, 194,{" "}
                                <a
                                    href="mailto:abibroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    abibroo@mail.ru
                                </a>{" "}
                                ,{" "}
                                <a
                                    href="mailto:moldakunovz@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    moldakunovz@mail.ru
                                </a>
                                , Телефон: 51465
                            </li>
                            <li>
                                АК-СУУ райондук билим берүү бөлүмү, Теплоключенка айылы,
                                Калинин көчөсү, 92,{" "}
                                <a
                                    href="mailto:temiralievm@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    temiralievm@mail.ru
                                </a>
                                , Телефон: 92173
                            </li>
                            <li>
                                БАЛЫКЧЫ ШААРдык билим берүү бөлүмү, Балыкчы шаары, Аманбаева
                                көчөсү, 151,{" "}
                                <a
                                    href="mailto:bgoroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    bgoroo@mail.ru
                                </a>
                                , Телефон: 30863
                            </li>
                            <li>
                                КАРАКОЛ ШААРдык билим берүү бөлүмү, Каракол
                                шаары,&nbsp;К.Тыныстанов көчөсү, 21, &nbsp;
                                <a
                                    href="mailto:karakolgoroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    karakolgoroo@mail.ru
                                </a>
                                , Телефон: 53323.
                            </li>
                        </ol>
                        <p>Чуйская область</p>
                        <ol>
                            <li>
                                АЛАМҮДҮН райондук билим берүү бөлүмү, Лебединовка айылы,
                                Ленин проспекти, 354а,{" "}
                                <a
                                    href="mailto:alamudunroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    alamudunroo@mail.ru
                                </a>
                                , Телефон: 617215
                            </li>
                            <li>
                                Ысык-АТА райондук билим берүү бөлүмү, Кант шаары,
                                Дзержинский көчөсү 78,{" "}
                                <a
                                    href="mailto:ysykata79@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    ysykata79@mail.ru
                                </a>
                                , Телефон: 52109
                            </li>
                            <li>
                                ЖАЙЫЛ райондук билим берүү бөлүмү, Кара-Балта шаары,
                                Свердлов көчөсү, 24, &nbsp;
                                <a
                                    href="mailto:jayilroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    jayilroo@mail.ru
                                </a>
                                , Телефон: 32811
                            </li>
                            <li>
                                КЕМИН райондук билим берүү &nbsp;ПГТ.&nbsp;Кемин , Кемин
                                штп, Абдубачаев к., 45, &nbsp;
                                <a
                                    href="mailto:66.66@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    66.66@mail.ru
                                </a>
                                , Телефон: 50027
                            </li>
                            <li>
                                СОКУЛУК&nbsp;райондук билим берүү бөлүмү, Сокулук айылы,
                                Фрунзе көчөсү, 116,{" "}
                                <a
                                    href="mailto:alina_roo@bk.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    alina_roo@bk.ru
                                </a>
                                , Телфон: 607596
                            </li>
                            <li>
                                МОСКВА райондук билим берүү бөлүмү, Беловодск айылы, Ленин
                                көчөсү, 27, &nbsp;
                                <a
                                    href="mailto:moskvaroo@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    moskvaroo@mail.ru
                                </a>
                                , Телефон: 58190
                            </li>
                            <li>
                                ПАНФИЛОВ райондук билим берүү бөлүмү, Каинды ш.т.п., Садовый
                                көчөсү, 7, &nbsp;
                                <a
                                    href="mailto:arykov63@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    arykov63@mail.ru
                                </a>
                                , Телефон: 51299
                            </li>
                            <li>
                                Чүй-ТОКМОК билим берүү бөлүмү, Токмок шаары, Ленин көчөсү,
                                389{" "}
                                <a
                                    href="mailto:chtoo2016@mail.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    chtoo2016@mail.ru
                                </a>
                                , Телефон: 34258.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading16">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse16"
                        aria-expanded="false"
                        aria-controls="flush-collapse16"
                    >
                        Если Я потерял пароль что делать?
                    </button>
                </h2>
                <div
                    id="flush-collapse16"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading16"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        <p>
                            При утере пароля от «Личного кабинета родителя», Вам
                            необходимо пройти по ссылке «Забыли пароль», далее следовать
                            указанным инструкциям.{" "}
                        </p>
                        <iframe
                            class="ql-video"
                            frameborder="0"
                            allowfullscreen="true"
                            src="https://www.youtube.com/embed/vXmGEcjXmuc?showinfo=0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div class="accordion-item rounded rounded-bottom">
                <h2 class="accordion-header" id="flush-heading17">
                    <button
                        class="accordion-button  rounded-bottom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse17"
                        aria-expanded="false"
                        aria-controls="flush-collapse17"
                    >
                        Как изменить школу?
                    </button>
                </h2>
                <div
                    id="flush-collapse17"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading17"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body  rounded-bottom">
                        <p>
                            Чтобы отменить заявку, Вам необходимо зайти в "Личный кабинет
                            родителя" выбрать раздел "Заявки" / нажать на кнопку
                            "Восклицательный знак" после откроется заявка, где необходимо
                            нажать на кнопку "Поменять школ"
                        </p>
                        <strong>ВАЖНО!!!</strong>
                        <p>
                            После перевода заявки, заявка не подлежит восстановлению!!!
                        </p>
                        <iframe
                            class="ql-video"
                            frameborder="0"
                            allowfullscreen="true"
                            src="https://www.youtube.com/embed/7oIKylz9BRg?showinfo=0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
}