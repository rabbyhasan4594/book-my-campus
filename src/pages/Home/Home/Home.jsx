import React from 'react';

import CollegesSection from '../CollegesSection/CollegesSection';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';

const Home = () => {
    return (
        <div className='bg-cyan-600'>
            <Search></Search>
           <CollegesSection></CollegesSection>
           <Gallery></Gallery>
           <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;