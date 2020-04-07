import React, { useContext } from "react";
import "./index.css";

import { SearchContext } from '../Contexts'
import SearchList from './SearchList'


const SearchBar = (props) => {
  const {title, handleSearchChange, searching} = useContext(SearchContext)
  return (
    <div className="search">
    <input 
      type='search'
      name='movie-search'
      placeholder='search for movie here'
      value={title} onChange={e => handleSearchChange(e.target.value)}
    />
    {title !== '' && searching && <SearchList />}
    
  </div>
  )
};

export default SearchBar;
