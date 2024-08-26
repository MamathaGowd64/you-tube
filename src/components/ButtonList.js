import React from 'react'
import Buttons from './Buttons'
const ButtonList = () => {
    const List=["All","Gaming","Gym","Dance","Songs","Live","Cricket","Cooking","News","javascript","AI","React"]
  return (
    <div className='flex'>
          {
              List.map((list,index) => {
                  return (
                      <Buttons key={index}  name={list} />
                  )
              })
        }
    </div>
  )
}

export default ButtonList
