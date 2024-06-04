// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditPage = () => {
    const item = useLoaderData();

    const { _id, title, price, cooking_time, description, img_url } = item;

    const handleEdit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const newTitle = form.title.value;
        const newPrice = form.price.value;
        const newCookingTime = form.cooking_time.value;
        const newImg_url = form.img_url.value;
        const newDescription = form.description.value;

        const editedData = { title: newTitle, price: newPrice, cooking_time: newCookingTime, description: newDescription, img_url: newImg_url }

        console.log(editedData)

        await fetch(`http://localhost:5000/items/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(editedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your data successfully updated.",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    return (
        <div className=" min-h-screen bg-base-200">
            <div className="py-16">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Edit now: <span className="font-thin">{item.title}</span></h1>
                    <p className="py-6">Information.</p>
                </div>
                <div className="card w-1/2 mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleEdit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name="title" type="text" placeholder="Title" className="input input-bordered" defaultValue={title} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name="price" type="text" placeholder="Price" className="input input-bordered" defaultValue={price} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Cooking Time</span>
                            </label>
                            <input name="cooking_time" type="text" placeholder="Cooking time" className="input input-bordered" defaultValue={cooking_time} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input name="img_url" type="url" placeholder="image URL" className="input input-bordered" defaultValue={img_url} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" cols="30" rows="10" placeholder="Description" className="input input-bordered h-[150px] p-5" defaultValue={description} required id="" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-500 text-white hover:bg-emerald-600">Edit Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPage;