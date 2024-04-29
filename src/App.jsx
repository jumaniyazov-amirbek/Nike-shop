import { Route, Routes } from "react-router-dom";
import Oredes from "./page/Oredes.jsx";
import Home from "./page/Home.jsx";
import Header from "./companents/header/Header.jsx";
import Footer from "./companents/footer/Footer.jsx";
import Output from "./page/Output.jsx";
import Heading from "./companents/header/Heading.jsx";
function App() {
  return (
    <div className="app">
      <Header />
      <Heading />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Oredes />} />
          <Route path="output" element={<Output />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
