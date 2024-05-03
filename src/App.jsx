import { Route, Routes } from "react-router-dom";
import Oredes from "./page/Oredes.jsx";
import Home from "./page/Home.jsx";
import Footer from "./companents/footer/Footer.jsx";
import Output from "./page/Output.jsx";
import Heading from "./companents/header/Heading.jsx";
import Login from './page/login.jsx'
function App() {
  return (
    <div className="app">
      <Heading />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Oredes />} />
          <Route path="output" element={<Output />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
