import React from 'react';
import {  NavLink,  Switch } from "react-router-dom";

import RouteWithSubRoutes from '@/router/route-with-sub-routes'

const Tab2 = ({routes})=> (

    <div>
        <div className="tab-list">
            <div>
                <h3>Tab2</h3>
                {/*<ul>*/}
                    {/*<li>*/}
                        {/*<NavLink to={`/tab/tab2/bus`}>/tab/tab2/bus/</NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<NavLink to={`/tab/tab2/cart`}>/tab/tab2/cart</NavLink>*/}
                    {/*</li>*/}
                    {/**/}
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

);

export default Tab2;
