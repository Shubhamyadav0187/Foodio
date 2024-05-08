import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

export const Nav = () => {
  const dispatch = useDispatch();
  
  return (
    <div className='relative bg-slate-200  w-full px-20 p-8   font-["Neue Montreal"] flex flex-col lg:flex-row justify-between item-center'>

      <div className='flex gap-2'>
        <div className='rounded bg-red-600 px-4 item-center py-2  mb-1.5  text-white'><h1 className='text-xl font-semibold'>F</h1></div>
        <div className='mt-2 font-semibold'>Foodio.</div>
      </div>

      <div className='links flex gap-10'>
        {["Home", "Menu", "About", "Order online", "Contact"].map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase().replace(/\s/g, '')}`} className={`text-lg font-light ${index === 0 && "ml-32"}`}>
            {item}
          </Link>
        ))}
      </div>

      <div>
        <input
          type="search"
          name="search"
          id=" "
          placeholder='Search here'
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className='p-2.5 border border-gray-400 text-sm rounded-lg outline-none w-[20vw]'
        />
      </div>

      <div className='flex gap-7  item-center'>
        

        <Link to="/login">
          <button className='bg-red-600 rounded-xl px-8 font-semibold semi-bold py-2 text-white'>Log in</button>
        </Link>
      </div>

    </div>
  )
}

export default Nav;


