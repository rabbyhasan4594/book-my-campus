import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AdmissionForm = () => {
    const {id} = useParams();
    const College = useLoaderData();
    console.log(College.collegeName);
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {


        fetch("http://localhost:5000/admission", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            });



    }


    return (
        <div>

        <div className=' bg-cyan-600 lg:p-14 p-5'>
            <div className='bg-slate-500 lg:w-1/3 lg:mx-96 py-5 rounded-lg'>
                <h1 className='text-center text-2xl mb-4 text-white'>Admission</h1>
                <form className='grid grid-cols-1 text-center' onSubmit={handleSubmit(onSubmit)}>

                    <div className=''>
                        <div className='mb-2'>
                            <h1>Picture URL</h1>
                            <input
                                className="text-input px-10 py-2 rounded-lg"
                                {...register("image", { required: true })}
                                placeholder="image link"
                                type="url"
                                defaultValue=""
                            />
                        </div>
                        <div className='mb-2'>
                                <h1>Seller Email</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    value={user?.email}
                                    {...register("sellerEmail", { required: true })}
                                    placeholder="your email"
                                    type="email"
                                />
                            </div>
                        <div className='mb-2'>
                            <h1>College Name </h1>
                            
                            <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    value={College.collegeName}
                                    {...register("collegeName", { required: true })}
                                    placeholder="College Name"
                                    type="name"
                                />
                        </div>
                        <div className='mb-2'>
                            <h1>Candidate Name</h1>
                            <input
                                className="text-input px-10 py-2 rounded-lg"
                                {...register("candidateName", { required: true })}
                                placeholder="Candidate Name"
                                defaultValue=""
                            />
                        </div>
                        <div className='mb-2'>
                            <h1>Subject</h1>
                            <input
                                className="text-input px-10 py-2 rounded-lg"
                                {...register("subject", { required: true })}
                                placeholder="Subject"
                                defaultValue=""
                            />
                        </div>
                        <div className='mb-2'>
                            <h1>Candidate Email</h1>
                            <input
                                className="text-input px-10 py-2 rounded-lg"
                                {...register("candidateEmail", { required: true })}
                                placeholder="Candidate Email"
                                defaultValue=""
                            />
                        </div>
                        <div className='mb-2'>
                            <h1>Candidate Phone Number</h1>
                            <input
                                className="text-input px-10 py-2 rounded-lg"
                                {...register("candidatePhoneNumber", { required: true })}
                                placeholder="Candidate Phone number"
                                defaultValue=""
                            />
                        </div>
                        <div className='mb-2'>
                            <h1>Address</h1>
                            <input
                                className="text-input px-10 py-2 rounded-lg"
                                {...register("address", { required: true })}
                                placeholder="Address"
                                defaultValue=""
                            />
                        </div>

                        <div className='pt-2'>
                            <input className="btn text-white bg-orange-600" value="Submit" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
    );
};

export default AdmissionForm;