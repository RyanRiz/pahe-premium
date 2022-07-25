import React from 'react'

function Category(props) {
  return (
    <div>
        <div className='px-5 py-1 shadow-md backdrop-blur-sm bg-white/30 inline-block rounded-lg cursor-pointer hover:bg-white/20'>
            <span className='text-white font-medium tracking-wide'>{props.text}</span>
        </div>
    </div>
  )
}

export default Category