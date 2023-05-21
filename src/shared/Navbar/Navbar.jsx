import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import './Navbar.css';
import logo from '../../assets/images/logo.jpg'


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
    }

    return (
        <div className="navbar-container lg:px-12 py-12 mb-12 bg-pink-200">
            <div className="navbar ">
                <div className="navbar-start  ">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  text-[#00ff26]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/allToys">All Toys</Link></li>
                        <li><Link to="/myToys">My Toys</Link></li>
                        <li><Link to="/addToys">Add A Toy</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                    </div>
                    <div className="flex justify-center items-center lg:flex-col">
                        <img src={logo}  className='w-14 h-14 lg:w-24 rounded-lg ' alt="" />
                        <h2 className="title text-pink-500 text-2xl mt-2">Fairy Tales</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/allToys">All Toys</Link></li>
                        {
                            user? <><li><Link to="/myToys">My Toys</Link></li>
                            <li><Link to="/addToys">Add A Toy</Link></li>
                            </> : ''
                        }
                        
                        <li><Link to="/blog">Blog</Link></li>
                        
                    </ul>
                </div>
                <div>
                    {
                        user ?
                        <>
                        <img title={user.displayName ? user.displayName : null} className="userImg" src={user.photoURL ? user.photoURL : null} />
                        <button  className='btn btn-primary' onClick={handleLogOut}>LogOut</button>
                        </>
                        :
                        <Link to="/login"><button className="btn">Login</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;