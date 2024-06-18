import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";


const OurMenu = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://foodzy-server.onrender.com/items")
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div className='my-32 mx-auto px-3'>
            <h1 className='font-bold text-5xl'>OUR MENU</h1>
            <p className='text-[rgb(0,161,73)] font-bold mb-10'> Customer best choice</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
                {
                    items?.slice(0, 3).map(item => <MenuCard key={item._id} itemData={item} />)
                }
            </div>
        </div>
    );
};

export default OurMenu;