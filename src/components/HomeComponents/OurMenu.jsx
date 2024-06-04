

const OurMenu = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='mt-14 text-center text-2xl font-semibold'>OUR MENU</h1>
            <p className='text-center text-xl mb-8'>Here our food items menu. Customer best choice</p>
            <div className='grid grid-cols-3 justify-center gap-4 '>
                {/* {
                    foods.slice(0, 6).map(food => <FoodCard key={food.id} food={food} />)
                } */}
            </div>
        </div>
    );
};

export default OurMenu;