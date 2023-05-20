import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import useTitle from "../Hooks/UseTitle";

const SignUp = () => {
    useTitle("SignUp")

    const { createUser} = useContext(AuthContext);
    const [isUserIncluded, setIsUserIncluded] = useState(false);
    const [error, setError] = useState('');


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        if(email === '' || password === ''){
            setError('Cannot submit empty email and password fields')
            return;
        }

        else if(password.length < 6){
            setError('The password is less than 6 characters')
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();

            }) 
            .catch(error => {
                console.log(error)
            })
    }

    const handleToaster = () => {
        setIsUserIncluded(true);

        if(isUserIncluded){
            toast.success('User Added Successfully');
        }
        else{
            toast.error('User already added')
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full mt-12 max-w-lg shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body bg-pink-200 rounded-lg">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Provide Your Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Provide Your Email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Provide your photo URL" name="photo" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>

                        <div className="form-control mt-6">
                        <input type="submit" onClick={handleToaster} className="btn btn-primary" value="Sign Up" />
                        </div>
                        <Toaster/>
                    <p>Already have an account? <Link to="/login"><span>Login</span></Link></p>

                    <p className="text-danger">{error}</p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;