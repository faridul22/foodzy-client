import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const EditProfile = () => {
    const userInfo = useLoaderData()
    const { name, email, image, age, phone } = userInfo;
    console.log(userInfo)

    const handleProfileEdit = async (event) => {
        event.preventDefault()
        const form = event.target;
        const updateName = form.name.value;
        const updateImage = form.image.value;
        const updateAge = form.age.value;
        const updatePhone = form.phone.value;

        const userData = {
            email: email,
            name: updateName,
            image: updateImage,
            age: updateAge,
            phone: updatePhone,
        }

        await fetch(`https://foodzy-server.onrender.com/user/${userInfo?.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
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
                    <h1 className="text-3xl font-bold">Edit now: <span className="font-thin">{name}</span> </h1>
                    <p className="py-6">Profile Information.</p>
                </div>
                <div className="card w-1/2 mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleProfileEdit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" defaultValue={name} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Your email" className="input input-bordered" value={email} disabled required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input name="image" type="url" placeholder="image URL" className="input input-bordered" defaultValue={image} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input name="age" type="text" placeholder="Your age" className="input input-bordered" defaultValue={age} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input name="phone" type="text" placeholder="Phone number" className="input input-bordered" defaultValue={phone} required />
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

export default EditProfile;