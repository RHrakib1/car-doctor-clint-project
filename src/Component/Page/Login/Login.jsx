import React, { useContext } from 'react';
import pic from '../../../../src/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { contextProvider } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginAccount } = useContext(contextProvider)
    const hendleFrom = e => {
        e.preventDefault()
        const base = e.target
        const email = base.email.value
        const password = base.password.value
        const users = { email, password }
        console.log(users);

        loginAccount(email, password)
            .then(result => {
                console.log(result);
               
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row gap-36 ">
                <div className=" ">
                    <img src={pic} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={hendleFrom} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="confirm password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value='Login' />
                        </div>
                        <p className='text-center'>New to car doctor <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;