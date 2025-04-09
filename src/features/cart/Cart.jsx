import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartItems from "./CartItems";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";

function calculateTotalPriceInCart(items){
  const totalAmount = items.reduce((prev, curr)=>{
    return prev + curr.price
  }, 0)
  return totalAmount
}

export default function Cart() {  
  const [totalAmount, setTotalAmount] = useState(0)

  const items = useSelector(store => store.cart.contents);
  console.log(items);
  useEffect(()=>{
    setTotalAmount(calculateTotalPriceInCart(items))
  }, [items])
  return (
    <section className="px-4 py-6 pb-28">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-[1.75rem] text-[#212121] font-semibold">Shopping cart</h1>
      </header>
      <main className={'mt-4'}>
        <CartItems items={items}/>
      </main>
      {totalAmount > 0 && <div className="w-full fixed bottom-0 left-0 px-3 py-3 bg-[rgba(255,255,255,0.3)]">
        <Button className={'bg-primary w-full p-5 text-[1.25rem] rounded-[10px] font-sans font-medium'}>
          Checkout {formatCurrency(totalAmount)}
        </Button>
      </div>}
    </section>
    )
}
