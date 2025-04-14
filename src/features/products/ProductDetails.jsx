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

export default function ProductDetails({product}) {
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch()

  const navigate = useNavigate()


  function createOrder(){
    if(selectedSize === null){
      setIsError(true);
      return;
    }

    console.log("successfully placed order")
  }

  function handleAddToCart(){
    if(selectedSize === null){
      setIsError(true);
      return;
    }

    dispatch(addItemToCart(product, selectedSize))
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <BiChevronLeft className="text-[2rem]" onClick={()=>navigate(-1)}/>
        <SearchBar classes={'flex-1'}/>
      </div>
      <div className="mt-5 relative pb-20">

        <ScrollableProductImages/>

        <section className='mt-3'>
            <h1 className='font-playfair font-regular text-[2rem] leading-tight'>{product?.name}</h1>
            <p className='text-[1.35rem] text-slate-500'>{product?.category}</p>
            <p className='mt-4 text-[1.5rem] font-regular text-[#212121]'>{formatCurrency(product?.price)}</p>
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

        <section className={`w-full mt-4 flex items-center gap-6 fixed bottom-0 py-5 left-0 px-2 bg-[rgba(250,250,250,0.6)]`}>
          <Button className={'flex-1 h-[56px] bg-primary border border-primary rounded-[10px] text-[1.125rem] font-semibold tracking-wide text-[#f8f8f8]'}
            onClick={()=>createOrder()}>
            Order Now
          </Button>
          <Button className={'h-[56px] border bg-white border-primary px-8 rounded-[10px]'} onClick={()=>handleAddToCart()}>
            <BiCartAdd className='text-[1.5rem]' />
          </Button>
        </section>

      </div>
    </div>
  )
}