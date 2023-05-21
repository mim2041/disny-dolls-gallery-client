import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const SubCategoryCard = (toy) => {
    const {_id, name, photo, price, rating} = toy.toy;
    console.log(toy)
    
    // AOS package
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div data-aos="flip-left" className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 ">
        <div className="w-100 ">
            <img src={photo} alt="toy" className=" w-96 h-96 mb-8"/>
        </div>
        <div className="px-5 pb-5">
           
            <h5  className="title text-xl font-semibold tracking-tight text-pink-600 text-left dark:text-white">
                {name}
            </h5> 
            <p className="text-left">Price: {price}</p>  
            <p className="text-left mb-8">Ratings: {rating}</p>    
            
        
            <div className="card-actions justify-end">
            <Link to={`details/${_id}`}><button className="btn btn-primary  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">View Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default SubCategoryCard;