import HowServe from '../../components/HomeComponents/HowServe';
import OurMenu from '../../components/HomeComponents/OurMenu';
import Subscribe from '../../components/HomeComponents/Subscribe';

const About = () => {
    return (
        <div>
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
            {/* menu section */}
            <div className="max-w-screen-xl mx-auto">
                <OurMenu />
            </div>
            {/* subscribe section */}
            <div className="max-w-screen-xl mx-auto">
                <Subscribe />
            </div>
        </div>
    );
};

export default About;