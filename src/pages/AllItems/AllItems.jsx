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

    const handleDeleteItem = (id) => {
        setItems(items.filter(item => item._id !== id))
    }

    return (
        <div className="">
            {
                items?.map(itemData => <ItemsCard key={itemData._id} itemData={itemData} onDelete={handleDeleteItem} />)
            }
        </div>
    );
};

export default AllItems;