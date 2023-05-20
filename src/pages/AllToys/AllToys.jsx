import {  useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";
import { useState } from "react";


const AllToys = () => {
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);

    const handleSearch = () => {
        const search = document.getElementById('search').value;
        console.log(search);

        const toys = allToys.filter(toy => search.toLower() === toy.name.toLower())

        console.log(toys,"search result");
        if(toys.length===0){
            setToys(null);
        }
        else{
            setToys(toys);
        }
        
    }

    return (
        <div className=" mx-12 ">
          
            <div className="container flex items-center justify-center mb-12">
                <div className="form-control">
                    <div className="input-group w-full">
                    <input type="text" id="search" name="search" placeholder="Search Toy by Name" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    </div>
                </div>
                </div>
            {toys ? <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Supplier Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                    {
                        toys.map(toy => <ToysTable
                            key={toy._id}
                            toy={toy}
                        ></ToysTable>
                        )
                    }
                
                
            </table> :
            <p className="text-center text-3xl text-red-700">Sorry!!! The Toy is not Available.</p>}
        </div>
    );
};

export default AllToys;