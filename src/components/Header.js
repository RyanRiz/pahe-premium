import React from 'react'
import { BsFillStarFill  } from "react-icons/bs";

function Header() {
  return (
    <div className='px-5 pt-4'>
        <div className='flex items-center pb-2'>
            <div className='cursor-pointer pb-2'>
                <img src='assets/img/logo.png' className='bg-center inline' width={230} height={230} />
            </div>
            <div className='flex items-center text-white space-x-2 max-h-9 py-1 px-3 bg-gradient-to-tr from-yellow-300 to to-yellow-600 rounded-lg'>
                <BsFillStarFill />
                <span>PREMIUM</span>
            </div>
        </div>
    </div>
  )
}

export default Header