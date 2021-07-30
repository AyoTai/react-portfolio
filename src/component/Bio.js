import React from 'react';
import biopic from "../assets/images/biopic.jpg";

function Bio() {
    return(
        <div id="aboutme">
            <h2 className="intro">Hi, my name is Tai</h2>
            <p className="intro-p">I myself just recently stepped into the world of web development. I've always wanted a career in the computer field. I'm enjoying it very much, and  learning what I can.</p>
            <img src={biopic} className="biopic" alt="Tai" /> 
        </div>
    )
}

export default Bio;