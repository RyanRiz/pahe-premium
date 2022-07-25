import React from 'react'

function Navlink(props) {
  return (
    <div className='hover:bg-[#2a2a2a]'>
        <div className={`${props.pos} cursor-pointer h-10 text-white flex items-center px-3 font-medium tracking-wide space-x-1`}>
            {props.children}
        </div>
    </div>
  )
}

export default Navlink