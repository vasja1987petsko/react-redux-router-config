import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from "react-router-dom";
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import NotFound from './components/NotFound/NotFound.js';
import Tab from "./components/Tab/Tab.js";



class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">Bubblegum</Link>
                        </li>
                        <li>
                            <Link to="/tab/tab1">/tab/tab1</Link>
                        </li>
                        <li>
                            <Link to="/tab/tab2">/tab/tab2</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/not" components={NotFound} />
                        <Route path="/tab" component={Tab} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
