import { useState } from "react";
import { useEffect } from "react";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


export default function Header()
{   
    


    const [value, setValue] = useState("")
    return (
        <div className="header">
            <span className="main-title">
			    Movies
	        </span>
            <span>  
                <input type="text" className="search" placeholder="Search"value={value} onChange={e=>{setValue(e.target.value); console.log(value)}}  />  
            </span>
            
        
            
        </div>
        
    )
}