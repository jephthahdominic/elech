import { Link } from "react-router-dom";
import dummyShoe from '../../assets/images/Shoes-PNG-Image.png'
import { formatCurrency } from "../../utils/helpers";
import { calculateAvgRating, StarRating } from "./ProductRating";

export default function BigProductCard({product}) {
  console.log(product)
  return (
    <Link to={`products/${product.id}`} className="border border-[1px solid #E5E7EB] shadow-normal shadow-light-gray rounded-t-[10px] bg-[rgba(255,255,255,0.4)]">
      <div className="w-[17rem] p-2 bg-[rgba(217,217,217,0.3)] rounded-t-[10px]">
        <img src={dummyShoe} alt={'product image'} className=" object-contain" loading="lazy"/>
      </div>
      <div className="pl-2 py-1">
        <h1 className="text-[1.5rem] font-playfair font-medium text-[#212121] leading-tight mt-2">{product.name}</h1>
        <div className="mt-1"><StarRating rating = {calculateAvgRating(product.reviews)}/></div>
        {/* <p className="text-[1.1rem] text-[#757575] mt-1">{product.category}</p> */}
        <span className="text-[1.125rem] text-[#212121] font-medium block mt-5">{formatCurrency(product.price)}</span>
      </div>
    </Link>
  )
}
