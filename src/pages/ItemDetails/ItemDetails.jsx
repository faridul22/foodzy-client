import { useLoaderData } from "react-router-dom";


const ItemDetails = () => {

    const item = useLoaderData();
    const { id, title, price, cooking_time, description, img_url } = item

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto my-9">
            <figure>
                <img className="w-[700px] h-full" src={img_url} alt="foods" />
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-2xl mb-2 text-center">{title}</h2>
                <p><span className="font-semibold">About {title}</span>: {description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline font-semibold">Food ID: {id}</div>
                    <div className="badge badge-outline font-semibold">Price: ${price}</div>
                    <div className="badge badge-outline font-semibold">Cooking: {cooking_time}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;