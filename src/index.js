import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./components/navbar/NavBar"
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NavBar/>
    <App />
  </StrictMode>,
  rootElement
);
