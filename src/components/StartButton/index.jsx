import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function StartButton() {
    return (
        <div id="startdiv">

        <Link to='/randomise' id="getstarted">
            Get Started!
        </Link>
        </div>
    )
};