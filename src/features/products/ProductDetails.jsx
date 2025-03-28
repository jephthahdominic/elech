import { useNavigate, useParams } from "react-router-dom"
import { useProducts } from "./ProductContext";
import { useCallback, useEffect, useState} from "react";
import { formatCurrency } from "../../utils/helpers";
import Reviews from "./Reviews";
import SelectSize from "../order/SelectSize";
import PurchaseActions from "./PurchaseActions";
import Description from "./Description";
import ScrollableProductImages from "./ScrollableProductImages";
import SearchBar from "../../ui/SearchBar";
import { BiChevronLeft } from "react-icons/bi";

export default function ProductDetails() {
  const {productId} = useParams();
  const {getProductById} = useProducts();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate()

  const fetchProduct = useCallback(()=>{
    getProductById(productId, (result)=>{
      setProduct(result)
    });
  }, [getProductById, productId])

  useEffect(()=>{    
    fetchProduct();
  }, [fetchProduct])

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
          <SelectSize/>
          <Description product = {product}/>
          <Reviews product={product}/> 
        </section>
        <PurchaseActions id={product?.id}/>
      </div>
    </div>
  )
}