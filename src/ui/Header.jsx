import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext';

export default function Header({cart, search, noSearchBar}) {
  
  const {isSidebarOpen, setIsSidebarOpen} = useSidebar();

  function handleSidebar(){
    console.log(isSidebarOpen); 
    setIsSidebarOpen((s)=>!s)
  }

  return (
    <header className='bg-[#fafafad5] fixed top-0 z-10 h-auto w-full py-3 px-4 shadow shadow-[30px 0 25px 20px rgb(0 0 0 / 0.1)] flex items-center justify-between'>
        <div className='flex-1 flex items-center gap-10'>
          <Logo />
          {search && <input placeholder='Search for anything here'  className='w-1/3 px-4 py-2 rounded-full max-xl:hidden
           border-dark-gray focus:outline-none'/>}
        </div>
        <div className='flex gap-8 text-[24px]'>
          {noSearchBar && <button><FiSearch /></button>}
          {cart && <Link to='/cart' className='relative'>
            <FiShoppingCart />
          </Link>}
          <button onClick={()=>handleSidebar()}><FiMenu/></button>
        </div>
    </header>
  )
}

export function AuthHeader(){
  return <header className='w-full py-3 px-4 shadow-md flex items-center justify-between'>
    <Logo />
  </header>
}
