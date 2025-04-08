import CartItemCard from "./CartItemCard";
import { useSelector } from "react-redux";

export default function CartItems() {
  const items = useSelector(store => store.cart.contents);
  console.log(items)

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index)=>(
        <CartItemCard item={item} key={index}/>
      ))}
    </div>
  )
}
