import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, NavLink} from "react-router-dom";
import Home from '@/components/Home/Home.js';
import About from 'components/About/About.js';
import NotFound from 'components/NotFound/NotFound.js';
import Tab from "components/Tab/Tab.js";
import Header from 'components/Header/Header.js';
import AuthExample from "components/Auth/Auth.js";

import './App.scss';

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/not" components={NotFound} />
                        <Route path="/tab" component={Tab} />
                        <Route path="/auth" component={AuthExample} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
