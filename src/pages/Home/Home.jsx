import Banner from "../../components/HomeComponents/Banner";
import PopularFoodItem from "../../components/HomeComponents/PopularFoodItem";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-screen-xl mx-auto">
                <PopularFoodItem />
            </div>
        </div>
    );
};

export default Home;