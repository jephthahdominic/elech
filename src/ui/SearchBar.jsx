import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SearchBar({classes}) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <form className={`relative text-[#707072] xl:hidden ${classes}`} onSubmit={(e)=>handleSubmit(e)}>
      <input 
        type="search" 
        placeholder="Search for shoes and sandals" 
        className={`w-full py-3 rounded-[100px] border border-[1px solid E5E7EB] pl-9 pr-4 
         border-2 outline-none bg-[rgba(217,217,217,0.3)] focus:bg-white focus:animate-search`}
         onChange={(e)=>setSearchQuery(e.target.value)}
         value={searchQuery}
      />
      <FiSearch className="absolute top-4 left-3 text-lg"/>
    </form>
  )
}
