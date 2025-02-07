import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import avatarimg from "../assets/avatar.png"
import { useSelector } from 'react-redux';
import { useAuth } from '../contex/AuthContext';


const navigation=[
    
        {name:"Dashboard",href:"/dashboard"},
        {name:"Orders",href:"/order"},
        {name:"Cart Page",href:"/Checkout"},

    
]

function Navbar() {
    
    const [isDrpdownOpen,setisDrpdownOpen]=useState(false);
    const cartItems=useSelector(state=>state.cart.cartItems);
    // console.log(isDrpdownOpen);
    console.log(cartItems);
    const {currentUser,logout}=useAuth()
     
    const handleLogOut=()=>{
      logout()
    }
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
     <nav className="flex  justify-between items-center">
        {/* left side */}
        <div className='flex items-center md:gap-16 gap-4'> 
            <Link to="/">
            <HiOutlineBars3BottomLeft className="size-6" /></Link>

       <div className='relative sm:w-72 w-40 '>
       <IoMdSearch  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"/>

       <input type="text" placeholder="Search here" 
       className= "bg-[#EAEDEA] w-full py-2 pl-10 pr-4 rounded-md focus:outline-none" />
       </div>
       </div>
        
        {/* right side */}
      <div className='relative flex items-center md:space-x-3 space-x-2'>
        <div>
            {
            currentUser?<>
            <button onClick={()=>setisDrpdownOpen(!isDrpdownOpen)}><img src={avatarimg} alt=""  className={`size-7 rounded-full ${currentUser ? 'ring-2-ring-blue-500':""}`}/>
            </button>
            {/* show dropdowns */}
            {
                isDrpdownOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white'>
                        <ul className='py-2'>
                            {
                             navigation.map ((item)=>(
                                <li key={item.name} onclick={()=>setisDrpdownOpen(false)}>
                                    <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                      {item.name}
                                    </Link>
                                </li>
                             ))  
                            }
                            <li>
                              <button
                              onClick={handleLogOut} className='block  w-full text-left px-4 py-2 text-sm hover:bg-gray-100'>Logout
                              </button>
                            </li>
                        </ul>
                    </div>
                )
            }
            </>:<Link to="/login"><FaRegUser className='size-6' /></Link>
        }
        </div>
      

      <button className='hidden sm:block'>
      <FaRegHeart className='size-6'/>
      </button>
      <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
      <FaShoppingCart className='' />
      {
        cartItems.length>0 ?       
      <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span>:
      <span className='text-sm font-semibold sm:ml-1'>0</span>
}
      </Link>
      </div>
      
     </nav>

      </header>
    
  )
}

export default Navbar
