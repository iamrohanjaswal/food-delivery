import React,{useContext, useEffect} from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch,FaCartPlus  } from "react-icons/fa";
import {dataContext} from '../context/UserContext'
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Nav = () => {

  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext);
  useEffect(()=>{
    let newList=food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setCate(newList)
  },[input])

  let items=useSelector(state=>state.cart)


  return (
    <div className='w-full h-[100px] flex justify-between items-center px-7 md:px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <MdFastfood className='w-[40px] h-[40px] text-purple-600'/>
        </div>

        <form className='w-[40%] h-[60px] bg-white flex items-center px-4 gap-4 rounded-md shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
            <FaSearch className='text-purple-600 w-[30px] h-[30px]'/>
            <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
        </form>

        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
          setShowCart(true)
        }}>
          <span className='absolute top-0 right-0 text-purple-600 font-bold text-[18px]'>{items.length}</span>
            <FaCartPlus className='w-[40px] h-[40px] text-purple-600'/>
        </div>
    </div>
  )
}

export default Nav
