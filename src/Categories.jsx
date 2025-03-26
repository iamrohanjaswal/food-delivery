import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { PiHamburgerDuotone } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";
import { CiForkAndKnife } from "react-icons/ci";




export const  Categories=[
    {
        id:1,
        name:"All",
        image: <TiThSmall className='w-[40px] h-[40px] text-purple-600'/>

    },
    {
        id:2,
        name:"BreakFast",
        image: <MdOutlineFreeBreakfast className='w-[40px] h-[40px] text-purple-600' />

    },
    {
        id:3,
        name:"Soup",
        image: <LuSoup className='w-[40px] h-[40px] text-purple-600'/>

    },
    {
        id:4,
        name:"Pasta",
        image: <GiNoodles className='w-[40px] h-[40px] text-purple-600'/>

    },
    {
        id:5,
        name:"Main Course",
        image: <CiForkAndKnife className='w-[40px] h-[40px] text-purple-600'/>

    },
    {
        id:6,
        name:"Pizza",
        image: <GiFullPizza className='w-[40px] h-[40px] text-purple-600'/>

    },
    {
        id:7,
        name:"Burger",
        image: <PiHamburgerDuotone className='w-[40px] h-[40px] text-purple-600'/>

    }
]