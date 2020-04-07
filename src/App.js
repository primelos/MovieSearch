import React, { useState } from "react";
import "./App.css";

import SearchBar from './Search'
import { SearchContext, MovieContext } from './Contexts'
import MovieData from "./MovieData";


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);
  const [searching, setSearching] = useState(false)

  async function handleSearchChange(inputValue) {
    setSearchValue(inputValue)
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`
      )
      const data =  await response.json()

      setResults(data.Search || [])  
      setSearching(true)
    }

  function handleMovieSelected(movieSelected){
    console.log('movieSelected', movieSelected)
    setMovieSelected(movieSelected);
    setSearching(false);
  }

  const searchContextValue = {
    handleSearchChange,
    handleMovieSelected,
    title: searchValue,
    results,
    searching
  }

  
  return (
    <div className="App">
      <SearchContext.Provider value={searchContextValue} >
        <SearchBar />
      </SearchContext.Provider>
      <MovieContext.Provider value={movieSelected} >
        <MovieData />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
// echo "# MovieSearch" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/primelos/MovieSearch.git
// git push -u origin master