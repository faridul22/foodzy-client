import { useEffect, useState } from "react";
import MenuCard from "../../components/HomeComponents/MenuCard";

const AllFoods = () => {
    const [items, setItems] = useState([]);
    console.log(items)

    // -----------search start----------
    const [searchItem, setSearchItem] = useState(items);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        fetch(`https://foodzy-server-wd6a.vercel.app/getToyNameByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchItem(data);
            });
    };
    // -----------search end------------

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
            {/* -----------------------Search start------------------- */}
            <div className="navbar container mx-auto bg-orange-50 rounded-md mb-3 mt-7">
                <div className="w-3/4 mx-auto">
                    <div className="form-control w-[700px] ml-10">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search by name" className="input input-bordered" />{""}
                    </div>
                    <button className="btn bg-orange-400 hover:bg-orange-600 hover:text-white border-0 ml-10 text-white" disabled={searchText == ""} onClick={handleSearch}>Search</button>
                </div>
            </div>
            {/* --------------End---------------- */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-3/4 mx-auto'>
                {
                    searchItem == [] ? searchItem?.map(item => <MenuCard key={item._id} itemData={item} />) : items?.map(item => <MenuCard key={item._id} itemData={item} />)
                }
            </div>
        </div>
    );
};

export default AllFoods;