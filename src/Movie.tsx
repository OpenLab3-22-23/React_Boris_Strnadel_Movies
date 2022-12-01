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