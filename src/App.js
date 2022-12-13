import { useState } from "react";
import getImagesBySearch from "./api";
import ImageList from "./components/ImageList";
import SearchImage from "./components/SearchImage";

const App=()=>{
    const [imageArr,setImageArr]=useState([])
    
    const handleSearch=async(val)=>{
        const response= await getImagesBySearch(val)
        setImageArr(response)
    } 
   
    return (
        <div>
            <SearchImage handleSearch={handleSearch}/>
            <ImageList imageArr={imageArr}/>
        </div>
    )
}
export default App;