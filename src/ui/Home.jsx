import { Link } from "react-router-dom";
import BigProductCard from "../features/products/BigProductCard";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import { useProducts } from "../contexts/ProductContext";
import { useEffect } from "react";
import Loader from "./Loader";
import { FaArrowRightLong } from "react-icons/fa6";
import {IoConstruct } from 'react-icons/io5'

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
    <div className="xl:pr-3 lg:w-[70%]">
      <SearchBar />

      {/* <div className="my-6 bg-green-900 p-2 px-3 rounded-[10px]">
        <p className="text-gray-100 text-[1.125rem]">Call for enquiries: {formatPhoneNumber('07061030377')}</p>
      </div> */}

      <Banner />

      <div className="grid grid-cols-2 gap-6 items-center max-h-[200px] py-10">
        <Link to={'/products'} className="flex flex-col text-center justify-center items-center gap-6 mt-10 h-full p-1 text-[1.25rem] font-montserrat font-regular
        rounded-[10px] bg-white shadow-md">
          Explore our catalogue
          <FaArrowRightLong/>
        </Link>
        <Link to={'/'} className="flex flex-col gap-6 text-center justify-center items-center mt-10 h-full p-1 text-[1.25rem] font-montserrat font-regular
        rounded-[10px] text-white bg-primary bg-opacity-80 shadow-md">
          Request a custom made shoe
          <IoConstruct />
        </Link>
      </div>

      <section className='mt-10'>
        <h2 className='font-montserrat text-[1.5rem] text-[#212121] font-medium'>Top Orders</h2>
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
          <h2 className='font-montserrat text-[1.5rem] text-[#212121] font-medium'>Coporate shoes</h2>
          <Link className='font-montserrat text-[1.125rem] text-darkTransparent'>Explore</Link>
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
            <h2 className='font-montserrat text-[1.5rem] text-[#212121] font-medium'>Sandals</h2>
            <Link className='font-montserrat text-[1.125rem] text-darkTransparent'>Explore</Link>
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
