import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Header({toggles, cart, search, noSearchBar}) {
  return (
    <header className='w-full py-3 px-4 shadow-md flex items-center justify-between'>
        <div className='flex-1 flex items-center gap-10'>
          <Logo />
          {search && <input placeholder='Search for anything here'  className='w-1/3 px-4 py-2 rounded-full max-xl:hidden
           border-dark-gray focus:outline-none' />}
        </div>
        {toggles && <div className='flex gap-8 text-[24px]'>
          {noSearchBar && <button><FiSearch /></button>}
          {cart && <Link to='/cart' className='relative'>
            <FiShoppingCart />
          </Link>}
          <button><FiMenu /></button>
        </div>}
    </header>
  )
}