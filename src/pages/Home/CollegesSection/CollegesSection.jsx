import React, { useEffect, useState } from 'react';

import CollegeSection from '../CollegeSection/CollegeSection';

const CollegesSection = () => {

    const [colleges, setColleges] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/collegesSection")
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setColleges(result);
               
            });
    }, [])
    console.log(colleges);
    return (
       <div >
         <div className=' lg:ms-20 p-2 lg:me-20 text-white'>
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