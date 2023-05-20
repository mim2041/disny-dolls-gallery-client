// import { AiFillStar } from "react-icons/ai";
import Swal from 'sweetalert2'

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from '../../Hooks/UseTitle';

const AddToys = () => {
    useTitle("Add A Toy");
    const {user} = useContext(AuthContext);
    console.log(user)

    const handleAddToys = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;

        const newToy = {name, photo, price, rating, seller, email, quantity, subcategory, description};
        console.log(newToy);

        fetch('http://localhost:5000/toys',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Yes'
                      })
                }
            })
        
        
        
    }

    return (
        <div>
            <div className="mt-4 bg-pink-200 p-24">
            <h2 className="text-4xl text-pink-600 text-center font-bold mb-8 title">Add A Toy</h2>
            <form onSubmit={handleAddToys}>
                <div className="flex gap-8">
                    <div className="form-control w-1/2 mb-8">
                        <label className="label">
                            <span className="label-text font-bold">Doll Name</span>
                        </label>
                        <label className="w-full">
                            <input type="text" placeholder="Enter Doll Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control mb-8 w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <label className="w-full">
                            <input type="text" placeholder="Enter Doll Photo URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="flex gap-8">
                    <div className="form-control w-1/2 mb-8">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="w-full">
                            <input type="text" placeholder="Enter Doll Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control mb-8 w-1/2 rounded-lg">
                    <label className="label">
                        <span className="label-text font-bold">Rating</span>
                    </label>
                    <div className="input-group">
                        <select className="select select-bordered  w-full" name="rating">
                        <option defaultValue="5 star" selected>5 star</option>
                        <option>4 star</option>
                        <option>3 star</option>
                        <option>2 star</option>
                        <option>1 star</option>
                        </select>
                    </div>
                </div>
                </div>
                
                <div className="flex gap-8">
                    <div className="form-control w-1/2 mb-8">
                        <label className="label">
                            <span className="label-text font-bold">Seller Name</span>
                        </label>
                        <label className="w-full">
                            <input type="text" defaultValue={user.displayName} name="seller" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control mb-8 w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Seller Email</span>
                        </label>
                        <label className="w-full">
                            <input type="email" placeholder="Enter Seller Email" defaultValue={user.email} name="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="flex gap-8">
                    <div className="form-control w-1/2 mb-8">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <label className="w-full">
                            <input type="number" placeholder="Enter Doll Quantity" name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control mb-8 w-1/2">
                    <label className="label">
                        <span className="label-text font-bold">SubCategory</span>
                    </label>
                    <div className="input-group">
                        <select className="select select-bordered w-full" name="subcategory">
                        <option selected>Disney Dolls</option>
                        <option>Frozen Dolls</option>
                        <option>Animation Characters</option>
                        </select>
                    </div>
                </div>
                </div>
                
                <div className="form-control mb-8 w-full">
                    <label className="label">
                            <span className="label-text font-bold">Description</span>
                    </label>
                    <textarea className="textarea textarea-primary" name="description" placeholder="Description"></textarea>
                </div>
                
                <input className="btn btn-block bg-pink-800" type="submit" value="Add"/>
            </form>
            </div>
        </div>
    );
};

export default AddToys;