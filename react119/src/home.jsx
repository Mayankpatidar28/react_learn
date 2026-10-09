import React from "react";
import "./home.css"

/*
const home = ( props ) => {
    return (
        <div>
            <h1>child</h1>
            <p className="nm">{props.data.name}</p>
            <p className="ag">{props.data.age}</p>
        </div>
    )
}

export default home;  
*/
/*
const home = ( {...props}) =>{
    return(
        <div>
            <h1>chaild</h1>
            <p>{props.data.name}</p>
            <p>{props.data.age}</p>
        </div>
    )   

}
    export default home;
*/


    
const home = ( {data} ) =>{
    return(
        <div>
            <h1>chaild</h1>
            <p>{data.name}</p>
            <p>{data.age}</p>
        </div>
    )   

}
    export default home;