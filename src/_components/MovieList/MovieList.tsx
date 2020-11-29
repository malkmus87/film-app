import React,{useState} from 'react';
import {Movie} from '../../interfaces';
import {StaticWideFramed,PaddedAllSides,Column,RightAligned, ColumnAlignedToRight} from '../../_styles/layouts';
import {MovieListItemRight,MovieListItemLeft,MovieListItem,HoveredStyle,UnhoveredStyle} from './Style';

interface PropsTypeList {
    movies:Movie[];
    onItemClick:Function
}
interface PropsTypeItem {
    movie:Movie;
    onClick:Function;
}
interface RenderedStyle {
    opacity:number
}


const MovieList = (props:PropsTypeList) => {
    return (
        <div style={{...StaticWideFramed,borderTopWidth:0,background:"whitesmoke"}}>
            {props.movies.map((item,i) => 
                <MovieItem key={i} movie={item} onClick={props.onItemClick}/>
            )}
        </div>
    )
}

const MovieItem = (props:PropsTypeItem) => {
    const onMouseOver = () => {
        setRenderedStyle(HoveredStyle);
    }
    const onMouseLeave = () => {
        setRenderedStyle(UnhoveredStyle);
    }
    const [renderedStyle, setRenderedStyle] = useState<RenderedStyle>(UnhoveredStyle);
    
    return (
        <div style={{...MovieListItem,...renderedStyle}}  onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={()=>props.onClick(props.movie.imdbID)}>
            <div style={{...Column,...PaddedAllSides}}>
                <p style={{...Column,...MovieListItemLeft}}>{props.movie.Title}</p>
                <p style={{...Column,...MovieListItemRight,textAlign:"center"}}>{props.movie.Year}</p>
            </div>
        </div>
    )
}
export default MovieList;