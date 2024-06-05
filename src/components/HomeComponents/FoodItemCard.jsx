

const FoodItemCard = ({ itemData }) => {

    const { foodTitle, img_url, price } = itemData;
    return (
        <div className="card w-[98%] glass hover:bg-green-500 hover:text-white bg-slate-100 px-3">
            <figure className="px-10 pt-10">
                <img className="rounded-t-md h-[200px]" src={img_url} alt="car!" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-bold">{foodTitle}</h2>
                <p className="font-bold text-x">Price: ${price}</p>

            </div>
        </div>
    );
};

export default FoodItemCard;