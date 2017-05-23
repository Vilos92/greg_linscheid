import React from 'react';

export default function FontAwesomeIcon(props) {
    const sizes = [
        'lg',
        '2x',
        '3x',
        '4x',
        '5x'
    ];

    let icon_size = '';
    if (sizes.includes(props.icon_size)) {
        icon_size = ` fa-${props.icon_size}`;
    }

    let fixed_width = '';
    if (props.fixed_width === true) {
        fixed_width = ' fa-fw';
    }

    const class_name = `fa fa-${props.icon_class}${icon_size}${fixed_width}`;

    return (
        <i className={class_name} aria-hidden="true"></i>
    );
}

