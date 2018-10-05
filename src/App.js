import React, { Component } from 'react';
import {BrowserRouter as Router,Switch} from "react-router-dom";

import Header from 'components/Header/Header.js';
import './App.scss';
import routes from '@/router';
import RouteWithSubRoutes from '@/router/route-with-sub-routes'


class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <div>
                    <Header/>
                    <Switch>
                         {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    </Switch>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
