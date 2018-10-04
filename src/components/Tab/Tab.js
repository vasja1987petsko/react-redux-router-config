import React from 'react';
import { Route, Link } from "react-router-dom";
import Tab1 from  './tab1/tab1.js';
import Tab2 from  './tab2/tab2.js';


const Tab = ({match})=> (

    <div>
        <div className="tab-list">
            <div>
                <h3>tab menu</h3>
                <ul>
                    <li>
                        <Link to={`${match.url}/tab1`}>tab1</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/tab2`}>tab2</Link>
                    </li>
                </ul>
            </div>

            <div>
                <Route exact path={`${match.url}/tab1`} component={Tab1} />
                <Route exact path={`${match.url}/tab2`} component={Tab2} />
            </div>
        </div>
    </div>

)

export default Tab;
