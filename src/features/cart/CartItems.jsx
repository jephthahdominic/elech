import CartItem from "./CartItem";

export default function CartItems({items}) {

  if(items.length === 0){
    return (
      <div className='mt-4 text-center p-8'>
        <p className="text-[1.75rem] text-[#757575]">Oops!, There is no item in your cart</p> 
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index)=>(
        <CartItem item={item} key={index}/>
      ))}
    </div>
  )
}
