import { Link } from "react-router-dom";


const ToysTable = ({toy}) => {
    const {_id, name, price, quantity, seller, subcategory} = toy;

    return (
        <tbody>
            {/* row 1 */}
            <tr>
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