import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Details from './Details';

const MyCollege = () => {
    const { user, loading } = useContext(AuthContext);
    const [myCollege, setMyCollege] = useState([]);






    useEffect(() => {
        fetch(`https://book-my-campus-server-rabbyhasan4594.vercel.app/myCollege/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyCollege(data);

            });
    }, [user]);
    

    return (
        <div className='bg-cyan-600 py-8 pb-28'>
<div className=' text-white mt-8 text-center pb-16'>
                        <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>My College</p>
                        
                        </div>
<div className="card card-compact hover:scale-105 duration-500 lg:w-[600px]  rounded-lg shadow-md shadow-orange-500 lg:mx-auto md:mx-auto mx-7 ">
                {
                    myCollege.map(data => <Details
                        key={data._id}
                        data={data}
                    ></Details>)
                }
                </div>


        </div>
    );
};

export default MyCollege;