import React from 'react'

function Button(props) {
  return (
    <button className='bg-primary-dark text-white py-2 px-6 rounded md:ml-8 hover:bg-primary-dye duration-500'>
        {props.children}
    </button>
  )
}

export default Button