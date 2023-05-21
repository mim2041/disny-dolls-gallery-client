import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import '../Navbar/Navbar.css';
import { BsWhatsapp, BsFacebook, BsTwitter, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-pink-200 text-center mt-12'>
            <footer className="footer p-10 text-base-content grid ps-24  sm:items-center md:grid-cols-4">
                <div className='text-center'>
                    
                    <img src={logo} width="15%" className='rounded-lg' alt="" />
                    <p className='title text-pink-600'>Fairy Tales Ltd.</p>
                    <p>Providing exclusive toys since 2020</p>
                    <p>Jahangirnagar University, Savar, Dhaka</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <Link className="link link-hover">Cognitive Development</Link> 
                    <Link className="link link-hover">Creativity and Imagination</Link> 
                    <Link className="link link-hover">Educational Content</Link> 
                    <Link className="link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="footer-title">Contact Us</span> 
                    <p className="flex gap-2 items-center link link-hover"><BsFillTelephoneFill/> +880 13453-56434</p>
                    <p className="flex gap-2 items-center link link-hover"><BsWhatsapp/> +880 13453-56434</p>
                    <p className="flex gap-2 items-center link link-hover"><BsTwitter/> Twitter</p>
                    <p className="flex gap-2 items-center link link-hover"><BsFacebook/> Facebook</p>
                    
                </div> 
                <div>
                    <span className="footer-title">Copyright</span> 
                    <Link className="link link-hover">Copyright &copy; 2023</Link> 
                    <Link className="link link-hover">Privacy policy</Link> 
                    <Link className="link link-hover">All right reserved</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;