import { Link } from "react-router-dom";
import dummyShoe from '../../assets/images/Shoes-PNG-Image.png'
import {formatCurrency} from '../../utils/helpers'
import { calculateAvgRating, StarRating } from "./ProductRating";

export default function SearchResult({result}) {
    console.log(result)
  return (
    <Link to={`/products/${result.id}`} className='max-w-full border border-light-gray rounded-t-xl'>
      <div className='bg-light-gray mb-2 rounded-t-xl'>
          <img src={dummyShoe} alt="" width={200} height={200} className='object-center'/>
      </div>
      <div className='px-2 flex flex-col gap-2 py-1'>
          <h1 className='font-montserrat font-regular text-[1rem]'>{result.name}</h1>
          <StarRating rating={calculateAvgRating(result.reviews)}/>
          <span className='text-[1rem]'>{formatCurrency(result.price)}</span>
      </div>
    </Link>
  )
}
