import React from 'react';
import phone from "../assets/images/pngegg.png";
import email from "../assets/images/maillogo.png";
import github from "../assets/images/githublogo.png";
import linkdin from "../assets/images/linkedinlogo.png";

function Contact() {
    return(
        <div id="contactme">
                <h4 className="contact">Contact Me</h4>
                    <ul className="contactlist">
                        <li>
                            <a href="tel:213-448-7523">
                                <img className="phone" src={phone} alt="phone logo" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:tai.mujarin@gmail.com">
                                <img className="email" src={email} alt="email logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/AyoTai" target="_blank">
                                <img className="github" src={github} alt="github logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/tawil-mujarin-a17a99210/" target="_blank">
                                <img className="linkedin" src={linkdin} alt="linkedin logo" />
                            </a>
                        </li>
                    </ul>
        </div>
    )
}

export default Contact;
