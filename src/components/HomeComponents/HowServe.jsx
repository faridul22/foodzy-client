import { useEffect, useState } from "react";
import HowServeCard from "./HowServeCard";


const HowServe = () => {

    const [serveData, setServeData] = useState([])

    useEffect(() => {
        fetch("https://foodzy-server.onrender.com/serve")
            .then(res => res.json())
            .then(data => {
                setServeData(data)
            })
    }, [])

    return (
        <div className="text-center max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 px-5 ">
                {
                    serveData.map(data => <HowServeCard key={data._id} data={data} />)
                }
            </div>
        </div>
    );
};

export default HowServe;