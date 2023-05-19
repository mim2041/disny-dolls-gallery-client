import {  useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";


const AllToys = () => {
    const allToys = useLoaderData();


    return (
        <div className=" mx-12 ">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Supplier Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                    {
                        allToys.map(toy => <ToysTable
                            key={toy._id}
                            toy={toy}
                        ></ToysTable>
                        )
                    }
                
                
            </table>
        </div>
    );
};

export default AllToys;