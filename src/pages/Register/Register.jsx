import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../Providers/AuthProvider';



const Register = () => {
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { user, createUser, setProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        setSuccess('');
        setError('');

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setProfile(name, photo, createUser)
                if (password.length < 6) {
                    setError('Please add at least 6 characters in your password')
                    return;

                }
                setSuccess('User has been created successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }


    return (
        <div>
            <div className='pb-10 text-white mt-10 text-center'>
                        <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>Register Here</p>
                        
                    </div>
            <div className="hero min-h-screen bg-cyan-600 ">
                <div className="hero-content flex-col lg:flex-row lg:mt-14">
                    <div className="text-center lg:text-left lg:w-1/2">

                        <img className='rounded-lg ' src="https://i.ibb.co/JjXTNgc/register-01.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-gray-400 lg:me-20">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    name="photo"
                                    placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <div>
                                        Already Have an Account? <Link to="/login" className='text-white'>Login</Link>
                                    </div>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-500" type="submit" value="Register" />
                            </div>
                            <div className='text-green-700'><p>{success}</p></div>
                        <div className='  text-red-700'><p>{error}</p></div>
                        </form>
                        
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Register;