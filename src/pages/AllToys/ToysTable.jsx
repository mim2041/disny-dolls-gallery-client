
import { Link } from "react-router-dom";


const ToysTable = ({toy}) => {
    const {_id, name, photo, price, quantity, seller, subcategory} = toy;


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
                <td><Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link></td>
            </tr>
        </tbody>
    );
};

export default ToysTable;