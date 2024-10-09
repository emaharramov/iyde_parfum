import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Porducts";
import SingleProduct from "./Pages/SingleProduct";
import Basket from "./Pages/Basket";
import LoginPage from "./Pages/LoginPage";
import Contact from "./Pages/Contact";
import Others from "./Pages/Others";
import Stores from "./Pages/Stores";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products/:id" element={<Products/>} />
      <Route path="/product/:id" element={<SingleProduct/>} />
      <Route path="/basket" element={<Basket/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/others/:par" element={<Others/>} />
      <Route path="/stores" element={<Stores/>} />
      <Route path="/blogs" element={<Blogs/>} />
      </Route>
    </Routes>
  );
}

export default App;
