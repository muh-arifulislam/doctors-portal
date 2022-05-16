import React, { useRef, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, user, loading1, error1] = useSignInWithGoogle(auth);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // redirect after login 
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setTimeout(() => {
                    setLoading(false);
                    navigate(from, { replace: true });
                }, 1000);
            })
            .catch(error => {
                setError(error);
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            })
    }
    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
        navigate(from, { replace: true });
    }
    return (
        <>
            {
                loading ? <Loading></Loading> : <div className="card lg:w-96 w-[90%] mx-auto lg:my-[150px] my-[50px] shadow-lg">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" className="input input-bordered w-full max-w-xs" required />
                                <label className="label mt-[10px]">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={passwordRef} type="text" className="input input-bordered w-full max-w-xs" required />
                                <div>
                                    <p><small>forgotten password?</small></p>
                                    {/* display error  */}
                                    {
                                        error && <p className='text-red-700'>{error.message}</p>
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col mt-[18px]'>
                                <button className='btn bg-accent text-white'>LOGIN</button>
                            </div>
                        </form>
                        <p className='text-center'>New to Doctors Portal ? <Link className='text-primary' to='/signUp'>Create new account</Link></p>
                        {/* devider  */}
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className='flex flex-col'>
                            <button onClick={() => handleGoogleSignIn()} className='btn bg-white border-2'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Login;