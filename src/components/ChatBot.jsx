import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import chatbot from "../assets/IconCounter/message.svg";


export const ChatBotButton = () => {
    const [openChat, setOpenChat] = useState(false)
    const onClickChatBtn = () => {
        setOpenChat(true);
    }
    return <ContainerChat>
        {
            openChat && <ChatBot />
        }
        <ChatBotButtonBlock onClick={onClickChatBtn}>
            <img
                src={chatbot}
                width="40"
                style={{
                }}
            />
        </ChatBotButtonBlock>
    </ContainerChat>
}

const ContainerChat = styled('div')`
    position: fixed;
    z-index: 1000;
    top: 65%;
    left: 94%;
    `

const ChatBotButtonBlock = styled('button')`
    padding: 10px 10px;
    text-align: center;
    background-color: #6A8AFF;
    border: 1px solid #6A8AFF;
    border-radius: 50px;
`


const data = [
    { id: 1, text: 'Когда повысят зарплаты работников правоохранительных органов?' },
    { id: 2, text: 'Когда повысят пенсии?' },
    { id: 2, text: 'Когда получить бепроцентный кредит?' }
]


const ChatList = ({ data }) => {
    return <ChatListBlock>
        {
            data.map(elem => {
                return <ChatListItem key={elem.id}>{elem.text}</ChatListItem>
            })
        }
    </ChatListBlock>
}

const ChatListItem = styled('li')`
    border-radius: 6px;
    padding: 5px;
    text-align: center;
    color: #fff;
    background: #408591;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
`
const ChatListBlock = styled('ul')`
    /* border: 1px solid red; */
    margin: 0;
    padding: 0;
    list-style: none;
    width: 260px;
`

const ChatBot = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello, how can I help you?", variant: 'admin' },
    ]);

    useEffect(() => {
        if (messages[messages.length - 1].text === 'привет') {
            setMessages((prev) => {
                return [...prev, { id: Date.now(), text: <ChatList data={data} />, variant: 'admin' }]
            })
        }
    }, [messages])

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages([...messages, { id: Date.now(), text: input, variant: 'client' }]);
        setInput("");
    };

    return (
        <ChatBotBlock>
            {/* <Paper sx={{ width: '350px', borderRadius: '6px', overflow: 'hidden', marginBottom: '30px' }}> */}
            <ChatBotHeader>
                <ChatBotHeaderText>чат-бот</ChatBotHeaderText>
            </ChatBotHeader>
            <ChatBotWindow className="chat-window">
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
                    placeholder="Enter your message..."
                />
                <button type="submit">отправить</button>
            </ChatBotForm>
            {/* </Paper> */}
        </ChatBotBlock>
    );
};

export default ChatBot;

const ChatBotForm = styled('form')`
    background: #fff;
    padding: 10px;
    display: flex;
    & > input{
        border: none;
        padding: 10px;
        outline: none;
    }
    &>button{
        padding: 10px;
        background: #6A8AFF;
        border: none;
        color: #fff;
    }
`
const Span = styled('span')`
    display: inline-block;
    background: #dae1e7;
    border-top-left-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 10px;
    ${props => props.variant === 'client' && css`
        border-top-right-radius: 0;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    `}
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
    height: 350px;
`

const ChatBotHeaderText = styled('h2')`
    font-size: 18px;
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
    width: 360px;
    border-radius: 6px;
    margin-bottom: 30px;
    /* padding: 5px; */
    overflow: auto;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`