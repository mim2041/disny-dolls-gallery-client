import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";


const Login = () => {

    const {user, SignIn, handleToaster} = useContext(AuthContext);
    const [isUserIncluded, setIsUserIncluded] = useState(false);

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

            })
            .catch(error => {
                console.log(error)
            })
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
    
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" onClick={handleLoginToaster} className="btn btn-primary" value="Login"/>
                        <Toaster/>
                        </div>
                    <p>Do not have an account? <Link to="/signIn"><span>Create an Account</span></Link></p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;