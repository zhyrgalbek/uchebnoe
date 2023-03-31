// import { Paper } from "@mui/material";]
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import chatbot from "../assets/IconCounter/message.svg";
import chatbotWhite from "../assets/IconCounter/messageWhite.svg";
import krestik from '../assets/Map/krestik.svg';


const chatbotText = [
    [
        {
            text: 'Здраствуйте, чем я могу вам помочь?',
        },
        {
            text: 'была ли это информация полезной?'
        },
        {
            text: 'Рады были Вам помочь! Спасибо за обращение!'
        },
        {
            text: 'Если вы не получили ответ на свой вопрос, напишите нам на почту check.edu.gov.kg.@gmail.com'
        },
        {
            text: 'Введите ваше сообщение'
        },
        {
            text: 'Выберите пункты'
        }
    ],
    [
        {
            text: 'Саламатсызбы, сизге кантип жардам берсем болот?'
        },
        {
            text: 'бул маалымат пайдалуу болдубу?'
        },
        {
            text: 'Биз сизге жардам бергенибизге кубанычтабыз! Пикириңиз үчүн рахмат!'
        },
        {
            text: 'Сурооңузга жооп ала элек болсоңуз, бизге check.edu.gov.kg.@gmail.com дарегине кат жазыңыз.'
        },
        {
            text: 'Кабарыңызды киргизиңиз'
        },
        {
            text: 'Элементтерди тандаңыз'
        }
    ]
]

export const Question = ({ onClick }) => {
    return <h3 onClick={onClick}>Вы нашли ответ на свой вопрос?</h3>
}


export const ChatBotButton = () => {
    const [openChat, setOpenChat] = useState(false)
    const onClickChatBtn = () => {
        setOpenChat(true);
    }
    const handleClose = () => {
        setOpenChat(false);
    }
    return <ContainerChat>
        {
            openChat && <ChatBot handleClose={handleClose} />
        }
        <ChatBotButtonBlock onClick={onClickChatBtn} img={chatbot} img2={chatbotWhite}>
        </ChatBotButtonBlock>
    </ContainerChat>
}

const ContainerChat = styled('div')`
    position: fixed;
    z-index: 1000;
    top: 80%;
    left: 93.5%;
    @media screen and (max-width: 780px){
        /* top: 65%; */
        left: auto;
        right: 18px;
    }
`

const ChatBotButtonBlock = styled('button')`
    padding: 10px 10px;
    text-align: left;
    background-color: #fff;
    background-image: url(${props => props.img2});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 57px;
    height: 57px;
    border: 1px solid rgba(55, 99, 255, 0.3);
    border-radius: 50px;
    transition: 0.2s ease;
    &:hover{
        background-color: #6A8AFF;
        background-image: url(${props => props.img});
    }
`


const data = [
    [

        { id: 2, vopros: 'Если моему ребенку 5,5 лет могу ли зарегистрировать ребенка?', text: 'Регистрация ребенка в системе «Электронная запись в школу» возможна при условии исполнения ребенку полных 6 лет на начало учебного года.' },
        {
            id: 3, vopros: 'А если моему ребенку исполнилось уже 8-9 лет, можем ли мы пойти в школу?', text: 'Регистрация ребенка в системе «Электронная запись в школу» возможна при условии исполнения ребенку полных 6 лет на начало учебного года.'
        },
        {
            id: 4, vopros: 'Где и как узнать, за какой школой закреплен мой адрес проживания?', text: `Перейдите по данному адресу, чтобы узнать в какую школу вы относитесь. mektep.edu.gov.kg/organization-check c помощью данной услуги Вы можете узнать в какую школу вы относитесь, указав ПИН отца/матери и нажав на кнопку «Проверить».`
        },
        {
            id: 5, vopros: ' Могу ли я зарегистрировать своего ребенка в этом году, но пойти в школу в следующем году?', text: 'НЕТ, регистрировать ребенка заранее нельзя.'
        },
        {
            id: 6, vopros: ' Если нет свидетельства о рождении ребенка, что делать?', text: 'Если нет свидетельства о рождении ребенка или паспорта родителя, на момент подачи заявления в систему, необходимо:Обратиться в ЦОН и получить документ; Обратится в Комиссию по делам детей при местной государственной администрации.'
        },

    ],
    [

        { id: 2, vopros: 'Балам 5,5 жашта болсо, баламды каттасам болобу?', text: 'Баланы “Мектепке электрондук кабыл алуу” системасында каттоо, эгерде бала окуу жылынын башында 6 жашка толсо, мүмкүн.' },
        {
            id: 3, vopros: 'Анан балам 8-9 жашта болсо мектепке барсак болобу?', text: 'Баланы “Мектепке электрондук кабыл алуу” системасында каттоо, эгерде бала окуу жылынын башында 6 жашка толсо, мүмкүн.'
        },
        {
            id: 4, vopros: 'Менин жашаган дарегиме кайсы мектеп дайындалганын кайдан жана кантип билсем болот?', text: 'Кайсы мектепке таандык экениңизди билүү үчүн бул дарекке өтүңүз https://mektep.edu.gov.kg/organization-check Бул кызматтын жардамы менен атаңыздын/апаңыздын ПИН-кодун киргизип, “Текшерүү” баскычын басуу менен кайсы мектепке таандык экениңизди биле аласыз.'
        },
        {
            id: 5, vopros: 'Баламды быйыл каттатып, кийинки жылы мектепке барсам болобу?', text: 'ЖОК, баланы алдын ала каттоого болбойт.'
        },
        {
            id: 6, vopros: 'Эгерде баланын туулгандыгы тууралуу күбөлүгү жок болсо, эмне кылуу керек?', text: 'Эгерде баланын туулгандыгы тууралуу күбөлүгү же ата-энесинин паспорту жок болсо, системага арыз берген учурда: КТБга кайрылуу жана документти алуу; Жергиликтүү мамлекеттик администрациянын алдындагы балдар иштери боюнча комиссияга кайрылууга.'
        },
    ]
]

