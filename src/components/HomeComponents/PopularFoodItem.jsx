import FoodItemCard from "./FoodItemCard";

const PopularFoodItem = () => {
    return (
        <div className="my-32">
            <small className="text-[rgb(0,161,73)] font-bold">Crispy, Every Bite Taste</small>
            <h1 className="font-bold text-5xl mb-14">Popular food Items</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <FoodItemCard />
                <FoodItemCard />
                <FoodItemCard />
            </div>
        </div>
    );
};

export default PopularFoodItem;