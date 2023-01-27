import { Route, Routes } from "react-router-dom";
import CategoriesPreview2 from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.style.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview2 />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
