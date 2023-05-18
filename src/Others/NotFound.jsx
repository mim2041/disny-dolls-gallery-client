import { Link } from 'react-router-dom';
import notFound from '../assets/images/NotFound.jpg'

const NotFound = () => {
    return (
        <div className='bg-pink-200 mt-0'>
            <div className=' py-12 text-2xl font-bold text-sky-500 p-2 text-center'>
                <Link to='/'>Go Back Home</Link>
            </div>            
            <div className="img-container">
                <img src={notFound} width="40%" className='mx-auto' alt="" />
            </div>
        </div>
    );
};

export default NotFound;