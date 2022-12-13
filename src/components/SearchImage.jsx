import { useState } from "react"


const SearchImage = ({handleSearch}) => {
  const [searchVal,setSearchVal]=useState("")
  
  return (
    <main>
        <label>search images</label>
        <br/>
        <input 
          value={searchVal} 
          onChange={(e)=>setSearchVal(e.target.value)}
          onKeyDown={(e) => (e.code === 'Enter' || e.code === 'NumpadEnter') && handleSearch(searchVal)}
          />
        <button onClick={()=>handleSearch(searchVal)}>Search</button>
    </main>
  )
}
export default SearchImage