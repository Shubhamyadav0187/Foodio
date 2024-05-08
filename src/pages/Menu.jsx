import React from 'react'
import CategoryMenu from "../components/CategoryMenu";
import FoodItem from "../components/FoodItem";
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const Menu = () => {
  return (
    <>
    <CategoryMenu />
      <FoodItem />
      <Cart/>
      <Footer/>
    </>
  )
}

export default Menu