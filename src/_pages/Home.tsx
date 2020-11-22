import React,{useState} from 'react';
import MovieList from '../_components/MovieList/MovieList';
import {Movie} from '../interfaces';
import MovieResource from '../_resources/Movie';
import SearchInput from '../_components/SearchInput/SearchInput';

const Home : React.FC= () => {
    const [searchResult,setSearchResult] = useState<Movie[]>([]);
    const fetchMovies = async (searchedKey:string) => {
        setSearchResult([]);
        const data = await MovieResource.search(searchedKey);
        if(data.status === 200){
            setSearchResult(data.body);
        }
    }

    return(
        <div className="Home">
            <SearchInput 
                onSubmit = {fetchMovies}
            />
            <MovieList movies={searchResult}/>
        </div>
    )
}
export default Home;