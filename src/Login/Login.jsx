import { Link } from "react-router-dom";


const Login = () => {

    const handleLogIn = event => {
        event.preventDefault();
        form.reset();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loggedUser = { email, password };
        console.log(loggedUser);
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
                        <input type="submit" className="btn btn-primary" value="Login"/>
                        </div>
                    <p>Do not have an account? <Link to="/signIn"><span>Create an Account</span></Link></p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;