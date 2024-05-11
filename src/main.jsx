import App from "./App.jsx";
import "./style/style.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './style/responsiv.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
