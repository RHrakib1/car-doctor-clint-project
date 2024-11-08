import React, { useContext } from 'react';
import pic from '../../../../src/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { contextProvider } from '../../Provider/AuthProvider';

const SignUp = () => {
    const { signupaccount } = useContext(contextProvider)
    const hendleSign = e => {
        e.preventDefault()
        const base = e.target
        const email = base.email.value
        const password = base.password.value
        const users = { email, password }
        console.log(users);

        signupaccount(email, password)
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
                    <form onSubmit={hendleSign} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Signup</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value='Signup' />
                        </div>
                        <p className='text-center'>Have an account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;