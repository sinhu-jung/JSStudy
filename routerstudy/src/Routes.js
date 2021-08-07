import React, { Component } from 'react';
import { Route } from "react-router-dom";
import SignIn from './view/SignIn';
import Home from './view/Home';

export default class Routes extends Component {
    render() {
        return (
            <main>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/Home" component={Home} />
            </main>
        );
    }
}