import { FiArrowRight, FiChevronRight, FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext';
import { useUser } from '../contexts/UserContext';

export default function Header({cart, search, noSearchBar}) {
  
  const {isSidebarOpen, setIsSidebarOpen} = useSidebar();
  const {user} = useUser()

  function handleSidebar(){
    console.log(isSidebarOpen); 
    setIsSidebarOpen((s)=>!s)
  }

  return (
    <header className='bg-[#fafafad5] xl:bg-[#fafafa] fixed top-0 z-10 h-auto w-full py-3 px-4 shadow shadow-[30px 0 25px 20px rgb(0 0 0 / 0.1)] flex items-center justify-between'>
        <div className='flex-1 flex items-center gap-10'>
          <Link to={'/'}><Logo /></Link>
          <form className='relative w-1/3 flex items-center max-xl:hidden'>
            <FiSearch className="absolute left-2"/>
            <input placeholder='Search for anything here'  className='w-full px-8 py-2 rounded-full
            border-dark-gray focus:outline-none'/>
           </form>
        </div>
        <div className='flex items-center gap-6 xl:gap-8 text-[22px]'>
          {noSearchBar && <button><FiSearch /></button>}
          {cart && <Link to='/cart' className='relative'>
            <FiShoppingCart />
          </Link>}
          <div className='max-lg:hidden'>
            {user === null ? <Link to='login' className='flex items-center gap-1 font-poppins font-normal text-[1.125rem] text-primary max-xl:hidden border border-primary px-5 py-2 rounded-[10px] transition-all hover:bg-opacity-0'>
              Login <FiArrowRight />
            </Link> : <h2 className='font-sans font-normal text-[1.25rem]'>Hi, {user?.displayName.split(" ")[0]}</h2>}
          </div>
          <button className='xl:hidden' onClick={()=>handleSidebar()}><FiMenu/></button>
        </div>
    </header>
  )
}

export function AuthHeader(){
  return <header className='w-full py-3 px-4 shadow-md flex items-center justify-between'>
    <Logo />
  </header>
}
