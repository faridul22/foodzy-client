import { useEffect, useState } from "react";
import ItemsCard from "../../components/DashboardComponent/ItemsCard";


const AllItems = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/items")
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log("form All items", data)
            })
    }, [])

    const handleDeleteFoods = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <div className="">
            {
                items?.map(itemData => <ItemsCard key={itemData.id} itemData={itemData} onDelete={handleDeleteFoods} />)
            }
        </div>
    );
};

export default AllItems;