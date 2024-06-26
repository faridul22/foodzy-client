import { Link } from "react-router-dom";


const MenuCard = ({ itemData }) => {
    const { _id, title, price, cooking_time, description, img_url } = itemData
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <img width={500} src={img_url} alt="itemss" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="flex justify-between my-5">
                    <h3 className="font-semibold text-yellow-700">Price: ${price}</h3>
                    <h3 className="font-semibold text-yellow-700">Cooking: {cooking_time}</h3>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-600 text-white hover:bg-green-800">
                        <Link to={`/itemDetails/${_id}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default MenuCard;