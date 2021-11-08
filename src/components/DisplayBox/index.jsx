import React from 'react';
import { Button } from '../Button ';
import './style.css';

export function Display() {
    return (
        <div className="displaydiv">
            <h3>Player X</h3>
            <p className="display">Character</p>
            <img src="" alt="an image of " />
            <p className="display">Kart</p>
            <img src="" alt="an image of " />
            <p className="display">Wheels</p>
            <img src="" alt="an image of " />
            <p className="display">Glider</p>
            <img src="" alt="an imge of " />
            <Button />
        </div>
    )
};
