import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-loader.png'

export default function Logo() {
  return <Link to='/' className='font-playfair text-[2rem] font-bold flex items-center'>
    <img src={logo} width={30}/>lech
  </Link>
}
