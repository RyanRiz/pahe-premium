import React from 'react'
import { BsPlayCircle } from "react-icons/bs"

function Stream() {
  return (
    <div>
      <div className='grid grid-cols-5 gap-0 backdrop-blur-sm bg-white/30 mx-8 rounded-lg group cursor-pointer shadow-md'>
          <div className='p-5 group-hover:scale-105'>
              <img src='assets/backdrop.jpg' className='rounded' width={250} />
          </div>
          <div className='col-span-3 text-white my-auto space-y-5 tracking-wide'>
            <div className='text-2xl font-semibold'>
              The Batman
            </div>
            <div className='flex space-x-2 items-center font-medium'>
              <BsPlayCircle className='text-xl' />
              <span>2h 57m</span>
            </div>
          </div>
          <div className='flex mx-auto items-center'>3</div>
      </div>
    </div>
  )
}

export default Stream