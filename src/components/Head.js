import React from 'react'
import { useDispatch } from 'react-redux';

import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
          <div className='flex col-span-1'>
              
              <img
                  onClick={()=>toggleMenuHandler()}
                  className='h-8 cursor-pointer'
                  alt="menu"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png">
          </img>
          <img  className="h-8 mx-2 cursor-pointer" alt="ylogo"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png">
          </img>
          </div>
          <div className='col-span-10 px-2 flex justify-center'>
              
              <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
              <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200'>🔍</button>
             
          </div>
          <div className='col-span-1'>
              <img  className="h-8" alt="user-icon"
                  src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg">
                  
               </img>
          </div>
    </div>
  )
}

export default Head
