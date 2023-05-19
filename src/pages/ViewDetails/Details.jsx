import { useLoaderData } from "react-router-dom";


const Details = () => {
    const toy = useLoaderData();

    const {_id, name, photo, price, quantity, seller, email, rating, subcategory, description} = toy;

    console.log(toy);
    return (
        <div className="bg-pink-100  py-12 px-12 lg:px-36">
            <h1 className="title text-4xl text-pink-600 mb-8 text-center">Details for {name} {subcategory} Toy</h1>
            <div className="card py-12  lg:px-36 lg:gap-24 lg:card-side bg-pink-200 shadow-xl ">
                <figure><img src={photo} alt="toy" className=""/></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-pink-600">{name}</h2>
                    <h3 className="text-2xl">Seller: {seller}</h3>
                    <p>Seller Email: {email}</p>
                    <ul className="list-disc px-8 py-4">
                        <li>Price: ${price}</li>
                        <li>Rating: {rating}</li>
                        <li>Available Quantity: {quantity}</li>
                    </ul>
                    <p>Description: {description}</p>
                    
                </div>
                </div>
        </div>
    );
};

export default Details;