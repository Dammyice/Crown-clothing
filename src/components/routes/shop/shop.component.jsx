import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview2 from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.style.scss";
import { fetchCategoriesStart } from "../../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview2 />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
