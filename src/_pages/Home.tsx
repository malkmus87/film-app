import React,{useState} from 'react';
import MovieList from '../_components/MovieList/MovieList';
import {Movie,DetailedMovie} from '../interfaces';
import MovieOverview from '../_components/MovieOverview/MovieOverview';
import MovieResource from '../_resources/Movie';
import SearchInput from '../_components/SearchInput/SearchInput';
import {StaticWideFramed,PaddedAllSides,Column,RightAligned, ColumnAlignedToRight} from '../_styles/layouts';


const Home : React.FC= () => {
    const [searchResult,setSearchResult] = useState<Movie[]>([]);
    const [movie,setMovie] = useState<DetailedMovie | null>(null);
    const fetchMovies = async (searchedKey:string) => {
        setSearchResult([]);
        const data = await MovieResource.search(searchedKey);
        if(data.status === 200){
            setSearchResult(data.body.slice(0,5));
        }
    }
    const goToMovie = async (imdbID:string) => {
        const data=await MovieResource.get(imdbID);
        const movie:DetailedMovie=data.body;
        console.log(movie);
        setMovie(movie);
        setSearchResult([]);
    }

    return(
        <div className="Home">
            <div style={{width:"100%",textAlign:"center"}}>
                <div style={{...Column}}>
                <SearchInput 
                    onSubmit = {fetchMovies}
                />
            
            
                <MovieList movies={searchResult} onItemClick={goToMovie}/>
                </div>
                
                
            </div>
            <div style={{width:"100%",textAlign:"center"}}>
            <div style={{...Column,width:800}}> 
                {movie!==null ? 
                <MovieOverview data={movie}/>:
                null
                }
                </div>
            </div>
        </div>
    )
}
export default Home;