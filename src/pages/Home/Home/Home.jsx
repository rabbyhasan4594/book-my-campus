import React from 'react';

import CollegesSection from '../CollegesSection/CollegesSection';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='bg-cyan-600'>
            <Search></Search>
           <CollegesSection></CollegesSection>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;