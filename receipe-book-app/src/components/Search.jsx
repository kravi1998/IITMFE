import { useEffect , useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "98e8aa7339054d98acfaaeac81d59c44"
export default function Search( foodData , setFoodData){
const[query , setQuery] = useState("pizza");
useEffect( ()=> 
    async function fetchFood() {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        setFoodData(data.results || [])
        console.log(foodData);
    }
    ,[] );
    return(
    <div>
        <div>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}
            />
        </div>
     </div>
    );
}