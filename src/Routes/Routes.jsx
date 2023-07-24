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
import CollegeDetails from '../pages/CollegeDetails/CollegeDetails';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
       
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage />,
            },
            {
        path:"/login",
        element:<Login></Login>,
        errorElement: <ErrorPage />,
    },
    
    {
        path: "/registration",
        element: <Register></Register>,
        errorElement: <ErrorPage />,  

    },
    {
        path: "/colleges",
        element: <Colleges></Colleges>,
        errorElement: <ErrorPage />, 

    },
    {
        path: "/admission",
        element: <Admission></Admission>,
        errorElement: <ErrorPage /> 

    },
    {
        path: "/details/:id",
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        errorElement: <ErrorPage />,
        loader: ({params}) => fetch(`https://book-my-campus-server-rabbyhasan4594.vercel.app/details/${params.id}`)   

    },
    {
        path: "/admissionForm/:id",
        element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>,
        errorElement: <ErrorPage />,
        loader: ({params}) => fetch(`https://book-my-campus-server-rabbyhasan4594.vercel.app/college/${params.id}`)   

    },
    {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,   

    },
    
    
       ]
    },

    
    
])

export default router;