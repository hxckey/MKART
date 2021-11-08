import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function Footer() {
    return (
        <>

            <footer>
                <p>
                    made by George Hickey | 2021
                </p>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName='selected-link'>
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='randomise' activeClassName='selected-link'>
                            randomiser
                        </NavLink>
                    </li>
                </ul>
            </footer>

        </>
    )
}
