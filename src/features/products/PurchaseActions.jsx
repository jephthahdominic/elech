import Button from '../../ui/Button'
import AddToCart from '../cart/AddToCart'
import { useOrder } from '../order/OrderContext';


export default function PurchaseActions({id}) {
  const {placeOrder} = useOrder();

  return (
    <div className={`w-full mt-4 flex items-center gap-6 fixed bottom-0 py-5 left-0 z-40 px-2 bg-[rgba(250,250,250,0.6)]`}>
      <Button className={'flex-1 h-[56px] bg-primary border border-primary rounded-[10px] text-[1.125rem] font-semibold tracking-wide text-[#f8f8f8]'}
      onClick={()=>placeOrder()}>
        Order Now
      </Button>
      <AddToCart id={id}/>
    </div>
  )
}
