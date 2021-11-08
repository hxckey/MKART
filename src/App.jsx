import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  { Homepage } from './Pages/Home/Homepage';
import { Randomiser } from './Pages/Randomise/Randomise';

export default function App() {
    return (
        <>

        <Switch>
            <Route exact path='/'>
                <Homepage />
            </Route>
            
            <Route path='/randomise'>
                <Randomiser />
            </Route>

            <Route>
                <h1>This page does not exist, kindly leave.</h1>
            </Route>
        </Switch>

        </>
    )
};