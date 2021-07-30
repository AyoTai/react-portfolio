import React from 'react';
import github from "../assets/images/githublogo.png"


function ProjectCard(props) {
    return(
        <div className="button-wrapper-large">
                <a className="button-large" href={props.projlink}>
                    <img className="button button-large" src={props.img} alt="screenshot" />
                </a>
                <div className="label">{props.name}<span>
                    <a href={props.gitlink} target="_blank">
                        <img className="gitimg" src={github} alt="github logo" />
                    </a>
                    </span>
                </div>
            </div>
    )
}

export default ProjectCard;