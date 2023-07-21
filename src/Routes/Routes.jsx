import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from "../layout/Main";

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Colleges from '../pages/Colleges/Colleges';
import Admission from '../pages/Admission/Admission';
import MyCollege from '../pages/MyCollege/MyCollege';
import Home from '../pages/Home/Home/Home';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
        path:"/login",
        element:<Login></Login>,
    },
    
    {
        path: "/registration",
        element: <Register></Register>,   

    },
    {
        path: "/colleges",
        element: <Colleges></Colleges>,   

    },
    {
        path: "/admission",
        element: <Admission></Admission>,   

    },
    {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,   

    },
        ]
    },
    
    
])

export default router;