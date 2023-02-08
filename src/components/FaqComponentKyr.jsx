const fqText = [
  [
    {
      fqHeader: "Часто задаваемые вопросы",
    },
    {
      item_header: "С какого возраста можно зарегистрировать ребенка?",
      item_text: `Регистрация ребенка в системе «Электронная запись в школу»
            возможна при условии исполнения ребенку полных 6 лет на начало
            учебного года.`,
    },
    {
      item_header:
        "Если моему ребенку 5,5 лет могу ли зарегистрировать ребенка?",
      item_text: `Регистрация ребенка в системе «Электронная запись в школу»
            возможна при условии исполнения ребенку полных 6 лет на начало
            учебного года.`,
    },
    {
      item_header:
        "Если моему ребенку 5,5 лет могу ли зарегистрировать ребенка?",
      item_text: {
        firstText: `Сиздин каттоо дарегиңиз табылган жок. Даректи тактоо үчүн жакынкы калкты тейлөө борборуна кайрылуу керек. Эгерде сиз үйдүн ээси болсоңуз, анда сиз төмөнкү дөкументтерди алып барыңыз:`,
      },
    },
  ],
  [
    {
      fqHeader: "Часто задаваемые вопросы",
    },
    {
      item_header: "С какого возраста можно зарегистрировать ребенка?",
      item_text: `Регистрация ребенка в системе «Электронная запись в школу»
            возможна при условии исполнения ребенку полных 6 лет на начало
            учебного года.`,
    },
    {
      item_header:
        "Если моему ребенку 5,5 лет могу ли зарегистрировать ребенка?",
      item_text: `Регистрация ребенка в системе «Электронная запись в школу»
            возможна при условии исполнения ребенку полных 6 лет на начало
            учебного года.`,
    },
  ],
];

