import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import MyToysTable from "./MyToysTable";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/UseTitle";


const MyToys = () => {
    useTitle("My Toys")
    const {user} = useContext(AuthContext);
    // console.log(user.email)

    const [myToys, setMyToys] = useState([]);
    const [isAssending, setIsAssending] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyToys(data);
            })
    }, [user.email]);

    

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

                fetch(`http://localhost:5000/toys/${id}`, {
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
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Supplier Name</th>
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