

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




export const ShkolaRus = () => {
  return <>
    <h3 className="faqHeader">Здесь Вы можете получить ответы на интересующие Вас вопросы при подаче заявки в школу</h3 >
    <div
      className="accordion accordion-flush rounded border-primary__custom w-100"
      id="accordionFlushExample"
    >
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Если моему ребенку 5,5 лет можно ли зарегистрировать ребенка?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            Регистрация ребенка в системе «Электронная запись в школу» возможна при условии исполнения ребенку полных 6 лет на начало учебного года.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            А если моему ребенку исполнилось уже 8-9 лет, можем ли мы пойти в школу?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            Регистрация ребенка в системе «Электронная запись в школу» возможна при условии исполнения ребенку полных 6 лет на начало учебного года.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Где и как узнать за какой школой закреплен мой адрес проживания?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <p>
              Перейдите по данному адресу, чтобы узнать в какую школу вы относитесь. <br></br>
            </p>
            <p>
              <a href="https://mektep.edu.gov.kg/organization-check">https://mektep.edu.gov.kg/organization-check</a>
            </p>
            С помощью данной услуги Вы можете узнать в какую школу вы относитесь, указав ПИН отца/матери и нажав на кнопку «Проверить».
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingSeven">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSeven"
            aria-expanded="false"
            aria-controls="flush-collapseSeven"
          >
            Могу ли я зарегистрировать своего ребенка в этом году, но пойти в
            школу в следующем году?
          </button>
        </h2>
        <div
          id="flush-collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSeven"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <b>НЕТ</b>, регистрировать ребенка заранее нельзя.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingNine">
          <button
            className="accordion-button text__button__custom collapsed"
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
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingNine"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <p>
              Да, можете.
            </p>
            <ol>
              <li>Граждане другой страны обязаны пройти регистрацию и получить персональный идентификационный номер (ПИН) Кыргызской Республики в ближайшем ЦОНе.</li>
              <li>Зарегистрировать своих детей, используя инструкцию для родителей.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOnehundret">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOnehundret"
            aria-expanded="false"
            aria-controls="flush-collapseOnehundret"
          >
            Могу ли я выбрать сразу две школы?
          </button>
        </h2>
        <div
          id="flush-collapseOnehundret"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOnehundret"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            НЕТ, вы можете выбрать только одну школу по микроучастку (на первом этапе) либо вне микроучастка (на втором этапе).
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTen">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTen"
            aria-expanded="false"
            aria-controls="flush-collapseTen"
          >
            В какие школы я не могу зарегистрировать своего ребенка?
          </button>
        </h2>
        <div
          id="flush-collapseTen"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTen"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            Данная система не предусматривает прием детей в специализированные школы и классы, интернаты, музыкальные школы.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading11">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse11"
            aria-expanded="false"
            aria-controls="flush-collapse11"
          >
            Если нет свидетельства о рождении ребенка, что делать?
          </button>
        </h2>
        <div
          id="flush-collapse11"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading11"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <p>
              Если нет свидетельства о рождении ребенка или паспорта родителя, на момент подачи заявления в систему, необходимо:
            </p>
            <ul>
              <li>Обратиться в ЦОН и получить документ;</li>
              <li>Обратится в Комиссию по делам детей при местной государственной администрации.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading12">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse12"
            aria-expanded="false"
            aria-controls="flush-collapse12"
          >
            Как отозвать заявку?
          </button>
        </h2>
        <div
          id="flush-collapse12"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading12"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <ul>
              <li>Отозвать заявку можно через личный кабинет до зачисления в школу.</li>
              <li>Если вышел приказ о зачислении, то необходимо обратиться в школу и написать заявление об отчислении.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading13">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse13"
            aria-expanded="false"
            aria-controls="flush-collapse13"
          >
            Контактные данные и адреса РЦО/РайОО/ГорОО МОН КР
          </button>
        </h2>
        <div
          id="flush-collapse13"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading13"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <p>
              Райондук борборлор
            </p>
            <p>
              Биринчимай райондук Билим берүү борбору, Москва көч. 121, Телефон: 660334, 660668
            </p>
            <p>
              Октябрь районунун Билим берүү борбору, Байтик баарыр көч. 17, Телефон: 510996, 511861
            </p>
            <p>
              Свердлов районунун Билим берүү борбору, Литовский көч. 91, Телефон: 536337, 687963
            </p>
            <p>
              Ленин районунун Билим берүү борбору, Чүй көч. 315, 6 /611, Телефон: 656913, 656922
            </p>
            <br />
            <div>
              <p>
                ОШ ОБЛУСУ
              </p>
              <p>
                Управление образования г. Ош  Ленина көчөсү , 308 oshgoruo1@mail.ru, Телефон: 25070
              </p>
              <p>АРАВАН райондук билим берүү бөлүмү 715320, Араван айылы, Ташматова көчөсү, 3, <a href="mailto:ulukbek800430@mail.ru" target="_blank">ulukbek800430@mail.ru</a>, Телефон: 51302</p>
              <p>КАРА-СУУ райондук билим берүү бөлүмү 715500, Кара-Суу шаары, Заводская көчөсү, 2, <a href="mailto:karasuu.roo@gmail.com" target="_blank">karasuu.roo@gmail.com</a>, Телефон: 51623</p>
              <p>КАРА-КУЛЖА райондук билим берүү бөлүмү 715547, Кара-Кулжа айылы, Маткадыров көчөсү, <a href="mailto:karakulja.roo@mail.ru" target="_blank">karakulja.roo@mail.ru</a>, Телефон: 50504</p>
              <p>ЧОҢ-АЛАЙ райондук билим берүү бөлүмү 723700, Дароот-Коргон айылы, Ч.Сулайманов көчөсү, 68, <a href="mailto:baktybaevp@mail.ru" target="_blank">baktybaevp@mail.ru</a> , Телефон: 22043</p>
              <p>АЛАЙ райондук билим берүү бөлүмү, Гүлчө айылы, Нарматов көчөсү, 43, Телефон: 51442</p>
              <p>ӨЗГӨН шаардык билим берүү бөлүмү, Өзгөн шаары, Гагарин көчөсү <a href="mailto:sNurilloh@mail.ru" target="_blank">sNurilloh@mail.ru</a> , Телефон: 50423</p>
              <p>ӨЗГӨН райондук билим берүү бөлүмү, Өзгөн шаары, Ленин көчөсү, 115, <a href="mailto:uzgenrayoo@mail.ru" target="_blank">uzgenrayoo@mail.ru</a> , Телефон: 50423</p>
              <p>НООКАТ райондук билим берүү бөлүмү, Ноокат шаары, Ленин көчөсү, 19, <a href="mailto:nookat.raibbb@mail.ru" target="_blank">nookat.raibbb@mail.ru</a> , Телефон: 50143</p>
            </div>
            <br />
            <div>
              <p>ЖАЛАЛ-АБАД ОБЛУСУ</p>
              <p>АЛА-БУКА райондук билим берүү бөлүмү, Ала-Бука айылы, С.Ибрагимов көчөсү, 77, <a href="mailto:alabukaroo@mail.ru" target="_blank">alabukaroo@mail.ru</a> , Телефон: 50415</p>
              <p>АКСЫ райондук билим берүү бөлүмү, Кербен шаары, Т.Уметалиев көчөсү, 145, <a href="mailto:aksybeks@mail.ru" target="_blank">aksybeks@mail.ru</a> , Телефон: 50290</p>
              <p>БАЗАР-КОРГОН райондук билим берүү бөлүмү, Базар-Коргон айылы, Б.Осмонов көчөсү, 47, Тынычбек Усенов <a href="mailto:b-k_rbbb@mail.ru" target="_blank">b-k_rbbb@mail.ru</a> , Телефон: 60042</p>
              <p>НООКЕН райондук билим берүү бөлүмү, Масы айылы, Токтогул көчөсү, 4, nookenraiono@mail.ru, <a href="mailto:nurba1952@mail.ru" target="_blank">nurba1952@mail.ru</a> , Телефон: 60152</p>
              <p>ТОКТОГУЛ райондук билим берүү бөлүмү, Токтогул шаары, А.Суеркулов көчөсү, 1, <a href="mailto:o.madylbaev@mail.ru" target="_blank">o.madylbaev@mail.ru</a>, Телефон: 50251</p>
              <p>ТОГУЗ-ТОРО райондук билим берүү бөлүмү, Казарман айылы, Жээналиев көчөсү, 52, <a href="mailto:toguztoro@list.ru" target="_blank">toguztoro@list.ru</a> , Телефон: 50329</p>
              <p>ЧАТКАЛ райондук билим берүү бөлүмү, Каныш-Кыя кыштагы, Кошбаева көчөсү,50 <a href="mailto:chatkalraybbb@mail.ru" target="_blank">chatkalraybbb@mail.ru</a> , Телефон: 60142</p>
              <p>ЖАЛАЛ-АБАД ШААРдык билим берүү бөлүмү, Жалал-Абад шаары, Ж.Бакиев көчөсү, 15, <a href="mailto:goruo_2013 goruo_2013@mail.ru" target="_blank">goruo_2013 goruo_2013@mail.ru</a> , Телефон: 24465</p>
              <p>КӨК-ЖАҢГАК ШААРдык билим берүү бөлүмү, Ленин көчөсү, 67, <a href="mailto:kokjangak.goroo@mail.ru" target="_blank">kokjangak.goroo@mail.ru</a> , Телефон:</p>
              <p>КАРА-КӨЛ ШААРдык билим берүү бөлүмү, Кара-Көл шаары, Ленин көчөсү, 1, <a href="mailto:alymkan.myrzalieva@mail.ru" target="_blank">alymkan.myrzalieva@mail.ru</a> , Телефон:</p>
              <p>МАЙЛУУ-СУУ ШААРдык билим берүү бөлүмү, Майлуу-Суу шаары, Ленин көчөсү, 135а, <a href="mailto:m-suu_goroo@mail.ru" target="_blank">m-suu_goroo@mail.ru</a>, Телефон: 52071</p>
              <p>ТАШ-КӨМҮР ШААРдык билим берүү бөлүмү, Таш-Көмүр шаары, Ш.Сыдыков көчөсү, 22, <a href="mailto:tash-kymur2013@mail.ru" target="_blank">tash-kymur2013@mail.ru</a> , Телефон: 50205</p>
              <p>СУЗАК райондук билим берүү бөлүмү, Сузак айылы, Дакан Палван көчөсү, 7, <a href="mailto:suzak.raioo@mail.ru." target="_blank">suzak.raioo@mail.ru.</a> </p>
            </div>
            <br />
            <div>
              <p>БАТКЕН ОБЛУСУ</p>
              <p>БАТКЕН&nbsp;райондук билим&nbsp;берүү бөлүмү, Баткен шаары, К.Сабыров көчөсү,&nbsp;<a href="mailto:batken_zaitov@mail.ru" rel="noopener noreferrer" target="_blank">batken_zaitov@mail.ru</a>&nbsp;Телефон: 50674</p>
              <p>КАДАМЖАЙ&nbsp;райондук билим&nbsp;берүү бөлүмү, Кадамжай шаары, А.Орозбеков көчөсү, 180а,&nbsp;<a href="mailto:sabahat@bk.ru" rel="noopener noreferrer" target="_blank">sabahat@bk.ru</a>, Телефон: 50938</p>
              <p>ЛЕЙЛЕК&nbsp;райондук билим&nbsp;берүү бөлүмү, Исфана шаары, Кошмуратов көчөсү, 7,&nbsp;<a href="mailto:leilek.raioo@mail.ru" rel="noopener noreferrer" target="_blank">leilek.raioo@mail.ru</a>, Телефон: 50613</p>
              <p>СҮЛҮКТҮ ШААРдык билим берүү бөлүмү, Сүлүктү шаары, И.Раззаков көчөсү, 2,&nbsp;<a href="mailto:a.abdyvahap@mail.ru" rel="noopener noreferrer" target="_blank">a.abdyvahap@mail.ru</a>, Телефон: 50434</p>
              <p>КЫЗЫЛ-КЫЯ ШААРдык билим берүү бөлүмү, Кызыл-Кыя шаары, Масалиева, 60,&nbsp;<a href="mailto:goroo2013@mail.ru" rel="noopener noreferrer" target="_blank">goroo2013@mail.ru</a>, Телефон: 60126</p>
              <p>БАТКЕН ШААРдык билим берүү бөлүмү, Баткен шаары, Ш. Жусупова көчөсү,&nbsp;<a href="mailto:gorOO_2009@mail.ru" rel="noopener noreferrer" target="_blank">gorOO_2009@mail.ru</a>, Телефон: 51543.</p>
            </div>
            <br />
            <div>
              <p>ТАЛАС ОБЛУСУ</p>
              <p>КАРА-БУУРА&nbsp;райондук билим&nbsp;берүү бөлүмү, Кызыл-Адыр айылы, Ч.Айтматов көчөсү, 7,&nbsp;<a href="mailto:kalybaevb@gmail.com" rel="noopener noreferrer" target="_blank">kalybaevb@gmail.com</a>, Телефон: 60009</p>
              <p>МАНАС райондук билим&nbsp;берүү бөлүмү, Покровка айылы, М.Кояшов көчөсү,&nbsp;<a href="mailto:gsubanova@mail.ru" rel="noopener noreferrer" target="_blank">gsubanova@mail.ru</a>, Телефон: 22574</p>
              <p>БАКАЙ-АТА&nbsp;райондук билим&nbsp;берүү бөлүмү, Манас көчөсү, 103,&nbsp;<a href="mailto:bakaiatarayoo@mail.ru" rel="noopener noreferrer" target="_blank">bakaiatarayoo@mail.ru</a>, Телефон: 32185</p>
              <p>ТАЛАС аймактык&nbsp;билим&nbsp;берүү бөлүмү, Талас шаары, Ч. Сатаев көчөсү, 29,&nbsp;<a href="mailto:Talas_gorOO@mail.ru" rel="noopener noreferrer" target="_blank">Talas_gorOO@mail.ru</a>, Телефон: 52422.</p>
            </div>
            <br />
            <div>
              <p>НАРЫН ОБЛУСУ</p>
              <p>НАРЫН&nbsp;райондук билим берүү бөлүмү, Нарын шаары,&nbsp;Т.Мамбеталиев көчөсү, 20, ишеним тел.: (03532) 5-18-27,&nbsp;<a href="mailto:raion-2013@mail.ru" rel="noopener noreferrer" target="_blank">raion-2013@mail.ru</a>, Телефон: 51776</p>
              <p>АК- Талаа райондук билим берүү бөлүмү, Ак-Талаа айылы, Манас көчөсү,45,&nbsp;<a href="mailto:moldakmatov@gmail.com" rel="noopener noreferrer" target="_blank">moldakmatov@gmail.com</a>, Телефон: 92663</p>
              <p>АТ-БАШЫ&nbsp;райондук билим берүү бөлүмү, Ат-Башы айылы, С.Абыкеев көчөсү, 44,&nbsp;<a href="mailto:raiono_1@mail.ru" rel="noopener noreferrer" target="_blank">raiono_1@mail.ru</a>, Телефон: 60042</p>
              <p>ЖУМГАЛ&nbsp;райондук билим берүү бөлүмү, Чаек айылы, Э.Матыев көчөсү,127,&nbsp;<a href="mailto:jumgalraioo@mail.ru" rel="noopener noreferrer" target="_blank">jumgalraioo@mail.ru</a>, Телефон: 23265</p>
              <p>НАРЫН ШААРдык&nbsp;билим берүү бөлүмү, Нарын шаары, Турдубаев көчөсү,39, ишеним тел.: (03532) 5-18-23,&nbsp;<a href="mailto:naryngoo@mail.ru" rel="noopener noreferrer" target="_blank">naryngoo@mail.ru</a>, Телефон: 51823</p>
              <p>КОЧКОР&nbsp;райондук билим берүү бөлүмү, Кочкор айылы, Токтогул көчөсү,65, ишеним тел.: (03535) 5-11-44,&nbsp;<a href="mailto:kochkor.raibbb@mail.ru" rel="noopener noreferrer" target="_blank">kochkor.raibbb@mail.ru</a>, Телефон: 50971.</p>
            </div>
            <br />
            <div>
              <p>ЫСЫК-КӨЛ ОБЛУСУ</p>
              <p>ТҮП райондук билим берүү бөлүмү, Түп айылы, Боромбай көчөсү, 12,&nbsp;<a href="mailto:tiupskiiroo@mail.ru" rel="noopener noreferrer" target="_blank">tiupskiiroo@mail.ru</a>, Телефон: 24059</p>
              <p>ТОҢ райондук билим берүү бөлүмү, Боконбаев айылы, Ленин көчөсү, 69,&nbsp;<a href="mailto:tonroo2013@mail.ru" rel="noopener noreferrer" target="_blank">tonroo2013@mail.ru</a>, Телефон: 91463</p>
              <p>ЫСЫК-КӨЛ райондук билим берүү бөлүмү, Чолпон-Ата шаары, Мамбеталиев көчөсү, 14,&nbsp;<a href="mailto:issyk11@mail.ru" rel="noopener noreferrer" target="_blank">issyk11@mail.ru</a>, Теелфон: 43187</p>
              <p>ЖЕТИ-ӨГҮЗ райондук билим берүү бөлүмү, Кызыл-Суу айылы, Манас көчөсү, 194,&nbsp;<a href="mailto:abibroo@mail.ru" rel="noopener noreferrer" target="_blank">abibroo@mail.ru</a>&nbsp;,&nbsp;<a href="mailto:moldakunovz@mail.ru" rel="noopener noreferrer" target="_blank">moldakunovz@mail.ru</a>, Телефон: 51465</p>
              <p>АК-СУУ райондук билим берүү бөлүмү, Теплоключенка айылы, Калинин көчөсү, 92,&nbsp;<a href="mailto:temiralievm@mail.ru" rel="noopener noreferrer" target="_blank">temiralievm@mail.ru</a>, Телефон: 92173</p>
              <p>БАЛЫКЧЫ ШААРдык билим берүү бөлүмү, Балыкчы шаары, Аманбаева көчөсү, 151,&nbsp;<a href="mailto:bgoroo@mail.ru" rel="noopener noreferrer" target="_blank">bgoroo@mail.ru</a>, Телефон: 30863</p>
              <p>КАРАКОЛ ШААРдык билим берүү бөлүмү, Каракол шаары,&nbsp;К.Тыныстанов көчөсү, 21,&nbsp;<a href="mailto:karakolgoroo@mail.ru" rel="noopener noreferrer" target="_blank">karakolgoroo@mail.ru</a>, Телефон: 53323.</p>
            </div>
            <br />
            <div>
              <p>ЧҮЙ ОБЛУСУ</p>
              <p>АЛАМҮДҮН райондук билим берүү бөлүмү, Лебединовка айылы, Ленин проспекти, 354а,&nbsp;<a href="mailto:alamudunroo@mail.ru" rel="noopener noreferrer" target="_blank">alamudunroo@mail.ru</a>, Телефон: 617215</p>
              <p>Ысык-АТА райондук билим берүү бөлүмү, Кант шаары, Дзержинский көчөсү 78,&nbsp;<a href="mailto:ysykata79@mail.ru" rel="noopener noreferrer" target="_blank">ysykata79@mail.ru</a>, Телефон: 52109</p>
              <p>ЖАЙЫЛ райондук билим берүү бөлүмү, Кара-Балта шаары, Свердлов көчөсү, 24,&nbsp;<a href="mailto:jayilroo@mail.ru" rel="noopener noreferrer" target="_blank">jayilroo@mail.ru</a>, Телефон: 32811</p>
              <p>КЕМИН райондук билим берүү&nbsp;ПГТ.&nbsp;Кемин , Кемин штп, Абдубачаев к., 45,&nbsp;<a href="mailto:66.66@mail.ru" rel="noopener noreferrer" target="_blank">66.66@mail.ru</a>, Телефон: 50027</p>
              <p>СОКУЛУК&nbsp;райондук билим берүү бөлүмү, Сокулук айылы, Фрунзе көчөсү, 116,&nbsp;<a href="mailto:alina_roo@bk.ru" rel="noopener noreferrer" target="_blank">alina_roo@bk.ru</a>, Телфон: 607596</p>
              <p>МОСКВА райондук билим берүү бөлүмү, Беловодск айылы, Ленин көчөсү, 27,&nbsp;<a href="mailto:moskvaroo@mail.ru" rel="noopener noreferrer" target="_blank">moskvaroo@mail.ru</a>, Телефон: 58190</p>
              <p>ПАНФИЛОВ райондук билим берүү бөлүмү, Каинды ш.т.п., Садовый көчөсү, 7,&nbsp;<a href="mailto:arykov63@mail.ru" rel="noopener noreferrer" target="_blank">arykov63@mail.ru</a>, Телефон: 51299</p>
              <p>Чүй-ТОКМОК билим берүү бөлүмү, Токмок шаары, Ленин көчөсү, 389&nbsp;<a href="mailto:chtoo2016@mail.ru" rel="noopener noreferrer" target="_blank">chtoo2016@mail.ru</a>, Телефон: 34258.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading14">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse14"
            aria-expanded="false"
            aria-controls="flush-collapse14"
          >
            Если потеряли пароль что делать?
          </button>
        </h2>
        <div
          id="flush-collapse14"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading14"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <iframe
              className="ql-video"
              frameBorder="0"
              allowFullScreen={true}
              src="https://www.youtube.com/embed/vXmGEcjXmuc?showinfo=0">
            </iframe>
            <p><br /></p>
            <p>При утере пароля от «Личного кабинета родителя», необходимо пройти по ссылке <strong>«Забыли пароль?»</strong>, далее следовать указанным инструкциям.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading15">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse15"
            aria-expanded="false"
            aria-controls="flush-collapse15"
          >
            Как изменить школу?
          </button>
        </h2>
        <div
          id="flush-collapse15"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading15"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <iframe className="ql-video" frameBorder="0" allowFullScreen={true} src="https://www.youtube.com/embed/7oIKylz9BRg?showinfo=0"></iframe>
            <br />
            <p>Чтобы отменить заявку, Вам необходимо зайти в <strong>"Личный кабинет родителя"</strong> выбрать раздел <strong>"Заявки"</strong>  и нажать на кнопку <strong>"Восклицательный знак"</strong> после откроется заявка, где необходимо нажать на кнопку <strong>"Поменять школу"</strong></p>
            <p><em>ВАЖНО!!!</em></p>
            <p>После смены школы, заявка не подлежит восстановлению !!!</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading16">
          <button
            className="accordion-button text__button__custom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse16"
            aria-expanded="false"
            aria-controls="flush-collapse16"
          >
            Инструкция для родителей и законных представителей для подачи заявления о зачислении в школу
          </button>
        </h2>
        <div
          id="flush-collapse16"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading16"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text__accordion__body">
            <p>
              <iframe className="ql-video" frameBorder={0} allowFullScreen={true} src="https://www.youtube.com/embed/ydFuQ2feegg?showinfo=0"></iframe>
              <p>
                <br />
              </p>
              <p>
                <strong>КАК ПОДАТЬ ЗАЯВЛЕНИЕ?</strong>
              </p>
              <p>Для подачи заявления заполните последовательно следующие сведения:</p>
              <p><em>1. <u>Укажите, кем вы приходитесь ребенку?</u></em></p>
              <ul>
                <li>Отец;</li>
                <li>Мать;</li>
                <li>Законный представитель (при выборе этого пункта требуется  прикрепить соответствующий документ в формате PDF).</li>
              </ul>
              <p><em>2. <u>Сведения о родителе или законном представителе ребенка:</u></em></p>
              <ul>
                <li>Гражданство;</li>
                <li>Персональный идентификационный номер (ПИН), ФИО, паспортные данные (серия, номер);</li>
                <li>Номер мобильного телефона;</li><li>Электронная почта (куда отправиться логин и пароль);</li>
                <li>Дополнительная электронная почта (служат для восстановления учетной записи);</li>
                <li>Дать согласие на обработку персональных данных.</li>
              </ul>
              <p><em>3. <u>Сведения о ребенке:</u></em></p>
              <ul><li>Страна рождения;</li>
                <li>Персональный идентификационный номер (ПИН), ФИО;</li>
                <li>Серия, номер свидетельства о рождении;</li>
                <li>Имеется или не имеется льгота (при выборе этого пункта требуется прикрепить соответствующий документ в формате PDF).</li>
              </ul>
              <p><em>4.<u> Выбор школы:</u></em></p>
              <p><strong>По первому этапу:</strong></p>
              <ul>
                <li>Желаемый язык обучения;</li>
                <li>По адресу прописки родителей в системе автоматически отображается соответствующая школа.</li>
              </ul>
              <p><strong>По второму этапу:</strong></p>
              <ul>
                <li>Желаемый язык обучения;</li>
                <li>Область/город</li>
                <li>Заявитель может выбирать любую школу, при наличии свободных мест.</li>
              </ul>
              <p>5. <em><u>Просмотр заполненных сведений перед подачей заявления:</u></em></p>
              <p>Перед подачей заявления требуется проверить заполненные в заявлении сведения.</p>
              <p>После подтверждения заявления Вам будет направлено на электронную почту <strong>уведомление</strong> об успешной подаче заявления для зачисления в школу.</p>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item ">
        <h2 className="accordion-header" id="flush-heading17">
          <button
            className="accordion-button text__button__custom  rounded-bottom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse17"
            aria-expanded="false"
            aria-controls="flush-collapse17"
          >
            Есть ли ограничения по выбору школы?
          </button>
        </h2>
        <div
          id="flush-collapse17"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading17"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body  rounded-bottom">
            <p>Можно выбрать <b>только одну школу</b> по микроучастку на первом этапе либо вне микроучастка на втором этапе.</p>
            <p>Система не предусматривает прием детей в специализированные школы и классы, интернаты, музыкальные школы.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item rounded rounded-bottom">
        <h2 className="accordion-header" id="flush-heading18">
          <button
            className="accordion-button text__button__custom  rounded-bottom collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse18"
            aria-expanded="false"
            aria-controls="flush-collapse18"
          >
            Если отсутствует адрес регистрации.
          </button>
        </h2>
        <div
          id="flush-collapse18"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading18"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body  rounded-bottom">
            <p>Если отсутствует адрес регистрации, необходимо обратиться в ближайший ЦОН для уточнения адреса.</p>
            <p>
              В случае, если Вы являетесь собственником жилья, при себе иметь следующие документы:
              <ul>
                <li>паспорт;</li>
                <li>технический паспорт недвижимости.</li>
              </ul>
            </p>
            <p>В случае, если не являетесь собственником жилья, то владелец жилья вместе с вами должен подать заявление о регистрации. </p>
            <p>
              При себе иметь:
              <ul>
                <li>паспорт;</li>
                <li>паспорт владельца жилья;</li>
                <li>технический паспорт недвижимости.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
}
