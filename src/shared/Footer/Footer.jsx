import logo from '../../assets/images/logo.jpg';
import '../Navbar/Navbar.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content grid  sm:items-center md:grid-cols-4">
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
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;