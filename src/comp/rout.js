import React from 'react'
import { Routes, Route } from "react-router";
import EmptyCategory from './category/empty-category';
import CreateCategory from './category/create-category';
import Category from './category/category-page';

const Rout = () => {
  return (
    <>
    <Routes>
    <Route path='/category/empty-category' element={<EmptyCategory />}/>
    <Route path='/category/category-page' element={<Category />}/>
    <Route path='/category/create-category' element={<CreateCategory />} />
    </Routes>
    </>
  )
}

export default Rout