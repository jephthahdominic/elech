import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between gap-2 overflow-x-scroll flex-nowrap verticalNav">
        <Link className="text-[1.1rem] text-darkTransparent px-5 py-1 border-2 border-[125,125,125,0.8] rounded-full">
            All
        </Link>
        <Link className="text-[1.1rem] text-darkTransparent px-5 py-1 border-2 border-[125,125,125,0.6] rounded-full">
            Corporate Shoes
        </Link> 
        <Link className="text-[1.1rem] text-darkTransparent px-5 py-1 border-2 border-[125,125,125,0.6] rounded-full">
            Sandals
        </Link>
        <Link className="text-[1.1rem] text-darkTransparent px-5 py-1 border-2 border-[125,125,125,0.6] rounded-full">
            Belts
        </Link>
    </nav>
  )
}
