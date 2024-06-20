

const Contact = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto my-12 items-center">
                <div>
                    <div className="mb-14">
                        <div className="text-center">
                            <h1 className="text-4xl mt-10 font-bold mb-2">Contact Us</h1>
                            <p>Feel free to drop us a message, and we will get back to you as soon as possible</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 bg-[rgb(86,161,213)] p-20 rounded-xl text-white">
                        <div className="">
                            <h1 className="text-2xl font-bold">Get In Touch</h1>
                            <p>Your email address will not be published.<br /> Required fields are marked</p>
                            <img className="sm:image-full" src="https://i.ibb.co/T8Kcswr/contact.png" alt="" />
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <form >
                                    <h1 className="text-xl font-semibold">Fill Up The Form</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input required type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Message</span>
                                        </label>
                                        <textarea name="message" cols="10" rows="60" placeholder="Your Message" className="input input-bordered h-[150px] p-5" required id="" />
                                    </div>

                                    <div className="form-control mt-6">
                                        <input className="btn bg-green-600 text-white hover:bg-green-800 border-0" type="submit" value="Get In Touch" />
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;