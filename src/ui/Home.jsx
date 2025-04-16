import { Link } from "react-router-dom";
import BigProductCard from "../features/products/BigProductCard";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import { useProducts } from "../contexts/ProductContext";
import { useEffect } from "react";
import Loader from "./Loader";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <div className="xl:pr-3">
      <SearchBar />

      {/* <div className="my-6 bg-green-900 p-2 px-3 rounded-[10px]">
        <p className="text-gray-100 text-[1.125rem]">Call for enquiries: {formatPhoneNumber('07061030377')}</p>
      </div> */}

      <Banner />

      <div className="rounded-[10px] bg-primary">
        <Link to={'/products'} className="flex items-center justify-between mt-10 p-6 text-[1.25rem] font-montserrat text-white font-medium">
          Explore All Products
          <FaArrowRightLong/>
        </Link>
      </div>

      <section className='mt-10'>
        <h2 className='font-montserrat text-[1.5rem] text-[#212121] font-semibold'>Top Orders</h2>
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
          <h2 className='font-montserrat text-[1.5rem] text-[#212121] font-semibold'>Coporate shoes</h2>
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
            <h2 className='font-montserrat text-[1.5rem] text-[#212121] font-semibold'>Sandals</h2>
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
