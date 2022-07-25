import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

function Dropdown(props) {
  return (
    <div>
        <button className='shadow-md items-center overflow-hidden backdrop-blur-sm bg-white/30 inline-flex rounded-lg text-white'>
            <span className='px-10 font-medium tracking-wide'>{props.text}</span>
            <div className='backdrop-blur-sm bg-white/40 h-10 w-10 flex justify-center items-center text-xl'>
                <IoIosArrowDropdown />
            </div>
        </button>
    </div>
  )
}

export default Dropdown