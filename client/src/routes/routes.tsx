import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home.component";
import Product from "../pages/product/product.component";
import Cart from "../pages/cart/cart.component";
import NotFound from "../pages/notFound/notFound.component";
import Category from "../pages/category/category.component";

function AppRoutes(){
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category" element={<Category/>} />
          <Route path="/category/:dress" element={<Category />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/404" element={<NotFound/>} />
          <Route path="*" element={<Home />} />
      </Routes>
  )
};
export default AppRoutes;
