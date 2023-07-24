import React, { useEffect, useState } from 'react';
import CollegesName from './CollegesName';

const Admission = () => {
    const [colleges, setColleges] = useState([]);
    
    useEffect(() => {
        fetch("https://book-my-campus-server.vercel.app/colleges")
            .then((res) => res.json())
            .then((result) => {
               
                setColleges(result);
               
            });
    }, [])
    return (
        <div className='bg-cyan-600  py-8'>
            <div  className='pt-6 shadow-violet-900'>
        <div className=' mt-5 lg:ms-20 m-2 lg:me-20 text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full '>
                <div className='pb-4 text-white mt-8 text-center'>
                    <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>Colleges Name</p>
                    <p className='py-6'>Click in Name for more details</p>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
               
                
            {
                    colleges.map(data => <CollegesName
                        key={data._id}
                        data={data}
                    ></CollegesName>)
                }
                
                

                
                

            </div>
        </div>
    </div>
        </div>
    );
};

export default Admission;