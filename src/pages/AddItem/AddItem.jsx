import Swal from "sweetalert2";


const AddItem = () => {

    const handleAdd = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const cooking_time = form.cooking_time.value;
        const img_url = form.img_url.value;
        const description = form.description.value;

        const newData = { title, price, cooking_time, description, img_url }
        console.log(newData)

        await fetch("https://foodzy-server.onrender.com/items", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your file has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
                form.reset();
            })
    }


    return (
        <div className=" bg-base-200">
            <div className="py-16">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Add A Delicious Food</h1>
                    <p className="py-6">Information.</p>
                </div>
                <div className="card w-[75%] mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleAdd} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name="title" type="text" placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name="price" type="text" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Cooking Time</span>
                            </label>
                            <input name="cooking_time" type="text" placeholder="Cooking time: minutes" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input name="img_url" type="url" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" cols="10" rows="60" placeholder="Description" className="input input-bordered h-[150px] p-5" required id="" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-500 text-white hover:bg-emerald-600">Add Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;