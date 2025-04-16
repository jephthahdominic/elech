import { useState } from 'react'
import {FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

export default function Description({description}) {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className={`relative p-3 mt-6 ${!readMore ? 'max-h-[500px]' : 'h-max'} overflow-hidden ${!readMore && 'fading-bottom'}`} 
    onClick={()=>setReadMore(s=>!s)}>
      <h2 className='font-montserrat font-regular text-[1.5rem] text-[rgb(33,33,33)]'>Description</h2>
      <p className='text-darkTransparent text-[1rem] mt-2 leading-loose tracking-normal text-justify'>{description}</p>
      <div className={`${!readMore && 'absolute'} w-full right-3 bottom-0 flex justify-end`}>
        {!readMore ? <span className='text-[1.125rem] flex items-center gap-1 font-semibold'>Read more <FiChevronsRight /></span> : <span
        className='text-[1.125rem] flex items-center gap-1 font-semibold'>Read less <FiChevronsLeft /></span>}
      </div>
    </article>
  )
}
