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
          <Route path="WhenPressed" element={<WhenPressed />} />
          <Route path="PraductRight" element={<PraductRight />} />
          <Route path="ProductMini" element={<ProductMini />} />
          <Route path="Product" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
