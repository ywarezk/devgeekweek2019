import React from 'react';

export default function Dashboard(props) {
    return (
        <h1>Im in the dashboard {props.match.params.email}</h1>
    );
}