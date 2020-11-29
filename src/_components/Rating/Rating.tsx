import React from 'react';
import {Rating } from '../../interfaces';
import {Column} from '../../_styles/layouts';
interface RatingPropsType {
    rating:Rating
}


const RatingMeter = (props:RatingPropsType) => {

    const imdbRatingAsPercent = (rating:string) => {
        return parseInt(rating.substring(0,rating.length-3).replace('.','')+"%");
    }
    const metacriticRatingAsPercent = (rating:string) => {
        return parseInt(rating.split('/')[0]);
    }
    const getRating = (rating:Rating) =>{
        switch(rating.Source){
            case('Internet Movie Database'):
                return imdbRatingAsPercent(rating.Value);
            case('Metacritic'):
                return metacriticRatingAsPercent(rating.Value);
            default:
                return parseInt(rating.Value);
        } 
    }
    const getColor = (rating:number) => {
        if(rating>75){
            return "mediumseagreen";
        } else if (rating > 75 && rating > 50) {
            return "orange"
        } else {
            return "coral"
        }
    
    }
    const style={background:getColor(getRating(props.rating)),width:getRating(props.rating).toString()+"%",height:"100%",borderRadius:"0 15px 15px 0"};
    console.log(style);
    return(
        <div>
            <label>{props.rating.Source}</label>
            <div style={{height:20}}>
                <div style={{...Column,width:150,height:"100%"}}>
                    <div
                        style={style}
                    >
                    </div>
                </div>
            </div>
            
            
        </div>
    )

}
export default RatingMeter;
