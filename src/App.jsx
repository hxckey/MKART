import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  { Homepage } from './Pages/home/Homepage';
import { Randomiser } from './Pages/randomise/Randomise';

export default function App() {
    return (
        <>
        {/* Define header, but not in use for all pages */}
        {/* <Header /> */}

        <Switch>
            <Route exact path='/'>
                <Homepage />
            </Route>
            
            <Route path='/randomise'>
                <Randomiser />
            </Route>

            {/* Add this page at a later time */}
            {/* <Route path='/tournaments'>
                <Tournament />
            </Route> */}

            <Route>
                <h1>This page does not exist, kindly leave.</h1>
            </Route>
        </Switch>

        </>
    )
}