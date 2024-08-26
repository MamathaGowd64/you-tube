import React from 'react'

const Buttons = ({name}) => {
  return (
    <div className='px-5 py-2 m-2 bg-gray-300 rounded-lg'>
          <button>{name}</button>
    </div>
  )
}

export default Buttons
