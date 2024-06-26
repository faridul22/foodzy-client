import { useState } from "react";
import MenuCard from "../../components/HomeComponents/MenuCard";
import { useLoaderData } from "react-router-dom";


const AllFoods = () => {
    const items = useLoaderData();
    // const [items, setItems] = useState([]);
    // console.log(items)

    // -----------search start----------
    const [searchItem, setSearchItem] = useState(items);
    const [searchText, setSearchText] = useState("");
    console.log("searchItem", searchItem, "searchText", searchText)

    const handleSearch = () => {
        fetch(`https://foodzy-server.onrender.com/getToyNameByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchItem(data);
            });
    };
    // -----------search end------------

    // useEffect(() => {
    //     fetch("https://foodzy-server.onrender.com/items")
    //         .then(res => res.json())
    //         .then(data => {
    //             setItems(data)
    //             console.log("form All items", data)
    //         })
    // }, [])
    return (
        <div>
            <div className="bg-orange-50 py-10">
                <div className="text-center mt-10">
                    <h1 className="text-2xl font-bold">All Our Recipes</h1>
                    <p className="">Explore our diverse collection of recipes for every occasion</p>
                </div>
                {/* -----------------------Search start------------------- */}
                <div className="mb-3 mt-7">
                    <div className="join flex justify-center align-middle items-center">
                        <div className="form-control w-[700px] sm:w-[350px] ml-10">
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search by name" className="input input-bordered" />{""}
                        </div>
                        <button className="btn bg-green-600 text-white hover:bg-green-800 join-item normal-case" disabled={searchText == ""} onClick={handleSearch}>Search</button>
                    </div>
                </div>
                {/* --------------End---------------- */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-3/4 mx-auto'>
                    {
                        searchItem?.map(item => <MenuCard key={item._id} itemData={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoods;