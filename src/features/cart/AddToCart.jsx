import { BiCartAdd } from "react-icons/bi";
import Button from "../../ui/Button";

export default function AddToCart() {
  
  return (
    <Button className={'h-[56px] border bg-white border-primary px-8 rounded-[10px]'}>
      <BiCartAdd className='text-[1.5rem]' />
    </Button>
  )
}
