import React from 'react'

function Layout(props) {
  return (
    <div className="bg-[#2d2d2d] h-max font-montserrat">
      <div className='bg-[#3c3c3c] h-full mx-48 shadow-lg'>{props.children}</div>
    </div>
  )
}

export default Layout