import { BiChevronLeft } from "react-icons/bi";
import { useProducts } from "../../contexts/ProductContext";
import SearchBar from "../../ui/SearchBar";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";
import NavBar from "../../ui/NavBar";

export default function Products() {

  const {products} = useProducts();
  const navigate = useNavigate()
  
  return (
    <div>
      <div className="flex items-center gap-3">
        <BiChevronLeft className="text-[2rem]" onClick={()=>navigate(-1)}/>
        <SearchBar classes={'flex-1'}/>
      </div>
      <div className="mt-8">
        <NavBar />
      </div>
      <section className="grid grid-cols-2 gap-3 mt-8">
        {products.map((product, id)=>(
          <SearchResult key ={id} result={product}/>
        ))}
      </section>
    </div>
  )
}
