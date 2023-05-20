import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyToysTable = ({toys, handleDelete }) => {
    const {_id, name, photo, price, seller, quantity, subcategory} = toys;
    
    
    
    return (
            <tbody>
            {/* row 1 */}
            <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    
                </div>
                </td>
                <td>{name}</td>
                <td>{seller}</td>
                <td>{subcategory}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>
                    <div className="flex gap-8 text-2xl">
                        <Link to={`/update/${_id}`}><button><BiEdit/></button></Link>
                        <button onClick={() => handleDelete(_id)}><AiOutlineDelete/></button>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default MyToysTable;