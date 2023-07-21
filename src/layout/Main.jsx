import React from 'react';

import { Outlet } from 'react-router-dom';
import NavigationBar from '../Share/NavigationBar/NavigationBar';
import Search from '../pages/Home/Search/Search';



const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Search></Search>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;