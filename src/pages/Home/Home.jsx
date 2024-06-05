import Banner from "../../components/HomeComponents/Banner";
import HowServe from "../../components/HomeComponents/HowServe";
import OurMenu from "../../components/HomeComponents/OurMenu";
import PopularFoodItem from "../../components/HomeComponents/PopularFoodItem";
import SaveMoney from "../../components/HomeComponents/SaveMoney";
import Subscribe from "../../components/HomeComponents/Subscribe";

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <Banner />

            {/* Popular section */}
            <div className="max-w-screen-xl mx-auto">
                <PopularFoodItem />
            </div>

            {/* saveMoney section */}
            <SaveMoney />

            {/* menu section */}
            <div className="max-w-screen-xl mx-auto">
                <OurMenu />
            </div>

            {/* serve section */}
            <div>
                <div className="text-center mb-5">
                    <h1 className='font-bold text-4xl'>HOW WE SERVE YOU?</h1>
                    <small className='text-[rgb(0,161,73)] font-bold  mb-10'> FOOD PROCESSING</small>
                </div>
                <div className="bg-yellow-50 py-10">
                    <HowServe />
                </div>
            </div>

            {/* subscribe section */}
            <div className="max-w-screen-xl mx-auto">
                <Subscribe />
            </div>
        </div>
    );
};

export default Home;