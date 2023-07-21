import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from "../layout/Main";
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
        ]
    },
    {
        path:"/login",
        element:<Login></Login>,
    },
    
    {
        path: "/registration",
        element: <Register></Register>,
        

    }
    
])

export default router;