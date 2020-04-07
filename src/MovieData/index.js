import React, { useContext } from "react";
import "./index.css";
import { MovieContext } from '../Contexts';
import MetaData from "./MetaData";


function MovieData() {
  const value = useContext(MovieContext);
  return value ? <MetaData /> : <h2>Please select a movie</h2>;
}

export default MovieData;
