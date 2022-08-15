import React from 'react'
import Category from './Category'

function MovieDetails() {
  return (
    <div className='flex mx-5 py-5 my-5 px-5 space-x-10 items-center border border-black bg-[#222]'>
        <div className='pl-3'>
            <img src='assets/poster.jpg' className='rounded' width={230} />
        </div>
        <div className='space-y-5'>
            <div className='max-w-xl'>
                <h1 className='text-5xl text-white font-bold'>THE BATMAN</h1>
            </div>
            <div className='max-w-xl'>
                <span className='text-white'>In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.</span>
            </div>
            <div className='flex space-x-2'>
                <span className='text-white font-medium tracking-wide text-xl'>PG-13 |</span>
                <Category text="2022" />
                <Category text="Action" />
                <Category text="Crime" />
                <Category text="Drama" />
            </div>
        </div>
    </div>
  )
}

export default MovieDetails