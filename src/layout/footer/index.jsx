import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export const Footer = () => {
    return (
        <>
            <footer>
                <nav>
                    <NavLink activeClassName="currentpage" exact to="/">Homepage</NavLink>
                    <NavLink activeClassName="currentpage" to="/randomise">Randomiser</NavLink>
                </nav>
                <p>Made by George Hickey - 2021</p>
            </footer>
        </>
    )
};