const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



import { useState } from "react"
export default function Movie()
{
    const [title, setTitle] = useState("spiderman")
    const [img, setImg] = useState("https://image.pmgstatic.com/files/images/user/profile/165/919/165919261_7b9a54.jpg")
    return(
        <div className="movie">
            <img src={img} alt="obrazok" className="imgofmovie"/>
                
            
            <h3 className="titleofmovie">
                {title}
            </h3>

        </div>
    )

    
}

