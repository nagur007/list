import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home';
import List from './components/list';

class App extends Component {

    render() {
        return (
            <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/list" exact component={List} />
            </Switch >
        );
    }
}

export default App;