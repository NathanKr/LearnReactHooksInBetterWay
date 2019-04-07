import React from 'react';
import {Switch , Route} from 'react-router-dom'
import ChatApp from './ChatApp';
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

const Root = () => {
    return (
        <Switch>
            <Route exact path="/" component={ChatApp}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
        </Switch>
    );
};

export default Root;