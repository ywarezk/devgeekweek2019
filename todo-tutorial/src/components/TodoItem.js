import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem({task}) {
    // const task = this.props.task

    return (
        <li>
            <h1>{task.title}</h1>
            <h3>{task.description}</h3>
        </li>
    );
}

TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}