const ChatList = ({ data, onClick }) => {
    const { translation } = useSelector(store => store.translationStore)
    return <>
        <Box sx={{
            fontSize: '0.8rem', marginBottom: '8px',
            '@media screen and (max-width: 568px)': {
                fontSize: '1rem'
            }
        }}>
            {chatbotText[translation][5].text}
        </Box>
        <ChatListBlock>
            {
                data[translation].map(elem => {
                    return <ChatListItem key={elem.id} onClick={() => onClick(elem.text)}>{elem.vopros}</ChatListItem>
                })
            }
        </ChatListBlock>
    </>
}

const ChatListItem = styled('li')`
    border-radius: 6px;
    padding: 5px;
    text-align: left;
    color: #fff;
    background: #408591;
    margin-bottom: 4px;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1rem;
    cursor: pointer;
    @media (max-width: 568px){
        font-size: 1rem;
    }
`
const ChatListBlock = styled('ul')`
    /* border: 1px solid red; */
    margin: 0;
    padding: 0;
    list-style: none;
    width: 260px;
`

function proverka(text, prev) {
    if (prev?.variant !== 'voprosbot' && text?.variant === 'client') {
        return '1';
    }
    if (
        prev?.variant === 'voprosbot' && text?.text === 'да'
        || prev?.variant === 'voprosbot' && text?.text === 'ооба'
        || prev?.variant === 'voprosbot' && text?.text === 'оба'
        || prev?.variant === 'voprosbot' && text?.text === 'yes'
    ) {
        return '2';
    }
    if (prev?.variant === 'voprosbot' && text?.text !== '') {
        return '3';
    }
    return false;
}

