import style from '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {Switch} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './header.jsx';
import MainColumn from './main-column.jsx';

const header = {
    main_text: 'Greg Linscheid',
    sub_text: 'Software Engineer'
}

function AboutContent(props) {
    const brief_0 = `My name is Greg Linscheid, and I am a Software Engineer living in San Francisco.`;
    const brief_1 = `I studied at the University of Southern California, and graduated in 
        2015 wiih a degree in Mechanical Engineering and a Minor in Computer Science.`;
    const brief_2 = `I enjoy creating web applications, from back to front. Python and JavaScript
        are the languages I use most often, and my database of choice is PostgreSQL.`;

    return (
        <div>
            <p>{brief_0}</p>
            <p>{brief_1}</p>
            <p>{brief_2}</p>
        </div>
    );
}

function ProjectsContent(props) {
    return (
        <div>
            <h2>Satellite Data Acquisition</h2>
            <p>Developed a system to acquire and process satellite imagery of the entire globe, spanning to the
            early 2000s. Required the employment of distributed systems and asynchronous design.</p>

            <h2>Data Pipeline Monitor</h2>
            <p>Created a web application used by the company to monitor the flow of data through various
            processes. The application was created using a combination of Python, reactJS, and PostgreSQL.</p>

            <h2>Autonomous Turret</h2>
            <p>Developed an autonomous turret capable of detecting a stationary or moving target, and
            launching a ball at the correct trajectory to intercept it.</p>
        </div>
    );
}

function App(props) {
    return (
        <div>
            <Header main_text={header.main_text}
                    sub_text={header.sub_text} />
            <MainColumn>{props.children}</MainColumn>
        </div>

    );
}

function AppRouter(props) {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={AboutContent} />
                    <Route path="/projects" component={ProjectsContent} />
                </Switch>
            </App>
        </BrowserRouter>
    );
}

ReactDOM.render((
        <AppRouter />
    )
    ,
    document.getElementById('react_root')
);
