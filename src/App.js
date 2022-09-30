import "./App.css";
import React from "react";
import Navbar from "./componentes/navegacion/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import {CartProvider} from "./componentes/Context/CartContext";
import { Cart } from "./componentes/Cart/Cart";
import { CheckOut } from "./componentes/CheckOut/CheckOut";
import { Category } from "./componentes/Category/Category";


function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Checkout" element={<CheckOut/>} />
          <Route path="/category/:idCategory" element={<Category/>} />
          </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
