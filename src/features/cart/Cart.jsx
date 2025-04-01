import { getAuth } from "firebase/auth";
import Header from "../../ui/Header";
import { useEffect } from "react";

export default function Cart() {
  const auth = getAuth();
  useEffect(()=>{
    console.log(auth.currentUser)
  }, [auth])
  return(
    <div>
      <Header cart={false}/>
      <main className="px-3">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-[1.75rem] text-[#212121] font-semibold">Shopping cart</h1>
        </header>
        <p>Your cart is empty</p>
      </main>
    </div>
  )
  // return (
  //   <div>
  //     <header className="flex justify-between items-center py-4">
  //       <h1 className="text-[1.75rem] text-[#212121] font-semibold">Shopping cart</h1>
  //     </header>
  //     <main className={'mt-4'}>
  //       <CartItems />
  //     </main>
  //   </div>
  // )
}
