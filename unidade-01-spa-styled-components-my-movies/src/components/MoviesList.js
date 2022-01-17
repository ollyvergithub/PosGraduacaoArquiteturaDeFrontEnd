import React, {Fragment} from "react";
import {MovieItem} from "./MovieItem";
import {MoviesListContainer} from "../styles/MoviesListContainer";

export const MoviesList = ({movies}) => {
    return (

        <MoviesListContainer>
            {movies && movies.length > 0 && movies.map((movie) =>
                <Fragment
                    key={movie.id}
                >
                    <MovieItem
                        {...movie}
                    />
                </Fragment>
            )}

        </MoviesListContainer>

    )
}