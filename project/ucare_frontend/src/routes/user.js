import React from 'react';
import { Route, Switch } from "react-router-dom";
import SignIn from '../view/SignIn';
import Home from '../view/Home';
import SignUp from '../view/SignUp';
import Setting from '../view/Setting';
import NewPatient from '../view/NewPatient';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';   

export default function Routes() {
    return (
        <Switch>
            <PublicRoute exact path="/" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <PrivateRoute exact path="/Home" component={Home} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/patient" component={NewPatient} />
            <PublicRoute exact component={SignIn} />
        </Switch>
    );
}