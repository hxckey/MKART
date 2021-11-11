import React, { useState, useEffect } from 'react';
import { Button } from '../Button ';
import { useDispatch } from 'react-redux';
import './style.css';

export function Display() {

    const [ character, setCharacter ] = useState('')
    const [ kart, setKart ] = useState('')
    const [ wheels, setWheels ] = useState('')
    const [ glider, setGlider] = useState('')
    const dispatch = useDispatch()



    return (
        <div className="displaydiv">
            <h3 id="playerNumber">Player X</h3>
            <p className="display" id="charHeading">Character</p>
            <img src="" alt="an image of " id="charImg" />
            <p className="display" id="kartHeading">Kart</p>
            <img src="" alt="an image of " id="kartImg"/>
            <p className="display" id="wheelHeading">Wheels</p>
            <img src="" alt="an image of " id="wheelImg"/>
            <p className="display" id="gliderHeading">Glider</p>
            <img src="" alt="an imge of " id="gliderImg"/>
            <Button />
        </div>
    )
};
