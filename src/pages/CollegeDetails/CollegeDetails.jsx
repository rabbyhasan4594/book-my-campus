import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const College = useLoaderData();
    console.log(College);
    const{collegeImage,collegeName,collegeRating,admissionDate,numberOfResearch,_id,events,researchHistory,sportsFacilities}=College;
    return (
        <div className='bg-cyan-600 py-8'>
            <div className="card card-compact hover:scale-105 duration-500 lg:w-[600px]  rounded-lg shadow-md shadow-orange-500 lg:mx-auto md:mx-auto mx-7 ">
  <figure className='p-2'><img className='rounded-lg lg:w-full ' src={collegeImage} alt="car!"/></figure>
  <div className="card-body  shadow-sm shadow-orange-500 text-white">
                            <h2 className="card-title">College Name: {collegeName}
                            </h2>
                            
                            <p className='font-medium'>Admission Date: {admissionDate}</p>
                            <p className='font-medium'>Research: {numberOfResearch}</p>
                            <p className='font-medium'>Research History: {researchHistory}</p>
                            <p className='font-medium'>Sports: {sportsFacilities}</p>
                            <p className='font-medium'>Events: {events}</p>
                            <p className='font-medium'>Rating: {collegeRating}</p>
                        </div>
</div>
           
            
        </div>
    );
};

export default CollegeDetails;