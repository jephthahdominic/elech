import { useNavigate} from "react-router-dom"
import { formatCurrency } from "../../utils/helpers";
import Reviews from "./Reviews";
import SelectSize from "../order/SelectSize";
import Description from "./Description";
import ScrollableProductImages from "./ScrollableProductImages";
import SearchBar from "../../ui/SearchBar";
import { BiCartAdd, BiChevronLeft } from "react-icons/bi";
import Button from "../../ui/Button";
import { addItemToCart } from "../cart/CartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateOrder from "../order/CreateOrder";
import { calculateAvgRating, StarRating } from "./ProductRating";

export default function ProductDetails({product}) {
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const averageRating = calculateAvgRating(product?.reviews);

  function handleAddToCart(){
    if(selectedSize === null){
      setIsError(true);
      return;
    }

    dispatch(addItemToCart(product, selectedSize))
  }

  return (
    <div className="xl:w-3/5">
      <div className="flex items-center gap-3">
        <BiChevronLeft className="text-[2rem]" onClick={()=>navigate(-1)}/>
        <SearchBar classes={'flex-1'}/>
      </div>
      <div className="mt-5 relative pb-20">

        <ScrollableProductImages/>

        <section className='mt-3'>
            <h1 className='font-montserrat font-regular text-[1.75rem] leading-normal'>{product?.name}</h1>
            {product?.reviews ? <div className='mt-2 flex items-center gap-1 flex-row-reverse justify-end'>
              <span className=''>{averageRating}</span>
              <StarRating rating={averageRating}/>
            </div> : <span className='text-dark-gray italic'>No reviews yet</span>}
            <p className='font-montserrat text-[1.35rem] mt-2 text-slate-500'>{product?.category}</p>
            <p className='mt-4 text-[1.5rem] font-roboto font-regular text-[#212121]'>{formatCurrency(product?.price)}</p>
        </section>

        <section>
          <SelectSize
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            isError = {isError}
            setIsError = {setIsError}
          />
          <Description description = {product?.description}/>
          <Reviews product={product}/> 
        </section>

        <section className={`w-full mt-4 flex items-center gap-6 max-xl:fixed bottom-0 py-5 left-0 px-2 bg-[rgba(250,250,250,0.6)]`}>
          <CreateOrder amount = {product?.price} selectedSize={selectedSize} setIsError={setIsError}/>
          <Button className={'h-[56px] border bg-white border-primary px-8 rounded-[10px]'} onClick={()=>handleAddToCart()}>
            <BiCartAdd className='text-[1.5rem]' />
          </Button>
        </section>

      </div>
    </div>
  )
}