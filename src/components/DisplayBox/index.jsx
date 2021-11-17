import React, { useState, useEffect } from 'react';
import { Button } from '../Button ';
import { useDispatch } from 'react-redux';
import './style.css';

// double check characters
const characters = ['Mario', 'Luigi', 'Peach', 'Daisy', 'Rosalina', 'Bowser', 'Baby Peach', 'Wario', 'Donkey Kong', 'Toad', 'Koopa Troopa', 'Yoshi', 'Bowser Jr.', 'Waluigi', 'Baby Mario', 'Baby Luigi', 'Toadette', 'Chain Chomp', 'King Boo', 'Isabelle', 'Villager', 'Pink Gold Peach', 'Morton', 'Lemmy', 'Cat Peach', 'Metal Mario', 'Link', 'Dry Bones', 'Inkling Boy', 'Inkling Girl', 'Link', 'Tanooki Mario' ]
const wheelsArray = ['Standard', 'Monster', 'Roller', 'Slim', 'Slick', 'Metal', 'Button', 'Off-Road', 'Sponge', 'Wooden', 'Cushion', 'Funky Monster', 'Azure Roller', 'Crimson Slim', 'Cyber Slick', 'Retro Off-Road', 'Gold', 'GLA Wheels', 'Triforce Wheels', 'Leaf Tires', 'Ancient Tires']
const karts = ['Standard Kart', 'Pipe Frame', 'Mach 8', 'Steel Driver', 'Cat Cruiser', 'Circuit Special', 'Tri-Speeder', 'Badwagon', 'Prancer', 'Buggybud', 'Landship', 'Bounder', 'Sports Coupe', 'Gold Kart', 'GLA', 'W 25 Silver Arrow', '300 SL Roadster', 'Blue Falcon', 'Tanooki Kart', 'B Dasher', 'Streetle', 'P-Wing', 'Koopa-Clown']
const gliders = ['Super Glider', 'CLoud Glider', 'Wario Wing', 'Waddle Wing', 'Peach Parasol', 'Parachute', 'Parafoil', 'Flower Glider', 'Bowser Kite', 'Plane Glider', 'MKTV Parafoil', 'Gold Glider', 'Hylian Kite']

export function Display() {

    const [ character, setCharacter ] = useState('')
    const [ kart, setKart ] = useState('')
    const [ wheels, setWheels ] = useState('')
    const [ glider, setGlider] = useState('')

    const handleClick = () => {
        let randKart = karts[Math.floor(Math.random()*karts.length)];
        let randChar = characters[Math.floor(Math.random()*characters.length)];
        let randWheels = wheelsArray[Math.floor(Math.random()*wheelsArray.length)];
        let randGlider = gliders[Math.floor(Math.random()*gliders.length)]
        setKart(randKart);
        setCharacter(randChar);
        setWheels(randWheels);
        setGlider(randGlider);
    }

    return (
        <div className="displaydiv">
            <h3 id="playerNumber">Player X</h3>
            <p className="display" id="charHeading">{character}</p>
            {/* <img src="" alt="an image of " id="charImg" /> */}
            <p className="display" id="kartHeading">{kart}</p>
            {/* <img src="" alt="an image of " id="kartImg"/> */}
            <p className="display" id="wheelHeading">{wheels}</p>
            {/* <img src="" alt="an image of " id="wheelImg"/> */}
            <p className="display" id="gliderHeading">{glider}</p>
            {/* <img src="" alt="an imge of " id="gliderImg"/> */}
            <button onClick={handleClick}>Randomise!</button>
            {/* <Button onClick={handleClick}/> */}
        </div>
    )
};
