import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({price,name,image,id,type}) => {
  let dispatch=useDispatch()
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg gap-3 hover:border-2 border-purple-600">
      <div className="w-[100%] h-[70%] overflow-hidden rounded-lg">
        <img src={image} alt="Image not found" className="object-cover"/>
      </div>
      <div className="text-2xl font-semibold">
        {name}
      </div>
      <div className="w-[100%] flex justify-between items-center">
        <div className="text-l font-bold text-purple-600">
          Rs {price}
        </div>
         <div className="flex justify-center items-center gap-2 text-purple-600 text-lg font-semibold">

          {type==="veg"?<LuLeafyGreen/>:<GiChickenOven/>}
          <span>{type}</span>
         </div>
      </div>
      <button className="w-full p-3 bg-purple-300 rounded-xl shadow-lg text-gray-800 hover:bg-purple-400 hover:font-semibold transition-all" onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))
      toast.success("Item Added  :)")
    }}>Add to dish</button>
    </div>
  )
}

export default Card
