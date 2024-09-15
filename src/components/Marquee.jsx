import React from 'react'

const Marquee = ({imageUrl}) => {

  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imageUrl.map((item, index) => (<img src={item} alt="" className='w-[8vw] flex-shrink-0'/>))}
    </div>
  )
}

export default Marquee