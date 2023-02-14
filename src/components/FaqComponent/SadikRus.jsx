export const SadikRus = () => {
    return <>
        <h3 className="faqHeader">Здесь Вы можете получить ответы на интересующие Вас вопросы при подачи заявки в детский сад</h3 >
        <div
            class="accordion accordion-flush rounded border-primary__custom w-100"
            id="accordionFlushExample"
        >
            <div class="accordion-item rounded-top">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button
                        class="accordion-button text__button__custom rounded-top collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                    >
                        Могу ли я получить новые логин и пароль?
                    </button>
                </h2>
                <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        Для получения новых логина и пароля Вам необходимо обратиться в ближайший Районный центр
                        образования или Районный отдел образования и науки МОН КР.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingtwo">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse13"
                        aria-expanded="false"
                        aria-controls="flush-collapse13"
                    >
                        У меня отсутствует адрес регистрации. Что нужно делать?
                    </button>
                </h2>
                <div
                    id="flush-collapse13"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading13"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Если у вас отсутствует адрес регистрации. Вам необходимо обратиться в ближайший ЦОН для уточнения адреса.
                            В случае, если Вы являетесь собственником жилья, при себе иметь:
                        </p>
                        <ol className="row gy-3">
                            <li>
                                Паспорт
                            </li>
                            <li>
                                Технический паспорт недвижимости.
                            </li>
                        </ol>
                        <p className="third__title_text">
                            В случае, если Вы не являетесь собственником жилья, подать заявление о регистрации Вас по адресу проживания
                            должен владелец жилья при личном присутствии. При себе иметь:
                        </p>
                        <ol className="row gy-3">
                            <li>
                                Паспорт
                            </li>
                            <li>
                                Паспорт владельца жилья;
                            </li>
                            <li>
                                Технический паспорт недвижимости.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingthree">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsethree"
                        aria-expanded="false"
                        aria-controls="flush-collapsethree"
                    >
                        Если подавали ранее заявку и вставали в очередь в детский сад, сейчас
                        эта очередь не будет нарушена или сдвинута?
                    </button>
                </h2>
                <div
                    id="flush-collapsethree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingthree"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Если вы ранее подавали заявку по системе balabakcha.edu.gov.kg то очередь останется на своем месте.
                        </p>
                        <p className="third__title_text">
                            Также сообщаем, что зафиксированные на момент перехода на бумажных носителях заявления не войдут в новую систему
                            https://mektep.edu.gov.kg/.
                            Необходимо родителям обратно подать заявку через новую систему
                            <a
                                href="https://mektep.edu.gov.kg/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                https://mektep.edu.gov.kg/
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingfoure">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsefoure"
                        aria-expanded="false"
                        aria-controls="flush-collapsefoure"
                    >
                        После получения уведомления, заявитель обязан предоставить в ДОО следующие документы
                    </button>
                </h2>
                <div
                    id="flush-collapsefoure"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfoure"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            После получения уведомления, заявитель обязан предоставить в ДОО следующие документы:
                        </p>
                        <ol className="row gy-2">
                            <li>
                                Скоросшиватель;
                            </li>
                            <li>
                                Копию свидетельства о рождении ребёнка;
                            </li>
                            <li>
                                Копию паспорта одного из родителей (законных представителей);
                            </li>
                            <li>
                                Заполненные медицинские формы № 26/У, № 063/У;
                            </li>
                            <li>
                                Справку о состоянии здоровья ребенка на момент зачисления;
                            </li>
                            <li>
                                При необходимости заключение республиканской или городской психолого-медико-педагогической
                                комиссии о переводе ребенка в общеразвивающую группу ДОО в связи с завершением коррекционного обучения.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingfive">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsefive"
                        aria-expanded="false"
                        aria-controls="flush-collapsefive"
                    >
                        Место за ребенком сохраняется в следующих случаях
                    </button>
                </h2>
                <div
                    id="flush-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfive"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Место за ребенком сохраняется в следующих случаях:
                        </p>
                        <ol className="row gy-2">
                            <li>
                                в случае болезни ребенка с необходимостью соблюдения длительного карантина;
                            </li>
                            <li>
                                прохождения санаторного лечения (с обязательным предоставлением медицинской справки);
                            </li>
                            <li>
                                отпуска родителей (не более 45 календарных дней) или длительной командировки родителей;
                            </li>
                            <li>
                                иных случаях, связанных с семейными обстоятельствами, по заявлению родителей (не более 45 календарных дней).
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingsixe">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsesixe"
                        aria-expanded="false"
                        aria-controls="flush-collapsesixe"
                    >
                        Могу ли я подать заявление сразу в два детских сада?
                    </button>
                </h2>
                <div
                    id="flush-collapsesixe"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingsixe"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Вы можете подать заявление только в один детский сад.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingseven">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseseven"
                        aria-expanded="false"
                        aria-controls="flush-collapseseven"
                    >
                        Могу ли я добавить тип льготы?
                    </button>
                </h2>
                <div
                    id="flush-collapseseven"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingseven"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Вы можете поменять добавить справку о льготе к заявлению в личном кабинете.
                            Для этого Вам необходимо авторизоваться, нажав на кнопку Войти в кабинет родителя.
                        </p>
                        <p className="third__title_text">
                            <b>Важно!</b> Если Вы указали электронную почту не верно при регистрации заявки,
                            Вам необходимо обратиться в ближайший районный центр образования МОН КР.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingeight">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseeight"
                        aria-expanded="false"
                        aria-controls="flush-collapseeight"
                    >
                        Если Я подавал(а) ранее заявку и вставали в очередь в детский сад,
                        сейчас эта очередь не будет нарушена или сдвинута?
                    </button>
                </h2>
                <div
                    id="flush-collapseeight"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingeight"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Если вы ранее подавали заявку по системе balabakcha.edu.gov.kg, то очередь останется на своем месте.
                            Возможен незначительный сдвиг очереди в силу заявок по льготе.
                        </p>
                        <p className="third__title_text">
                            Также сообщаем, что зафиксированные на момент перехода на бумажных носителях заявления не войдут в
                            новую систему https://mektep.edu.gov.kg/.
                        </p>
                        <p className="third__title_text">
                            Необходимо родителям обратно подать заявку через новую систему https://mektep.edu.gov.kg/.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingnine">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsenine"
                        aria-expanded="false"
                        aria-controls="flush-collapsenine"
                    >
                        При переносе заявления с balabakcha.edu.gov.kg на данный сайт,
                        логин и пароль от личного кабинета останется прежним?
                    </button>
                </h2>
                <div
                    id="flush-collapsenine"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingnine"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Нет, Вам необходимо зайти в "Кабинет родителя" и нажать кнопку "Забыли пароль” и восстановить пароль,
                            введя свою электронную почту на, которую придет сообщение с новым паролем.
                        </p>
                        <p className="third__title_text">
                            Если Вы не знаете или не помните электронную почту, Вам необходимо нажать на кнопку "Забыли электронную почту"
                            и заполнив необходимые поля, Вы сможете узнать электронную почту.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingten">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseten"
                        aria-expanded="false"
                        aria-controls="flush-collapseten"
                    >
                        Я подпадаю под один из типов льготы, какова процедура подачи по льготе?
                    </button>
                </h2>
                <div
                    id="flush-collapseten"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingten"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            При подаче заявки, необходимо выбрать соответствующую льготу и прикрепить документ, подтверждающий
                            указанную льготу
                            (файл должен быть в формате .PDF и иметь размер не более 3 Мб).
                            Тип льготы и редактирование подтверждающего документа возможны в личном кабинете родителя.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingeleven">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseeleven"
                        aria-expanded="false"
                        aria-controls="flush-collapseeleven"
                    >
                        Если я подал(а) заявку в детский сад и мой ребенок был зачислен, но я вынуждена покинуть страну
                        с ребенком. Что мне необходимо сделать?
                    </button>
                </h2>
                <div
                    id="flush-collapseeleven"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingeleven"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Вам необходимо зайти в свой Личный кабинет родителя и отменить свою заявку нажав на кнопку "ОТМЕНИТЬ ЗАЯВКУ"
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingtwelfe">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsetwelfe"
                        aria-expanded="false"
                        aria-controls="flush-collapsetwelfe"
                    >
                        Контактные данные и адреса РЦО МОН КР
                    </button>
                </h2>
                <div
                    id="flush-collapsetwelfe"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingtwelfe"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p>Райондук борборлор</p>
                        <ol>
                            <li>
                                Первомайский районный центр образования, ул. Москва 121,
                                Телефон: 660334, 660668
                            </li>
                            <li>
                                Октябрьский районный центр образования, ул. Байтик баарыра 17,
                                Телефон: 510996, 511861
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
                                Управление образования г. Ош &nbsp;&nbsp;Ленина көчөсү&nbsp;,
                                308 &nbsp;
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
                                ӨЗГӨН шаардык билим берүү бөлүмү, Өзгөн шаары, Гагарин көчөсү{" "}
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
                                ӨЗГӨН райондук билим берүү бөлүмү, Өзгөн шаары, Ленин көчөсү,
                                115, &nbsp;
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
                                БАЗАР-КОРГОН райондук билим берүү бөлүмү, Базар-Коргон айылы,
                                Б.Осмонов көчөсү, 47, Тынычбек&nbsp;Усенов{" "}
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
                                ЖАЛАЛ-АБАД&nbsp;ШААРдык билим берүү бөлүмү, Жалал-Абад шаары,
                                Ж.Бакиев көчөсү, 15, goruo_2013{" "}
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
                                МАЙЛУУ-СУУ&nbsp;ШААРдык билим берүү бөлүмү, Майлуу-Суу шаары,
                                Ленин көчөсү, 135а,{" "}
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
                                СҮЛҮКТҮ ШААРдык билим берүү бөлүмү, Сүлүктү шаары, И.Раззаков
                                көчөсү, 2,{" "}
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
                                ТАЛАС аймактык &nbsp;билим&nbsp;берүү бөлүмү, Талас шаары, Ч.
                                Сатаев көчөсү, 29,{" "}
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
                                ЖУМГАЛ&nbsp;райондук билим берүү бөлүмү, Чаек айылы, Э.Матыев
                                көчөсү,127,{" "}
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
                                НАРЫН ШААРдык&nbsp;билим берүү бөлүмү, Нарын шаары, Турдубаев
                                көчөсү,39, ишеним тел.: (03532) 5-18-23, &nbsp;
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
                                ЖЕТИ-ӨГҮЗ райондук билим берүү бөлүмү, Кызыл-Суу айылы, Манас
                                көчөсү, 194,{" "}
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
                                АЛАМҮДҮН райондук билим берүү бөлүмү, Лебединовка айылы, Ленин
                                проспекти, 354а,{" "}
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
                                Ысык-АТА райондук билим берүү бөлүмү, Кант шаары, Дзержинский
                                көчөсү 78,{" "}
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
                                ЖАЙЫЛ райондук билим берүү бөлүмү, Кара-Балта шаары, Свердлов
                                көчөсү, 24, &nbsp;
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
                                КЕМИН райондук билим берүү &nbsp;ПГТ.&nbsp;Кемин , Кемин штп,
                                Абдубачаев к., 45, &nbsp;
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
                                Чүй-ТОКМОК билим берүү бөлүмү, Токмок шаары, Ленин көчөсү, 389{" "}
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
                <h2 class="accordion-header" id="flush-headingthirty">
                    <button
                        class="accordion-button text__button__custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsethirty"
                        aria-expanded="false"
                        aria-controls="flush-collapsethirty"
                    >
                        Как изменить детский сад?
                    </button>
                </h2>
                <div
                    id="flush-collapsethirty"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingthirty"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body text__accordion__body">
                        <p className="third__title_text">
                            Чтобы отменить заявку, Вам необходимо зайти в "Личный кабинет родителя" выбрать раздел
                            "Заявки" / нажать на кнопку "Восклицательный знак" после откроется заявка, где необходимо
                            нажать на кнопку "Поменять садик"
                        </p>
                        <p className="third__title_text">
                            <b>ВАЖНО!!!</b>
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
