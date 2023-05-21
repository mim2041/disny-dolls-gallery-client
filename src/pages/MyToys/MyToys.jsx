import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import MyToysTable from "./MyToysTable";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { BsSortDown , BsSortUp} from "react-icons/bs";
import useTitle from "../../Hooks/UseTitle";
const MyToys = () => {

    useTitle("My Toys");
    const {user} = useContext(AuthContext);
    // console.log(user.email)

    const [myToys, setMyToys] = useState([]);
    const [sortValue,setSortValue]=useState(1)
    // const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://disney-dolls-gallery-server.vercel.app/mytoys/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyToys(data);
            })
    }, [user.email]);

    
    const handleSort = (value)=>{

        console.log(value)
        // setSortValue(value);
        fetch(`https://disney-dolls-gallery-server.vercel.app/sortmytoys?email=${user.email}&sortValue=${value}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
                setSortValue(value);
            })
    }

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://disney-dolls-gallery-server.vercel.app/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                              )
                              const remaining = myToys.filter(toys => toys._id !== id)
                              setMyToys(remaining);
                        }
                    })
            }

        })
    }

    return (
        <div>
            <div className="flex w-96 mx-auto mb-12">
            {
                sortValue === 1 && <button onClick={()=>handleSort(-1)} className="btn btn-sm">Descending Sort<BsSortDown className="text-2xl mx-2"></BsSortDown></button>
                
            }
            {
                sortValue === -1 && <button onClick={()=>handleSort(1)} className="btn btn-sm mx-2">Ascending Sort<BsSortUp className="text-2xl"></BsSortUp></button>
                
            }
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                    {
                        myToys.map(toys => <MyToysTable
                            key={toys._id}
                            toys={toys}
                            handleDelete={handleDelete}
                        ></MyToysTable>
                        )
                    }
                
                
            </table>
        </div>
    );
};

export default MyToys;