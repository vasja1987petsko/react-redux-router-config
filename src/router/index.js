import Home from 'components/Home/Home.js';
import About from 'components/About/About.js';

import Tab from "components/Tab/Tab.js";
import Tab1 from  'components/Tab/Tab1/Tab1.js';
import Tab2 from  'components/Tab/Tab2/Tab2.js';
import Bus from  'components/Tab/Tab2/Bus.js';
import Cart from  'components/Tab/Tab2/Cart.js';

import AuthExample from "components/Auth/Auth.js";
import FormValidation  from 'components/FormValidation/FormValidation.js';
import ReactValidation  from 'components/ReactValidation/ReactValidation.js';
import NotFound from 'components/NotFound/NotFound.js';

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/form-validation",
        component: FormValidation
    },
    {
        path: "/react-validation",
        component: ReactValidation
    },
    {
        path: "/tab",
        component: Tab,
        routes: [
            {
                path: "/tab/tab1",
                name:'link tab1',
                component: Tab1
            },
            {
                path: "/tab/tab2",
                name:'link tab2',
                component: Tab2,
                routes:[
                    {
                        path: "/tab/tab2/bus",
                        name:'link bus',
                        component: Bus
                    },
                    {
                        path: "/tab/tab2/cart",
                        name:'link cart',
                        component: Cart
                    },
                ]

            }
        ]
    },
    {
        path: "/auth",
        component: AuthExample,
        routes: [
            // {
            //     path: "/auth/tab1",
            //     component: Tab1
            // },
            // {
            //     path: "/tab/tab2",
            //     component: Tab2
            // }
        ]
    },
    {
        path: "*",
        component: NotFound
    },
];

export default routes;