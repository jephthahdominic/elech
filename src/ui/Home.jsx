import { Link } from "react-router-dom";
import BigProductCard from "../features/products/BigProductCard";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import { useProducts } from "../contexts/ProductContext";
import { useEffect } from "react";
import Loader from "./Loader";
import shoes from "../assets/images/mathias-reding-_sHFGxvlNoI-unsplash.jpg"
import sandals from "../assets/images/IMG-20250308-WA0010.jpg"
import belts from "../assets/images/seeetz-OTHeFuAhNZ0-unsplash.jpg"
import { BiSolidGrid } from "react-icons/bi";

export default function Home() {
  const {getProducts, products, isLoading} = useProducts();
  
  useEffect(()=>{
    function fetchProducts(){
      getProducts();
    }
    fetchProducts()
  }, [getProducts])

  if(isLoading) return <Loader/>
  
  return (
    <div className="flex-1 xl:pr-3">
      <SearchBar />

      {/* <div className="my-6 bg-green-900 p-2 px-3 rounded-[10px]">
        <p className="text-gray-100 text-[1.125rem]">Call for enquiries: {formatPhoneNumber('07061030377')}</p>
      </div> */}

      <Banner />

      <div className="w-full flex items-center justify-between mt-10 overflow-x-scroll flex-nowrap">
        <Link className="text-[1.1rem] text-darkTransparent">
          <BiSolidGrid className="text-[4rem] text-[#121212]"/> Explore
        </Link>
        <Link className="flex flex-col items-center text-[1.1rem] text-darkTransparent">
          <img src={shoes} alt="shoes" width={90} height={80} className="object-contain rounded-full"/>
          Shoes
        </Link> 
        <Link className="flex flex-col items-center text-[1.1rem] text-darkTransparent">
          <img src={sandals} alt="shoes"  className="object-contain rounded-[10px] h-[80px] w-[80px]"/>
          Sandals
        </Link>
        <Link className="flex flex-col items-center text-[1.1rem] text-darkTransparent">
          <img src={belts} alt="shoes"  className="object-contain rounded-[10px] h-[80px] w-[80px]"/>
          Belts
        </Link>
      </div>

      <section className='mt-10'>
        <h2 className='font-playfair text-[1.75rem] text-[#212121] font-semibold'>Top Orders</h2>
        <div className='relative flex items-center'>
          <div className='w-full flex items-center gap-4 mt-3 pr-3 overflow-auto scrollbar-hide' id='categoryBar'>
            {
              products.filter(product => product.topOrder).slice(0, 3).map((product, key)=>(
                <BigProductCard key={key} product={product}/>
              ))
            }
          </div>
        </div>
      </section>
      <section className='mt-14'>
        <div className='flex justify-between items-center px-1'>
          <h2 className='font-playfair text-[1.75rem] text-[#212121] font-semibold'>Coporate shoes</h2>
          <Link className='text-[1.125rem] text-darkTransparent'>Explore</Link>
        </div>
        <div className='w-full flex items-center gap-4 mt-3 overflow-auto scrollbar-hide'>
          {
            products.filter(product => product.category === "shoe").slice(0,3).map((shoe, key)=>(
              <BigProductCard key={key} product={shoe}/>
            ))
          }
        </div>
      </section>
      {products.filter(product => product.category === "sandals").length !== 0 && (
        <section className='mt-14'>
          <div className='flex justify-between items-center px-1'>
            <h2 className='font-playfair text-[1.75rem] text-[#212121] font-semibold'>Sandals</h2>
            <Link className='text-[1.125rem] text-darkTransparent'>Explore</Link>
          </div>
          <div className='w-full flex items-center gap-4 mt-3 overflow-auto scrollbar-hide'>
            {
              products.filter(product=>product.category === "sandals").slice(0,3).map((sandal, key)=>(
                <BigProductCard key={key} product={sandal}/>
              ))
            }
          </div>
        </section>
      )}
    </div>
  )
}
