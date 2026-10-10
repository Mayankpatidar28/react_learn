import React from "react";
import "./About.css";   
const About = ( {...props} ) => {
    return (
        <div>
            <p className="ab">About</p> 
            <p>{props.data.name}</p>
            <p>{props.data.age}</p>
        </div>
    )
}
export default About
