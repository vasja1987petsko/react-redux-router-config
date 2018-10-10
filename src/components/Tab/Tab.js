import React from 'react';
import {  NavLink, Switch} from "react-router-dom";

import RouteWithSubRoutes from '@/router/route-with-sub-routes'
import  './Tab.scss';

const  Tab = ({routes})=> (

    <div>
        <div className="tab-list">
            <div>
                <h3>Tab</h3>
                {/*<ul>*/}
                    {/*<li>*/}
                        {/*<NavLink to={`/tab/tab1`}>tab1</NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<NavLink to={`/tab/tab2`}>tab2</NavLink>*/}
                    {/*</li>*/}
                {/*</ul>*/}
                <ul>
                    {routes.map((route, i) => {
                        return (
                            <li key={i}>
                                <NavLink to={route.path}>{route.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <Switch>
                     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </Switch>
            </div>
        </div>
    </div>

)

export default Tab;
