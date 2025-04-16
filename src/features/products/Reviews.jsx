import {StarRating} from './ProductRating';
import { FaCircleUser } from 'react-icons/fa6';

export default function Reviews({product}) {
  const reviews = product?.reviews;

  return (
    <div className='p-4 px-1 mt-6 '>
      <header className='flex items-center justify-between'>
        <h2 className='font-montserrat font-regular text-[1.5rem]'>Reviews</h2>
      </header>
      <section className='w-full my-4'>
        <textarea className='w-full bg-light-gray p-3 rounded-[10px] focus:outline-none' placeholder='Write a review' 
        disabled/>
      </section>
      <section className='w-full mt-6 flex flex-col gap-8 items-end'>
        {reviews?.slice(0,3).map((review, key)=>(
          <div className='w-full' key={key}>
            <div className='flex gap-2 items-start'>
              <FaCircleUser className='text-[#D9D9D9] text-[3.5rem]'/>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <p className='text-[1.125rem] text-darkTransparent'>{review.user}</p>
                  <StarRating rating={review.rating}/>
                </div>
                <p className='text-[1.25rem] leading-normal '>{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
