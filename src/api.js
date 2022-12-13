import axios from "axios";

const getImagesBySearch=async(searchVal)=>{
    const response= await axios.get("https://api.unsplash.com/search/photos",{
        headers: {
            Authorization: "Client-ID mh47a6rA2gYCYOby0Oqi5v4PgKNHILtFZsIF4JtRVyQ"
        },
        params:{
            query:searchVal
        }
    });
    console.log(response.data.results)
    return response.data.results
}

export default getImagesBySearch