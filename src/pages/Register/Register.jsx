import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../Shared/SocialLogin";





const Register = () => {
    const { createUser, updateUser, error, setError } = useContext(AuthContext)
    const [hidden, setHidden] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        setError("")
        if (data.password !== data.confirmPassword) {
            setError("Password and Confirm password does not match")
            return
        }

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

                updateUser(data.name, data.photoURL)
                    .then(() => {

                        const savedUser = { name: data.name, email: data.email, image: data.photoURL }
                        fetch('https://foodzy-server.onrender.com/user', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })

                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from, { replace: true });
                                }
                            })

                    })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <>
            <Helmet>
                <title>Pro Drawing | Register</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="my-32">
                    <h1 className="text-5xl text-center uppercase mb-2 font-bold">Register now</h1>
                    <p className="text-center lg:text-xl w-[75%] mx-auto">If you are a new user then fill up the form with correct information <br /> then click on Register button</p>
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <div className="text-center">
                                <img className="lg:w-full w-[75%]" src="https://i.ibb.co/W3vSFBz/register.jpg" alt="" />
                            </div>
                        </div>
                        <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100 card-body">
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">email is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={hidden ? "password" : "text"} {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" placeholder="password" className="input input-bordered relative" />
                                    <p className='absolute right-11 top-[21rem]' onClick={() => setHidden(!hidden)}>
                                        {hidden ? <FaEyeSlash /> : <FaEye />}
                                    </p>
                                    {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">password is must be 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">password must have one lowercase, one uppercase, one digits and one special character</p>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm password</span>
                                    </label>
                                    <input type={hidden ? "password" : "text"} {...register("confirmPassword", {
                                        required: true,

                                    })} name="confirmPassword" placeholder="confirm Password" className="input input-bordered" />

                                    {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Confirm password is required</p>}
                                    {<p className="text-red-600">{error}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-green-600 text-white hover:bg-green-800 mx-5 normal-case" type="submit" value="Register Now" />
                                </div>
                                <label className="label">
                                    <p className='text-center text-gray-500 font-medium'><small>Already have an Account? <Link to="/login"><span className="hover:text-blue-600 text-blue-500">Login Now</span> </Link></small></p>
                                </label>
                            </form>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;