const ChatBot = ({ handleClose }) => {
    const { translation } = useSelector(store => store.translationStore)
    const [input, setInput] = useState("");
    const [btn, setBtn] = useState(false);
    const windowref = useRef();
    const [messages, setMessages] = useState([]);
    const [one, setOne] = useState(true);
    const onClickItem = (text) => {
        setMessages((prev) => {
            let arr = prev.filter(elem => elem.variant !== 'vopros');
            arr = [...arr, { id: Date.now(), text: <div className="loader"></div>, variant: 'loader' }]
            return arr;
        });
        setTimeout(() => {
            setMessages((prev) => {
                let arr = prev.filter(elem => elem.variant !== 'loader');
                arr = [...arr, { id: Date.now(), text: text, variant: 'admin' }]
                return arr;
            })
            setTimeout(() => {
                setMessages((prev) => {
                    return [...prev, { id: Date.now(), text: <div className="loader"></div>, variant: 'loader' }]
                });
                setTimeout(() => {
                    setMessages((prev) => {
                        let arr = prev.filter(elem => elem.variant !== 'loader');
                        arr = [...arr, { id: Date.now(), text: chatbotText[translation][1].text, variant: 'voprosbot' }]
                        return arr;
                    });
                }, 3000)
            }, 3000)
        }, 1000)
    }

    useEffect(() => {
        windowref.current.scrollTo(0, windowref.current.scrollHeight)
        // console.log(windowref.current.scrollHeight)
    }, [messages])

    useEffect(() => {
        if (messages.length === 0) {
            var time = setTimeout(() => {
                setTimeout(function () {
                    setMessages((prev) => {
                        let arr = prev.filter(elem => elem.variant !== 'loader');
                        arr = [...arr, { id: Date.now(), text: chatbotText[translation][0].text, variant: 'admin' }]
                        return arr;
                    });
                }, 1000);
                setMessages((prev) => {
                    let loader = prev.find(elem => elem.variant === 'loader')
                    if (!loader) {
                        return [...prev, { id: Date.now(), text: <div className="loader"></div>, variant: 'loader' }]
                    }
                    return prev;
                });
            }, 500)
        }
        if (proverka(messages[messages.length - 1], messages[messages.length - 2]) === '1') {
            var time = setTimeout(function () {
                setMessages((prev) => {
                    let arr = prev.filter(elem => elem.variant !== 'loader');
                    arr = [...arr, { id: Date.now(), text: <ChatList data={data} onClick={onClickItem} />, variant: 'vopros' }]
                    return arr;
                });
            }, 1000);
            setMessages((prev) => {
                let loader = prev.find(elem => elem.variant === 'loader')
                if (!loader) {
                    return [...prev, { id: Date.now(), text: <div className="loader"></div>, variant: 'loader' }]
                }
                return prev;
            });
        }
        if (proverka(messages[messages.length - 1], messages[messages.length - 2]) === '2') {
            var time = setTimeout(function () {
                setMessages((prev) => {
                    let arr = prev.filter(elem => elem.variant !== 'loader');
                    arr = [...arr, { id: Date.now(), text: chatbotText[translation][2].text, variant: 'vopros' }]
                    return arr;
                });
            }, 1000);
            setMessages((prev) => {
                let loader = prev.find(elem => elem.variant === 'loader')
                if (!loader) {
                    return [...prev, { id: Date.now(), text: <div className="loader"></div>, variant: 'loader' }]
                }
                return prev;
            });
        }
        if (proverka(messages[messages.length - 1], messages[messages.length - 2]) === '3') {
            var time = setTimeout(function () {
                setMessages((prev) => {
                    let arr = prev.filter(elem => elem.variant !== 'loader');
                    arr = [...arr, { id: Date.now(), text: chatbotText[translation][3].text, variant: 'vopros' }]
                    return arr;
                });
            }, 1000);
            setMessages((prev) => {
                let loader = prev.find(elem => elem.variant === 'loader')
                if (!loader) {
                    return [...prev, { id: Date.now(), text: <div className="loader"></div>, variant: 'loader' }]
                }
                return prev;
            });
        }
        return () => {
            clearTimeout(time)
        }
    }, [btn])

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages([...messages, { id: Date.now(), text: input, variant: 'client' }]);
        setInput("");
        setBtn(prev => !prev);
    };

    return (
        <ChatBotBlock>
            {/* <Paper sx={{ width: '350px', borderRadius: '6px', overflow: 'hidden', marginBottom: '30px' }}> */}
            <ChatBotHeader>
                <ChatBotHeaderText><HeaderSpan>Чат-бот</HeaderSpan><Img src={krestik} onClick={handleClose} /></ChatBotHeaderText>
            </ChatBotHeader>
            <ChatBotWindow className="chat-window" ref={windowref} id="chatWindow">
                {messages.map((message) => {
                    return <ChatBotText key={message.id} variant={message.variant}>
                        <Span variant={message.variant}>
                            {message.text}
                        </Span>
                    </ChatBotText>
                })}
                <Anchor />
            </ChatBotWindow>
            <ChatBotForm onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder={chatbotText[translation][4].text}
                />
                <button type="submit">отправить</button>
            </ChatBotForm>
            {/* </Paper> */}
        </ChatBotBlock>
    );
};

export default ChatBot;

const Img = styled('img')`
    cursor: pointer;
`

const HeaderSpan = styled('span')`
    
`

const ChatBotForm = styled('form')`
    background: #fff;
    padding: 10px;
    display: flex;
    font-size: 0.8rem;
    & > input{
        border: none;
        padding: 10px;
        outline: none;
        width: 100%;
    }
    &>button{
        padding: 10px;
        background: #6A8AFF;
        border: none;
        color: #fff;
        border-radius: 6px;
    }
    @media (max-width: 568px){
        font-size: 1rem;
    }
`
const Span = styled('p')`
    display: inline-block;
    position: relative;
    background: #dae1e7;
    border-top-left-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 0.8rem;
    margin: 0;
    padding: 10px;
    ${props => props.variant === 'client' && css`
        border-top-right-radius: 0;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    `}
    @media (max-width: 568px){
        font-size: 1rem;
    }
`
const ChatBotText = styled('div')`
    /* border: 1px solid red; */
    display: flex;
    margin-bottom: 10px;
    overflow-anchor: none;
    width: 100%;
    justify-content: start;
    ${props => props.variant === 'client' && css`
        justify-content: flex-end;
    `}
`

const Anchor = styled('div')`
    overflow-anchor: auto;
    height: 1px;
`
const ChatBotWindow = styled('div')`
    background: #F1F5F5;
    padding: 10px;
    position: relative;
    bottom: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    height: 370px;
`

const ChatBotHeaderText = styled('h2')`
    font-size: 18px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const ChatBotHeader = styled('div')`
    /* border: 1px solid #6A8AFF; */
    background: #6A8AFF;
    color: #fff;
    padding: 10px;
    /* margin-left:-1px; */
`

const ChatBotBlock = styled('div')`
    /* border: 1px solid red; */
    position: absolute;
    bottom: -30px;
    right: 0;
    width: 350px;
    border-radius: 6px;
    margin-bottom: 30px;
    /* padding: 5px; */
    overflow: hidden;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    @media (max-width: 568px){
        right: none;
        width: 90vw;
    }
`