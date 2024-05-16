import { Route, Routes } from "react-router-dom";
import Oredes from "./page/Oredes.jsx";
import Home from "./page/Home.jsx";
import Footer from "./companents/footer/Footer.jsx";
import Output from "./page/Output.jsx";
import Heading from "./companents/header/Heading.jsx";
import Login from './page/login.jsx'
import WhenPressed from './page/WhenPressed.jsx' 
import PraductRight from "./companents/main/PraductRight.jsx";
import ProductMini from "./companents/main/ProductMini.jsx";
import Product from "./companents/main/Product.jsx";
import { useState } from "react";
import Modal from "./companents/modal/Modal.jsx";
function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      <Heading setOpen={setOpen}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Oredes />} />
          <Route path="output" element={<Output />} />
          <Route path="login" element={<Login />} />
          <Route path="WhenPressed" element={<WhenPressed />} />
          <Route path="PraductRight" element={<PraductRight />} />
          <Route path="ProductMini" element={<ProductMini />} />
          <Route path="Product" element={<Product />} />
        </Routes>
      </div>
      <Footer />
      <Modal setOpen={setOpen} open={open}/>
    </div>
  );
}

export default App;
