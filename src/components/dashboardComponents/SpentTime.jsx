import { tailwindEffect } from '../../data/data';
import React from 'react'

const SpentTime = () => {
  return (
    <section className={`${tailwindEffect} w-full rounded-lg bg-background pb-2 px-[2px]`}>
        <div className='px-20 py-40 w-full bg-yellow-300 text-center rounded-lg'>SpentTime</div>
    </section>
  )
}

export default SpentTime