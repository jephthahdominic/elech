import { useCallback, useEffect, useState } from "react";
import { useProducts } from "./ProductContext"
import { useLocation, useNavigate} from "react-router-dom";
import SearchBar from "../../ui/SearchBar";
import { BiChevronLeft } from "react-icons/bi";
import Loader from "../../ui/Loader";
import SearchResult from "./SearchResult";

export default function SearchProducts() {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false) 

  const location = useLocation();
  const params = new URLSearchParams(location.search)
  const searchQuery = params.get('q');

  const {searchDatabaseByName} = useProducts();

  const navigate = useNavigate()

  const handleSearch = useCallback(()=>{
    setIsLoading(true)
    searchDatabaseByName(searchQuery, (results)=>{
      setSearchResults(results);
      setIsLoading(false)
      console.log(results)
    });
  }, [searchQuery, searchDatabaseByName]);

  useEffect(()=>{
    handleSearch()
  }, [handleSearch])

  if(isLoading) return <Loader />

  return (
    <div>
      <div className="flex items-center gap-3">
        <BiChevronLeft className="text-[2rem]" onClick={()=>navigate(-1)}/>
        <SearchBar classes={'flex-1'}/>
      </div>
      <p className="my-5 text-[1.125rem]">
        {searchResults.length === 0 ? 'Oops we could not find an item that matches your search':`Found ${searchResults.length} items that matches your search`}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {searchResults.map((result, id)=>(
          <SearchResult key ={id} result={result}/>
        ))}
      </div>
    </div>
  )
}
