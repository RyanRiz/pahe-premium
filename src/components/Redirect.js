import React from 'react'

function Redirect(props) {
  return (
    <div className={`${props.style} shadow-md items-center overflow-hidden px-5 font-bold tracking-wide cursor-pointer inline-flex rounded-lg`}>
        {props.text}
    </div>
  )
}

export default Redirect