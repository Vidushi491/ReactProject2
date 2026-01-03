import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'>
       <img className='h-full w-full object-cover' src='' alt='image1'/>
       <RightCardContent/>
    </div>
  )
}

export default RightCard