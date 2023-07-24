import React from 'react';
import { Link } from 'react-router-dom';

const CollegesName = ({data}) => {
    const{collegeImage,collegeName,_id}=data;
    console.log(_id);
    return (
        <div>
             <Link cl to={`/admissionForm/${_id}`}><div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'>
                <p className='mt-4 ms-[-20px]'>{collegeName}</p>
                </div></Link>
        </div>
    );
};

export default CollegesName;