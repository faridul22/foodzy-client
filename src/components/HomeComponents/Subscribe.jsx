

const Subscribe = () => {
    return (
        <div className='my-32 sm:px-10'>

            <div className="card h-80 container md:flex mx-auto lg:card-side bg-[#52C1BA] shadow-xl">
                <figure><img width={400} className='hidden lg:block' src="https://i.ibb.co/Yfh8Czt/newsletters-1.png" alt="Album" /></figure>
                <div className="card-body">
                    <div className='text-center '>
                        <h2 className="lg:text-7xl sm:text-3xl font-medium mb-3 text-gray-800">Subscribe</h2>
                        <span className='text-2xl text-gray-700 mt-5'>Subscribe to keep up with fresh news and existing updates every moment.</span>
                    </div>
                    <div className="card-actions my-auto justify-center">
                        <div className="form-control">
                            <label className="label">

                            </label>

                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                <button className="btn bg-sky-600 text-white hover:bg-sky-800 border-0 join-item">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;