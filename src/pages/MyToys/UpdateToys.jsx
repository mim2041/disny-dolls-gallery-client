// import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/UseTitle";


const UpdateToys = () => {
    useTitle("Update A Toy")
    const myToy = useLoaderData();

    const navigate = useNavigate()
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {price, quantity, description};
        console.log(updatedToy);


        fetch(`https://disney-dolls-gallery-server.vercel.app/toys/${myToy._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!!',
                        text: 'Your Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myToys')
                }
            })
    }

    return (
        <div>
            <div className="mt-4 bg-pink-200 p-24">
            <h2 className="text-4xl text-pink-600 text-center font-bold mb-8 title">Update A Toy </h2>
            <form onSubmit={handleUpdate}>
                
                
            <div className="flex gap-8">
                <div className="form-control w-1/2 mb-8">
                    <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                    <label className="w-full">
                        <input type="text"  name="price" defaultValue={myToy.price} className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control w-1/2 mb-8">
                    <label className="label">
                        <span className="label-text font-bold">Quantity</span>
                    </label>
                    <label className="w-full">
                        <input type="number"  defaultValue={myToy.quantity} name="quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
                   
                
            <div className="form-control mb-8 w-full">
                <label className="label">
                        <span className="label-text font-bold">Description</span>
                </label>
                <textarea defaultValue={myToy.description}  className="textarea textarea-primary" name="description" ></textarea>
            </div>
                
                <input className="btn btn-block bg-pink-800" type="submit"  value="Update"/>
            </form>
            </div>
        </div>
    );
};

export default UpdateToys;