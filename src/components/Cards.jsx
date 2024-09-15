import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full py-32'>
        <div className='max-w-screen-xl mx-auto py-25 flex gap-2 '>
            <Card width={"basis-1/3"} start={false} para={true} hover={'hover:bg-zinc-600'}/>
            <Card width={"basis-2/3"} start={true} para={false} hover={'hover:bg-violet-600 '}/>
        </div>
    </div>
  )
}

export default Cards