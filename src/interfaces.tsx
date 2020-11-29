export interface Movie {
    Title:string;
    Year:number;
    Poster:string;
    imdbID:string;
    type:string;
}
export interface DetailedMovie {
    Title:string;
    Year:number;
    Poster:string;
    imdbID:string;
    type:string;
    Plot:string;
    Director:string;
    Writer:string;
    Runtime:string;
    Released:string;
    Language:string;
    Awards:string;
    imdbRating:string;
    BoxOffice:string | null;
    Production:string;
    Ratings:Rating[];
    MetaScore:string;
}
export interface Rating{
    Source:string;
    Value:string;
}