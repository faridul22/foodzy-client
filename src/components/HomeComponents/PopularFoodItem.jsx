import { useEffect, useState } from "react";
import FoodItemCard from "./FoodItemCard";

const PopularFoodItem = () => {

    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        fetch("https://foodzy-server-wd6a.vercel.app/popularItems")
            .then(res => res.json())
            .then(data => {
                setPopularItems(data)

            })
    }, [])
    return (
        <div className="my-32">
            <small className="text-[rgb(0,161,73)] font-bold">Crispy, Every Bite Taste</small>
            <h1 className="font-bold text-5xl mb-10">Popular food Items</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-3">
                {
                    popularItems.map(item => <FoodItemCard key={item._id} itemData={item} />)
                }
            </div>
        </div>
    );
};

export default PopularFoodItem;