export const FaqComponentKyr = () => {
  return (
    <>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item ">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button text__button__custom bg-primary text-white d-block text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Көп берилүүчү суроолор
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body text__accordion__body p-0">
              <div
                class="accordion accordion-flush rounded border-primary__custom"
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
                      Баланы канча жаштан каттоого алса болот?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Баланы “Мектепке электрондук кабыл алуу” системасында каттоо,
                      эгерде бала окуу жылынын башында 6 жашка толсо, мүмкүн.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Балам 5,5 жашта болсо, баламды каттасам болобу?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Баланы “Мектепке электрондук кабыл алуу” системасында каттоо,
                      эгерде бала окуу жылынын башында 6 жашка толсо, мүмкүн.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Анан балам 8-9 жашта болсо мектепке барсак болобу?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Баланы “Мектепке электрондук кабыл алуу” системасында каттоо,
                      эгерде бала окуу жылынын башында 6 жашка толсо, мүмкүн.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFour">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Менин жашаган дарегиме кайсы мектеп дайындалганын кайдан жана
                      кантип билсем болот?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Менин жашаган дарегиме кайсы мектеп дайындалганын кайдан жана
                      кантип билсем болот?
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFive">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Баламды кайсы мектептерге бере алам?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Бул системада балдарды адистештирилген мектептерге жана
                      класстарга, мектеп-интернаттарга, музыкалык мектептерге кабыл алуу
                      каралган эмес.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingSix">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix"
                    >
                      Мен бир эле учурда эки мектепти тандай аламбы?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingSix"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Балаңызга кичи райондун ичинде же кичи райондун сыртында бир гана
                      мектеп тандай аласыз.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingSeven">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSeven"
                      aria-expanded="false"
                      aria-controls="flush-collapseSeven"
                    >
                      Баламды быйыл каттатып, кийинки жылы мектепке барсам болобу?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingSeven"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Кийинки жылы мектепке баруу үчүн быйылкы жылы баланы алдын ала
                      каттоого мүмкүн эмес. Башкача айтканда, катталган жылы менен окуу
                      жайга кабыл алынган жылы дал келиши керек.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingEight">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseEight"
                      aria-expanded="false"
                      aria-controls="flush-collapseEight"
                    >
                      Мектепти тандоодо кандайдыр бир чектөөлөр барбы?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingEight"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Бул системада балдарды адистештирилген мектептерге жана
                      класстарга, мектеп-интернаттарга, музыкалык мектептерге кабыл алуу
                      каралган эмес.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingNine">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseNine"
                      aria-expanded="false"
                      aria-controls="flush-collapseNine"
                    >
                      Эгерде мен башка өлкөнүн жараны болсом, балдарымды кантип каттасам
                      болот?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseNine"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingNine"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Бишкектин аймагында жашаган башка өлкөнүн жарандары да Ата-энелер
                      үчүн нускама аркылуу балдарын каттоодон өткөрө алышат.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTen">
                    <button
                      class="accordion-button text__button__custom collapsed"
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
                    <div class="accordion-body text__accordion__body">
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
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse11"
                      aria-expanded="false"
                      aria-controls="flush-collapse11"
                    >
                      Бизде баланын туулгандыгы тууралуу күбөлүк жок, эмне кылышым
                      керек?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse11"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading11"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Системада арыз берген учурда бир документ жок болсо, жетишпеген
                      документти алып/алып, каттоону улантуу керек. 3 негизги
                      документтин бири жок болсо (баланын туулгандыгы тууралуу
                      күбөлүктүн көчүрмөсү, ата-энесинин биринин паспортунун көчүрмөсү,
                      жашаган жеринен маалымкат (жөлөк пул болсо) система сиздин
                      арызыңызды кабыл албайт. , бул жөлөкпулдун бар экендигин
                      тастыктаган төртүнчү документ.Эгерде бардык документтер жок болсо,
                      анда Кыргыз Республикасынын Билим берүү жана илим министрлигине
                      арыз жазуу керек.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading12">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse12"
                      aria-expanded="false"
                      aria-controls="flush-collapse12"
                    >
                      Баламды каттатып, мектепке документтерин тапшырдым, бирок баламды
                      ушул мектепте окутам деген оюмдан кайттым, эмне кылышым керек?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse12"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading12"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      Эгерде сиз 15-августка чейин оюңуздан кайтсаңыз, анда сиз
                      ата-эненин жеке кабинети аркылуу арызды кайра өзгөртө аласыз,
                      каалаган мектепти тандаңыз. Бирок эгер сиз 15-августтан кийин
                      оюңуздан кайтсаңыз, анда сиз балаңыздын окууга киргизилишине
                      буйрук чыккан-чыкпаганын билишиңиз керек, эгер андай болсо, анда
                      бул мектептен мектепке которуу процедурасы жана кайра кошулуунун
                      кереги жок. кезек. Эгерде буйрук жок болсо, анда Кыргыз
                      Республикасынын Билим берүү жана илим министрлигине арыз жазуу
                      керек.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading13">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse13"
                      aria-expanded="false"
                      aria-controls="flush-collapse13"
                    >
                      Ата-энелер/мыйзамдуу өкүлдөр үчүн мектепке балдарды кабыл алууга
                      арыз берүүнүн нускамасы
                    </button>
                  </h2>
                  <div
                    id="flush-collapse13"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading13"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      <iframe
                        class="ql-video"
                        frameborder="0"
                        allowfullscreen="true"
                        src="https://www.youtube.com/embed/4C5LZ5uR44g?showinfo=0"
                      ></iframe>
                      <p className="third__title_text">КАНТИП КОЛДОНУУ КЕРЕК?</p>
                      <p className="third__title_text">
                        Колдонуу үчүн, төмөнкү маалыматты толтуруңуз:
                      </p>
                      <ol className="row gy-3">
                        <li>
                          Балага ким экениңизди көрсөтүңүз?
                          <ul>
                            <li>Ата;</li>
                            <li>Эне;</li>
                            <li>
                              Мыйзамдуу өкүл (бул пунктту тандагандан кийин тиешелүү
                              документти тиркөө керек).
                            </li>
                          </ul>
                        </li>
                        <li>
                          Баланын ата-энеси/мыйзамдуу өкүлү жөнүндө маалымат:
                          <ul>
                            <li>Жарандык;</li>
                            <li>
                              Идентификациялык жеке номери (ИЖН), аты-жөнү, паспорттук
                              маалыматтары (сериясы, номери);
                            </li>
                            <li>Уюлдук телефондун номери;</li>
                            <li>Негизги электрондук почта;</li>
                            <li>
                              Кошумча электрондук почта (Электрондук почталар логин,
                              паролду калыбына келтирүү үчүн колдонулат);
                            </li>
                            <li>Артыкчылыгы (льгота) Бар/Жок.</li>
                          </ul>
                        </li>
                        <li>
                          Бала тууралуу маалымат:
                          <ul>
                            <li>
                              Идентификациялык жеке номери (ИЖН), толук аты-жөнү,
                              туулган жылы, баланын жынысы;
                            </li>
                            <li>Туулгандыгы тууралуу күбөлүктүн сериясы, номери;</li>
                          </ul>
                        </li>
                        <li>
                          Мектепти тандоо:
                          <p className="third__title_text">Биринчи этап үчүн:</p>
                          <ul>
                            <li>Окутуунун каалаган тили;</li>
                            <li>
                              Ата-эненин катталган дареги боюнча система автоматтык
                              түрдө тиешелүү мектепти көрсөтөт.
                            </li>
                          </ul>
                          <p className="third__title_text">Экинчи этап үчүн:</p>
                          <ul>
                            <li>Окутуунун каалаган тили;</li>
                            <li>Область/шаар;</li>
                            <li>
                              Арыз ээси каалаган бош орун бар мектепти тандай алат.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Толтурулган форманы жөнөтүү алдында маалыматты карап чыгуу:
                          <ul>
                            <li>
                              Өтүнмөнү берүүдөн мурун арызда толтурулган маалыматтардын
                              тууралыгын текшерүү зарыл.
                            </li>
                            <li>
                              Арызыңызды ырастагандан кийин, Сиздин электрондук
                              почтаңызга мектепке кирүү үчүн арыз ийгиликтүү кабыл
                              алынгандыгы тууралуу билдирүү жөнөтүлөт.
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading14">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse14"
                      aria-expanded="false"
                      aria-controls="flush-collapse14"
                    >
                      Сиздин каттоо дарегиңиз табылган жок. Даректи тактоо үчүн жакынкы
                      калкты тейлөө борборуна кайрылуу керек
                    </button>
                  </h2>
                  <div
                    id="flush-collapse14"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading14"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      <p>
                        Сиздин каттоо дарегиңиз табылган жок. Даректи тактоо үчүн
                        жакынкы калкты тейлөө борборуна кайрылуу керек. Эгерде сиз үйдүн
                        ээси болсоңуз, анда сиз төмөнкү дөкументтерди алып барыңыз:
                      </p>
                      <ol>
                        <li>Паспорт;</li>
                        <li>кыймылсыз мүлктүн техникалык паспорту.</li>
                      </ol>
                      <p>
                        Эгерде сиз жашаган үйдүн ээси башка бирөө болсо, анда үйдүн ээси
                        сизди жашаган дарегиңизге каттоого калкты тейлөө борборуна кошо
                        барышы керек.
                      </p>
                      <ol>
                        <li>Паспорт;</li>
                        <li>мүлктүн ээсинин паспорту;</li>
                        <li>кыймылсыз мүлктүн техникалык паспорту.</li>
                      </ol>
                      <p>Толук маалымат алуу үчүн төмөнкү номерлерге кайрылыңыз:</p>
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
                      class="accordion-button text__button__custom collapsed"
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
                    <div class="accordion-body text__accordion__body">
                      <p>Райондук борборлор</p>
                      <ol>
                        <li>
                          Биринчимай райондук Билим берүү борбору, Москва көч. 121,
                          Телефон: 660334, 660668
                        </li>
                        <li>
                          Октябрь районунун Билим берүү борбору, Байтик баарыр көч. 17,
                          Телефон: 510996, 511861
                        </li>
                        <li>
                          Свердлов районунун Билим берүү борбору, Литовский көч. 91,
                          Телефон: 536337, 687963
                        </li>
                        <li>
                          Ленин районунун Билим берүү борбору, Чүй көч. 315, 6 /611,
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
                  <h2 class="accordion-header" id="flush-heading16">
                    <button
                      class="accordion-button text__button__custom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse16"
                      aria-expanded="false"
                      aria-controls="flush-collapse16"
                    >
                      Эгерде мен сырсөзүмдү жоготуп алсам, эмне кылышым керек?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse16"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading16"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body">
                      <p>
                        Эгер сиз "Ата-эненин жеке кабинетинен" сырсөзүңүздү жоготуп
                        алсаңыз, "Паролуңузду унутуп калдыңыз" шилтемеси боюнча өтүшүңүз
                        керек, андан кийин нускамаларды аткарыңыз.{" "}
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
                      class="accordion-button text__button__custom  rounded-bottom collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse17"
                      aria-expanded="false"
                      aria-controls="flush-collapse17"
                    >
                      Мектепти кантип өзгөртүү керек?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapse17"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading17"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text__accordion__body  rounded-bottom">
                      <p>
                        Тиркемени жокко чыгаруу үчүн "Ата-эненин жеке кабинетине"
                        өтүңүз, "Арыздар" бөлүмүн тандаңыз / өтүнмө ачылгандан кийин
                        "Илеп белгиси" баскычын басыңыз, анда "Мектепти өзгөртүү"
                        баскычын басышыңыз керек.
                      </p>
                      <strong>МААНИЛҮҮ!!!</strong>
                      <p>
                        Тиркемени өткөрүп бергенден кийин, тиркемени калыбына келтирүү
                        мүмкүн эмес!!!
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
