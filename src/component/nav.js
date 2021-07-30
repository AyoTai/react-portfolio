import React from 'react';

function Nav() {
    return (
        <header className="main-header">
            <nav class="nav main-nav">
                <ul>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contactme">Contact Me</a></li>
                    <li><a href="./resume.pdf" target="_blank">Resume</a></li>
                </ul>
            </nav>
            <h1 className="myname">Tai Mujarin</h1>
            <hr></hr>
        </header>
    )
}

export default Nav;
