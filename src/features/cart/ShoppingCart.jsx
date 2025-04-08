import { useState } from "react";
import CartItem from "./CartItem";

export default function ShoppingCart() {

  const [items, setItems] = useState([])

  if(items.length === 0){
    return (
      <div className='mt-4 text-center p-8'>
        <p className="text-[1.75rem] text-[#757575]">Oops!, There is no item in your cart</p> 
      </div>
    )
  }

  return (
    <section className="px-4 py-6">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-[1.75rem] text-[#212121] font-semibold">Shopping cart</h1>
      </header>
      <main className={'mt-4'}>
        <CartItem />
      </main>
    </section>
  )
}
