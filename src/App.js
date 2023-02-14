import "./App.css";
import Router from "./routes/Router";
import { useEffect } from "react";
import togglewhite from "./assets/Filter/Framewhite.svg";
import styled from "styled-components";

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="App">
        <Router />
      </div>
      <div>
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{

          }}
        >
          <img src={togglewhite} width='40' style={{ transform: 'rotate(180deg)', filter: 'invert(52%) sepia(24%) saturate(4842%) hue-rotate(208deg) brightness(103%) contrast(103%)', Loss: '2.8' }} />
        </Button>
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
  background-color: transparent;
  border: 1px solid #a2b6ff;
  border-radius: 50px;
  @media screen and (max-width: 780px){
    left: auto;
    right: 14px;
  }
`

