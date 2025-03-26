import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import { Categories } from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { ImCross } from "react-icons/im";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Home = () =>{
  let{cate,setCate,input,showCart,setShowCart} =useContext(dataContext)
  function filter (category){
    if(category==="All"){
      setCate(food_items)
    }else{
      let newList=food_items.filter((item)=>(
        item.food_category===category
      ))
      setCate(newList)
    }
  }

  let items=useSelector(state=>state.cart)

  let subtotal= items.reduce((total,item)=>total+item.qty*item.price,0)
  //console.log(subtotal);
  let deliveryFee=20;
  let taxes=subtotal*0.5/100;
  let Total = Math.floor(subtotal+deliveryFee+taxes);

  return (
    <div className='bg-slate-300 w-full min-h-screen'>
      <Nav/>
      {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item)=>{ 
          return(
          <div className='w-[100px] h-[100px] bg-white flex flex-col justify-startgap-1 p-3 items-center text-[13px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-purple-300 hover:text-purple-600 cursor-pointer transition-all duration-300' onClick={()=>filter(item.name)}>
            {item.image}
            {item.name}
          </div> 
          )})
        }
      </div>:null}
      
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.length>1?cate.map((item)=>{
          return( 
          <Card price={item.price} name={item.food_name} type={item.food_type} image={item.food_image} id={item.id}/>
        )}):<div className='text-2xl text-gray-500'>No dish found  :|</div>}
        
      </div>

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-purple-600 text-[18px] font-semibold'>Order Items</span>
          <ImCross className='h-[30px] w-[20px] text-purple-600 text-[18px] font-semibold cursor-pointer hover:text-black' onClick = {()=>setShowCart(false)}/>
        </header>
        {items.length>0?
        <>
        <div className='w-full mt-8 flex flex-col gap-7'>
          {items.map((item)=>(
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-500 mt-7 flex flex-col gap-2 p-8'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
            <span className='text-purple-400 font-semibold text-lg'>Rs {subtotal}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
            <span className='text-purple-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
            </div>
            <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
            <span className='text-purple-400 font-semibold text-lg'>Rs {taxes}/-</span>
            </div>
            
           
        </div>
        <div className='w-full flex justify-between items-center p-9'>
            <span className='text-2xl text-gray-600 font-semibold'>Total</span>
            <span className='text-purple-400 font-semibold text-2xl'>Rs{Total}/-</span>
            </div>
            <button className="w-[80%] p-3 bg-purple-300 rounded-xl shadow-lg text-gray-800 hover:bg-purple-400 hover:font-semibold transition-all" onClick={()=>toast.success("Order Placed!")} >Place Order</button>
            </>:
            <div className='text-2xl text-center text-gray-500 font-semibold border-b-5 border-t-5 pt-4 pb-4'>Empty Cart</div>
            }
        
      </div>
    </div>
      )
}

export default Home
