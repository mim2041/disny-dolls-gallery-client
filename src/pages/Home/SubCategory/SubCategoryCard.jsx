import { Link } from "react-router-dom";


const SubCategoryCard = (toy) => {
    const {name, photo, price, rating} = toy.toy;
    console.log(toy)
    // const {name, photo, price, rating} = frozen;
    // const {name, photo, price, rating} = animation;

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <div className="w-100 ">
            <img src={photo} alt="toy" className=" w-96 h-96 "/>
        </div>
        <div className="px-5 pb-5">
            <Link to='/' className="my-2 flex items-center justify-between">
            <h5  className="text-xl font-semibold tracking-tight text-blue-700 text-center dark:text-white">
                {name}
            </h5>            
            </Link>
        
            <div className="card-actions justify-end">
            <Link to=''><button className="btn btn-primary  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">View Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default SubCategoryCard;