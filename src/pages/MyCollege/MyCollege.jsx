import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Details from './Details';

const MyCollege = () => {
    const { user, loading } = useContext(AuthContext);
    const [myCollege, setMyCollege] = useState([]);






    useEffect(() => {
        fetch(`http://localhost:5000/myCollege/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyCollege(data);

            });
    }, [user]);
    console.log(myCollege);

    return (
        <div className='bg-cyan-600 py-5'>

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