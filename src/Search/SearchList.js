import React, { useContext } from "react";
import "./index.css";
import { SearchContext } from "../Contexts";



const SearchList = () => {
  const { results,  handleMovieSelected } = useContext(SearchContext)
  return (
    <ul className="results">
     {results.map((item, i) => {
         return (
           <li key={i} onClick={() => handleMovieSelected(item)}>
             <img src={item.Poster} alt='movie poster' />
             {item.Title}
           </li>
         )
       })}
    </ul>
  );
};

export default SearchList;
