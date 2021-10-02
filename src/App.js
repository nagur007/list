import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import List from './components/List';
import Item from './components/Item';
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import Fordemo from './components/Fordemo'
import Pagenotfound from './components/Pagenotfound'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path="/List" component={List} />
                        {/* <Route exact path="/Item" component={Item} /> */}
                        <Route exact path="/Registration" component = {Registration} />
                        <Route exact path="/Login" component = {Login} />
                        <Route exact path="/Fordemo" component = {Fordemo} />
                        <Route component = {Pagenotfound} /> 
                    </Switch>
                </>
            </Router>


        );
    }
}

export default App;