import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';


const Card2 = ({name,id,price,image,qty}) => {
  let dispatch=useDispatch()
  return (
    <div className='w-full h-[140px] p-2 shadow-lg flex justify-between'>
      <div className='w-[70%] h-full flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>
        <div className='w-[40%] h-full flex flex-col'>
            <div className='text-lg font-semibold'>{name}</div>
            <div className='w-[110px] h-[50px] flex rounded-lg overflow-hidden font-semibold shadow-lg border-2 border-purple-400 text-xl'>
                <button className='w-[30%] h-full bg-white flex justify-center items-center text-purple-600 hover:bg-purple-200' onClick={()=>qty>1?dispatch(DecrementQty(id)):1}>-</button>
                <span className='w-[40%] h-full  bg-slate-300 flex justify-center items-center'>{qty}</span>
                <button className='w-[30%] h-full bg-white flex justify-center items-center text-purple-600 hover:bg-purple-200' onClick={()=>dispatch(IncrementQty(id))}>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-xl text-purple-400 font-semibold'>
           Rs {price}
        </span>
        <RiDeleteBin6Line className='w-[30px] h-[25px] text-red-700 cursor-pointer' onClick={()=>{dispatch(RemoveItem(id));
          toast.error("Item Removed  :|")
        }}/>
      </div>
    </div>
  )
}

export default Card2
