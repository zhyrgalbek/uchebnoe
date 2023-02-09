import "./App.css";
import Router from "./routes/Router";
import { useEffect } from "react";
import togglewhite from "./assets/Filter/Framewhite.svg";

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
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            zIndex: 1000,
            width: "50px",
            height: "50px",
            top: '85%',
            left: "94%",
            textAlign: "center",
            backgroundColor:"transparent",
            border: '1px solid #a2b6ff',
            borderRadius:"50px"
          }}
        >
          <img src={togglewhite} width='40' style = {{transform: 'rotate(180deg)',filter: 'invert(52%) sepia(24%) saturate(4842%) hue-rotate(208deg) brightness(103%) contrast(103%)', Loss: '2.8'}}/>
        </button>
      </div>
    </>
  );
}

export default App;
