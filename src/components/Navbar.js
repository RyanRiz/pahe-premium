import React from 'react'
import { BsQuestionCircle, BsFillGridFill } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Navlink from './Navlink';

function Navbar() {
  return (
    <div className='mx-5 border-solid border-b-8 mb-5 shadow-md border-[#6E5E35] bg-[#2d2d2d]'>
        <div class="flex space-beetwen">
            <div className='flex w-full mx-auto space-x-2'>
                <Navlink>
                    <IoHome className='text-2xl' />
                </Navlink>
                <Navlink>
                    <BsQuestionCircle />
                    <span>How to Download</span>
                </Navlink>
                <Navlink>
                    <HiLink />
                    <span>Report Link</span>
                </Navlink>
                <Navlink>
                    <BsFillGridFill />
                    <span>Other</span>
                </Navlink>
            </div>
            <div className='flex items-center text-white space-x-1'>
                <FaSearch />
                <input className='bg-transparent outline-none placeholder:text-white focus:border-b-3 focus:border-[#6E5E35]' placeholder='Search...' />
            </div>
        </div>
    </div>
  )
}

export default Navbar