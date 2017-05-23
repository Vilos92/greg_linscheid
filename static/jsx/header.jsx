import React from 'react';

export default function Header(props) {
    return (
        <div className="header-container">
            <h1>{props.main_text}</h1>
            <h2>{props.sub_text}</h2>
        </div>
    );
}

