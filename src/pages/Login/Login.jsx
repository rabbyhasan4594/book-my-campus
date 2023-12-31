import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {
    
    const { signIn, signInWithGoogle, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle()
            .then(result => {
                const googleUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    
    

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
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
                        <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>Login Here</p>
                        
                    </div>
            <div>
                <div className="hero min-h-screen  bg-cyan-600">
                    <div className="hero-content flex-col lg:flex-row lg:mt-14">
                        <div className="text-center lg:text-left lg:w-1/3 lg:me-10">

                            <img className='rounded-lg ' src="https://i.ibb.co/2h9ByVY/main.png" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email" placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password"
                                        placeholder="password" className="input input-bordered" required/>
                                    <label className="label">
                                        <div> Don't Have an Account? <Link to="/registration" className='text-white'>Register</Link></div>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-orange-500" type="submit" value="Login" />
                                </div>

                                <div className='text-red-700' > <p>{error}</p></div>
                                <div className="form-control mt-6">
                                    <button onClick={handleGoogleSignIn}  className="btn bg-transparent" type="submit" >  <FaGoogle  className='w=4/5 me-2'/> Login with Google </button>
                                </div>


                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;