import React from 'react';

import {Link} from 'react-router-dom';

import FontAwesomeIcon from './font-awesome.jsx';

function UpperNavBarLink(props) {
    return (
        <div className="upper-nav-bar-item">
            <Link to={props.link}>{props.text}</Link>
        </div>
    );
}

function UpperNavBar(props) {
    return (
        <div className="upper-nav-bar">
            <UpperNavBarLink text="ABOUT" link="" />
            <div className="upper-nav-bar-item">
                <a href="/static/pdf/resume.pdf">RESUME</a>
            </div>
            <UpperNavBarLink text="PROJECTS" link="/projects" />
        </div>
    );
}

function SocialMediaBar(props) {
    return (
        <div className="social-media-bar">
            <a href="mailto:linscheid.greg@gmail.com">
                <FontAwesomeIcon icon_class="envelope-square" icon_size="2x" fixed_width={true} />
            </a>
            <a href="https://www.linkedin.com/in/greglinscheid">
                <FontAwesomeIcon icon_class="linkedin-square" icon_size="2x" fixed_width={true} />
            </a>
            <a href="https://github.com/Vilos92/">
                <FontAwesomeIcon icon_class="github-square" icon_size="2x" fixed_width={true} />
            </a>
            <a href="https://angel.co/greg-linscheid">
                <FontAwesomeIcon icon_class="angellist" icon_size="2x" fixed_width={true} />
            </a>
        </div>
    );
}

export default function MainColumn(props) {
    return (
        <div className="small-10 small-centered columns">
            <div className="main-column">
                <UpperNavBar />

                <main>{props.children}</main>

                <SocialMediaBar />
            </div>
        </div>
    );

}

