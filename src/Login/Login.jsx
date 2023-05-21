/* eslint-disable no-unused-vars */

import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../Hooks/UseTitle";


const Login = () => {
    useTitle("Login");

    const emailRef = useRef();
    const [error, setError] = useState('');


    const { SignIn, socialLogIn, PasswordReset } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location.state?.from?.pathname || '/';

    const [ user, setUser] = useState(null);
    const [isUserIncluded, setIsUserIncluded] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        SignIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, {replace : true})
            })
            .catch(error => {
                console.log(error)
            })

        
    }

    // Google Sign In
    const googleSingIn = () => {
        socialLogIn(googleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    // password reset
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            alert('Please provide your email address to reset password')
            return;
        }
        PasswordReset(email)
        .then(() => {
            alert('Please check your email')
        
        })
        .catch(error => setError(error.message))
    }

    const handleLoginToaster = () => {
        setIsUserIncluded(true);

        if(isUserIncluded){
            toast.success('Log in Successful');
        }
        else{
            toast.error('Already Logged In')
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-pink-200 my-12">
                <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" ref={emailRef} className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required/>
                        <label className="label">
                            <Link onClick={handleResetPassword}>Forget Password?</Link>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" onClick={handleLoginToaster} className="btn btn-primary" value="Login"/>
                        <Toaster/>
                        </div>
                    <p>Do not have an account? <Link to="/signIn"><span>Create an Account</span></Link></p>
                    <p className="text-error">{error}</p>
                </form>
                <div className="divider mx-12">OR</div>
                <div onClick={googleSingIn} className="mx-12 mb-12">
                    <div className="text-2xl my-4 bg-white py-6 px-12 rounded-lg  text-green-700 text-center flex  justify-center items-center gap-4">
                        <BsGoogle/>
                        <h2>Continue With Google</h2>
                    </div>

                    <div className="text-2xl my-4 bg-white py-6 px-12 rounded-lg  text-green-700 text-center flex  justify-center items-center gap-4">
                        <BsGithub/>
                        <h2>Continue With Github</h2>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;