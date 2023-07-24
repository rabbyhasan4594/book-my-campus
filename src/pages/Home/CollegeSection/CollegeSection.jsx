import React from 'react';
import { Link } from 'react-router-dom';

const CollegeSection = ({data}) => {
    const{collegeImage,collegeName,collegeRating,admissionDate,numberOfResearch,_id,events,researchHistory,sportsFacilities
    }=data;
    return (
        <div className='text-white'>
           <div className="card card-compact hover:scale-105 duration-500 lg:w-[330px]  rounded-lg shadow-md shadow-white">
                        <figure className='p-2 '><img className='lg:h-[245px] rounded-lg' src={collegeImage} alt="College" /></figure>
                        <div className="card-body  shadow-sm shadow-white">
                            <h2 className="card-title">College Name: {collegeName}
                            </h2>
                            
                            <p className='font-medium'>Admission Date: {admissionDate}</p>
                            <p className='font-medium'>Research: {numberOfResearch}</p>
                            <p className='font-medium'>Research History: {researchHistory}</p>
                            <p className='font-medium'>Sports: {sportsFacilities}</p>
                            
                            <Link to={`/details/${_id}`}>
                           <button className="btn btn-sm btn-outline btn-warning w-2/5">details</button>
                           </Link>
                            
                           
                        </div>
                    </div>   
        </div>
    );
};

export default CollegeSection;