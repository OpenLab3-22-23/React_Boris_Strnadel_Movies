const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Movie from './Movie'
import React, { useState, useEffect } from 'react';



function App() {
const [movies, setMovies] = useState([])
  useEffect(()=>{
    getMovies();
    
  },[])

  const getMovies = async () => {
    const data = await fetch(APIURL);
    const movies = await data.json();
    console.log(movies)
    setMovies(movies.results)
  };

  

  
  return (
    
    <div className="App"> 
      <Header/>
      {movies && movies.map(movie => <Movie title={movie.title} imgUrl={ movie.IMGPATH + movie.poster_path} />)}
      
      
      
    </div>
    
  )
}







export default App
