import React from 'react';

const Details = ({data}) => {
    const{_id,image,candidateName,candidateEmail,collegeName,candidatePhoneNumber,subject


    }=data;
    return (
        <div>
            <figure className='p-2'><img className='rounded-lg lg:w-full ' src={image} alt="car!"/></figure>
  <div className="card-body  shadow-sm shadow-orange-500 text-white">
                            <h2 className="card-title">Name: {candidateName
}
                            </h2>
                            
                            <p className='font-medium'>College Name: {collegeName}</p>
                            <p className='font-medium'>Email: {candidateEmail}</p>
                            <p className='font-medium'>Number: {candidatePhoneNumber}</p>
                            <p className='font-medium'>Subject: {subject}</p>
                            
                        </div>
        </div>
    );
};

export default Details;