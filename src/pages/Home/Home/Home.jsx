import React from 'react';
import Colleges from '../../Colleges/Colleges';
import CollegesSection from '../CollegesSection/CollegesSection';
import Search from '../Search/Search';

const Home = () => {
    return (
        <div className='bg-cyan-600'>
            <Search></Search>
           <CollegesSection></CollegesSection>
        </div>
    );
};

export default Home;