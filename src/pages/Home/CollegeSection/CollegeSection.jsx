import React from 'react';

const CollegeSection = ({data}) => {
    const{collegeImage,collegeName,collegeRating,admissionDate,numberOfResearch,_id,events,researchHistory,sportsFacilities
    }=data;
    return (
        <div className='text-white'>
           <div className="card card-compact hover:scale-105 duration-500 lg:w-[330px]  rounded-lg shadow-md shadow-orange-500">
                        <figure className='p-2 '><img className='lg:h-[245px] rounded-lg' src={collegeImage} alt="College" /></figure>
                        <div className="card-body  shadow-sm shadow-orange-500">
                            <h2 className="card-title">College Name: {collegeName}
                            </h2>
                            
                            <p className='font-medium'>Admission Date: {admissionDate}</p>
                            <p className='font-medium'>Research: {numberOfResearch}</p>
                            <p className='font-medium'>Research History: {researchHistory}</p>
                            <p className='font-medium'>Sports: {sportsFacilities}</p>
                            
                            <button className="btn btn-sm btn-outline btn-warning w-2/5">details</button>
                            
                           
                        </div>
                    </div>   
        </div>
    );
};

export default CollegeSection;