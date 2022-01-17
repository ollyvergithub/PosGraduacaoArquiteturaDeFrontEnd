import React, {useEffect, useState} from "react";
import {MoviesContainer} from "../styles/MoviesContainer";
import {MoviesList} from "../components/MoviesList";
import {MoviesService} from "../api/MoviesService";

export const Home = () => {

    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        let {data} = await MoviesService.getMovies()
        console.log("Data Movies ", data)
        setMovies(data.results)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return(
      <MoviesContainer>
          <MoviesList
              movies={movies}
          />
      </MoviesContainer>
  )
}