import React from 'react'
import { BsFillStarFill, BsQuestionCircle, BsFillGridFill } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import Navlink from './Navlink';

function Navbar() {
  return (
    <div className='px-5 pt-4 border-solid border-b-8 mb-5 shadow-md border-[#6E5E35]'>
        <div className='flex items-center pb-2'>
            <div className='cursor-pointer pb-2'>
                <img src='assets/img/logo.png' className='bg-center inline' width={230} height={230} />
            </div>
            <div className='flex items-center text-white space-x-2 max-h-9 py-1 px-3 bg-gradient-to-tr from-yellow-300 to to-yellow-600 rounded-lg'>
                <BsFillStarFill />
                <span>PREMIUM</span>
            </div>
        </div>
        <div className='flex w-full mx-auto bg-[#2d2d2d] px-5 space-x-2'>
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
    </div>
  )
}

export default Navbar