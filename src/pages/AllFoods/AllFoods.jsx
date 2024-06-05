import { useEffect, useState } from "react";
import MenuCard from "../../components/HomeComponents/MenuCard";

const AllFoods = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://foodzy-server-wd6a.vercel.app/items")
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log("form All items", data)
            })
    }, [])
    return (
        <div>
            <div className="text-center mt-32 mb-10">
                <h1 className="text-2xl font-bold">All Our Recipes</h1>
                <p className="">Explore our diverse collection of recipes for every occasion</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-3/4 mx-auto'>
                {
                    items?.map(item => <MenuCard key={item._id} itemData={item} />)
                }
            </div>
        </div>
    );
};

export default AllFoods;