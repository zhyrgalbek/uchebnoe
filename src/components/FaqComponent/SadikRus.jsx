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
                        Для получения нового логина и пароля Вам необходимо обратиться в ближайший Районный центр
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
                            <b>Важно!</b> Если Вы указали электронную почту неверно при регистрации заявки,
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
                            введя свою электронную почту, на которую придет сообщение с новым паролем.
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
                        Я попадаю под один из типов льготы, какова процедура подачи по льготе?
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
                        <p>
                            <img src="data:image/png;base64,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" alt="" />
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
                        <p>После перевода заявки, заявка не подлежит восстановлению!!!</p>
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
