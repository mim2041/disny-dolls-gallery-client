import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import MyToysTable from "./MyToysTable";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email)

    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data);
            })
    }, []);

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
                        ></MyToysTable>
                        )
                    }
                
                
            </table>
        </div>
    );
};

export default MyToys;