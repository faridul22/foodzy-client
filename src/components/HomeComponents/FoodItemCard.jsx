

const FoodItemCard = () => {
    return (
        <div className="card w-80 glass hover:bg-green-500 hover:text-white bg-slate-100">
            <figure className="px-10 pt-10">
                <img className="rounded-t-md" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[rgb(0,161,73)] text-white hover:bg-green-700">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItemCard;