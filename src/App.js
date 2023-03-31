import "./App.css";
import Router from "./routes/Router";
import { useEffect, useState } from "react";
import togglewhite from "./assets/Filter/Framewhite.svg";
import toggle from "./assets/Filter/Frame.svg";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const { status, messages } = useSelector(store => store.institutionsStore);
  const [color, setColor] = useState(false);
  const notify = ({ text, variant }) => {
    return toast[variant](text);
  }

  // console.log(statusInstitution)

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (status === 'rejected') {
      if (messages !== '') {
        notify({ text: messages, variant: 'error' })
        return;
      }
      notify({ text: 'На сервере ошибки!', variant: 'error' })
    }
    if (status === 'fulfilled') {
      notify({ text: 'Данные получены успешно!', variant: 'success' })
    }
  }, [status])

  const onScrollFunc = (e) => {
    console.log(window.pageYOffset)
  }

  return (
    <>
      <div className="App" onScroll={onScrollFunc}>
        <Router />
      </div>
      <div>
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <img src={!color ? toggle : togglewhite} width='40' style={{ transform: 'rotate(180deg)', }} />
        </Button>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;

const Button = styled('button')`
  position: fixed;
  z-index: 1000;
  width: 50px;
  height: 50px;
  top: 90%;
  left: 93.8%;
  text-align: center;
  background-color: #fff;
  border: 1px solid #a2b6ff;
  border-radius: 50px;
  @media screen and (max-width: 780px){
    left: auto;
    right: 20px;
  }
`

