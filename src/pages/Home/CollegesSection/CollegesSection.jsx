import React, { useEffect, useState } from 'react';

import CollegeSection from '../CollegeSection/CollegeSection';

const CollegesSection = () => {

    const [colleges, setColleges] = useState([]);
    
    useEffect(() => {
        fetch("https://book-my-campus-server.vercel.app/collegesSection")
            .then((res) => res.json())
            .then((result) => {
               
                setColleges(result);
               
            });
    }, [])
    
    return (
       <div >
         <div className=' lg:ms-20 p-2 mt-6 lg:me-20 text-white'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    colleges.map(data => <CollegeSection
                        key={data._id}
                        data={data}
                    ></CollegeSection>)
                }
            </div>
        </div>
       </div>
    );
};

export default CollegesSection;