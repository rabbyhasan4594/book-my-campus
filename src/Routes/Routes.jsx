import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from "../layout/Main";

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Colleges from '../pages/Colleges/Colleges';
import Admission from '../pages/Admission/Admission';
import MyCollege from '../pages/MyCollege/MyCollege';
import Home from '../pages/Home/Home/Home';
import AdmissionForm from '../pages/AdmissionForm/AdmissionForm';


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
        path: "/admissionForm/:id",
        element: <AdmissionForm></AdmissionForm>,
        loader: ({params}) => fetch(`http://localhost:5000/college/${params.id}`)   

    },
    {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,   

    },
    {

        path: '/chefRecipes/:id',
        element:  <AdmissionForm/>,
       

    }
        ]
    },

    
    
])

export default router;