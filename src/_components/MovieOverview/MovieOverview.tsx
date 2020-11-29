import React from 'react';
import { DetailedMovie, Rating } from '../../interfaces';
import { ImageStyle } from './Style';
import { PaddedSmallAllSides, PaddedAllSides, Column, RightAligned, ColumnAlignedToRight } from '../../_styles/layouts';
import RatingMeter from '../Rating/Rating';
interface PropsType {
    data: DetailedMovie
}
const MovieOverview = (props: PropsType) => {
    const movie = props.data;
    return (
        <div style={{ ...PaddedAllSides, background: "white", color: "black", paddingTop: 40, paddingBottom: 40 }}>
             <h1>{movie.Title}</h1>
            <div>
                <div style={{ ...Column, background: "whitesmoke", marginLeft: -125 }}>
                    <img src={movie.Poster} style={{ ...ImageStyle }}></img>
                    <div style={{ ...PaddedSmallAllSides }}>
                        <label>Director</label>
                        {movie.Director.split(',').map(director =>
                            <p>{director}</p>
                        )}
                        <p>{movie.Director}</p>
                        <label>Writer</label>
                        {movie.Writer.split(',').map(writer =>
                            <p>{writer}</p>
                        )}
                    </div>
                </div>
                <div style={{...Column,float:'right'}}>
                    <p style={{ ...Column, width: 300, lineHeight: '18px'}}>{movie.Plot}</p>
                        {movie.Ratings.map(rating =>
                            <RatingMeter rating={rating} />
                        )}
                    </div>
            </div>

           
            

        </div>
    )
}

// const imdbRatingAsPercent = (rating:string) => {
//     return parseInt(rating.substring(0,rating.length-3).replace('.','')+"%");
// }
// const metacriticRatingAsPercent = (rating:string) => {
//     return parseInt(rating.split('/')[0]);
// }
// interface RatingPropsType {
//     rating:Rating
// }
// const RatingMeter = (props:RatingPropsType) => {
//     const getRating = (rating:Rating) =>{
//         switch(rating.Source){
//             case('Internet Movie Database'):
//                 return imdbRatingAsPercent(rating.Value);
//             case('Metacritic'):
//                 return metacriticRatingAsPercent(rating.Value);
//             default:
//                 return parseInt(rating.Value);
//         } 
//     }
//     const getColor = (rating:number) => {
//         if(rating>75){
//             return "mediumseagreen";
//         } else if (rating > 75 && rating > 50) {
//             return "orange"
//         } else {
//             return "coral"
//         }

//     }
//     const style={background:getColor(getRating(props.rating)),width:getRating(props.rating).toString()+"%",height:"100%",borderRadius:"0 15px 15px 0"};
//     return(
//         <div>
//             <label>{props.rating.Source}</label>
//             <div style={{height:20}}>
//                 <div style={{...Column,width:150,height:"100%"}}>
//                     <div
//                         style={style}
//                     >
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )

// }
export default MovieOverview;