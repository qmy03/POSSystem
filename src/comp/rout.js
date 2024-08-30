import React from 'react'
import { Routes, Route } from "react-router";
import EmptyCategory from './category/empty-category';
import CreateCategory from './category/create-category';
import Category from './category/category-page';
import EmptyProduct from './product/empty-product';
import CreateProduct from './product/create-product';

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/category/empty-category' element={<EmptyCategory />} />
        <Route path='/category/category-page' element={<Category />} />
        <Route path='/category/create-category' element={<CreateCategory />} />
        <Route path='/product/empty-product' element={<EmptyProduct />} />
        <Route path='/product/create-product' element={<CreateProduct />} />
      </Routes>
    </>
  )
}

export default Rout