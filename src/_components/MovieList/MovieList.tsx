import React from 'react';
import {Movie} from '../../interfaces';
import './MovieList.css';

interface PropsTypeList {
    movies:Movie[];
}
interface PropsTypeItem {
    movie:Movie;
}

const MovieList = (props:PropsTypeList) => {
    return (
        <div>
            {props.movies.map((item,i) => 
                <MovieItem key={i} movie={item}/>
            )}
        </div>
    )
}
const MovieItem = (props:PropsTypeItem) => {
    return (
        <div className="MovieListItem">
            <p>{props.movie.Title}</p>
            <p>{props.movie.Year}</p>
            <p>{props.movie.imdbID}</p>
        </div>
    )
}
export default MovieList;