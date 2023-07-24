import React, { useContext, useEffect, useState } from 'react';
import College from '../College/College';
import { AuthContext } from '../../Providers/AuthProvider';

const Colleges = () => {

    const [colleges, setColleges] = useState([]);
    const { loading } = useContext(AuthContext);
    useEffect(() => {
        fetch("https://book-my-campus-server.vercel.app/colleges")
            .then((res) => res.json())
            .then((result) => {
                
                setColleges(result);
               
            });
    }, [])
   
    return (
       <div className='bg-cyan-600  py-8'>
        <div className='pb-14 text-white mt-8 text-center'>
                        <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>Colleges</p>
                        
                    </div>
         <div className=' lg:ms-20 p-2  lg:me-20 text-white'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    colleges.map(data => <College
                        key={data._id}
                        data={data}
                    ></College>)
                }
            </div>
        </div>
       </div>
    );
};

export default Colleges;