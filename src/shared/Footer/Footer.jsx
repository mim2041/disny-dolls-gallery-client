import logo from '../../assets/images/logo.jpg';
import '../Navbar/Navbar.css';
import { BsWhatsapp, BsFacebook, BsTwitter, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-pink-200 my-12'>
            <footer className="footer p-10 text-base-content grid  sm:items-center md:grid-cols-4">
                <div>
                    
                    <img src={logo} width="15%" className='rounded-lg' alt="" />
                    <p className='title text-pink-600'>Fairy Tales Ltd.</p>
                    <p>Providing exclusive toys since 2000</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Contact Us</span> 
                    <p className="flex gap-2 items-center link link-hover"><BsFillTelephoneFill/> +880 13453-56434</p>
                    <p className="flex gap-2 items-center link link-hover"><BsWhatsapp/> +880 13453-56434</p>
                    <p className="flex gap-2 items-center link link-hover"><BsTwitter/> Twitter</p>
                    <p className="flex gap-2 items-center link link-hover"><BsFacebook/> FaceBook</p>
                    
                </div> 
                <div>
                    <span className="footer-title">Copyright</span> 
                    <a className="link link-hover">Copyright &copy; 2023</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">All right reserved</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;