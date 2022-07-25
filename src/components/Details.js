import React from 'react'
import Dropdown from './Dropdown'
import Link from './Link'

function Details() {
  return (
    <div className='flex pl-8 space-x-5 pb-8'>
      <Dropdown text="1080p" />
      <Dropdown text="x265" />
      <div className='shadow-md backdrop-blur-sm bg-white/30 px-5 rounded-lg inline-flex items-center space-x-2'>
        <Link style="bg-[#2FBC6B]" text="UTB" />
        <Link style="bg-[#D5493B]" text="MG" />
        <Link style="bg-[#9055A8]" text="GD" />
      </div>
    </div>
  )
}

export default Details