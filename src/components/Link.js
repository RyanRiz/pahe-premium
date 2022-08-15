import React from 'react'

function Link(props) {
  return (
    <div>
        <div className={`h-8 ${props.style} h-10 text-white cursor-pointer hover:brightness-95 font-bold tracking-wide rounded-md px-2 flex items-center text-sm`}>
          {props.text}
        </div>
    </div>
  )
}

export default Link