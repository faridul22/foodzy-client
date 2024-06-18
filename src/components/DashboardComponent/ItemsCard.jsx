import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ItemsCard = ({ itemData, onDelete }) => {

    const { _id, title, price, cooking_time, description, img_url } = itemData
    const handleDelete = async () => {
        await fetch(`https://foodzy-server.onrender.com/items/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                onDelete(_id)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your file has been deleted.",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl my-5">
            <figure>
                <img className="w-[400px] h-full" src={img_url} alt="foods" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className="font-semibold">Price: ${price}</h3>
                <h3 className="font-semibold">Cooking: {cooking_time}</h3>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-700 text-white hover:bg-green-800">
                        <Link to={`/itemDetails/${_id}`}>Details</Link>
                    </button>
                    <button className="btn bg-emerald-500 text-white hover:bg-emerald-600">
                        <Link to={`edit/${_id}`}>Edit</Link>
                    </button>
                    <button onClick={handleDelete} className="btn bg-red-700 text-white hover:bg-red-800">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;