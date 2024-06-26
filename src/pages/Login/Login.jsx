import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("")
    const [hidden, setHidden] = useState(true)
    const { signIn, auth, user } = useContext(AuthContext)
    console.log(user)
    // -----Code for relocated-----
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    //-----------Code for Reset password----------
    const emailRef = useRef();
    const { ref, ...rest } = register('email');

    // -------from submission------
    const onSubmit = data => {

        setError("")
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User login successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError("Your email and password does not match")
                console.log(error)
            })

    };

    // ---------Reset password---------
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'Please provide Email address to reset password',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'info',
                    title: 'Check your email to reset password',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <>
            <Helmet>
                <title> Foodzy | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className='my-32'>
                    <h1 className="text-5xl text-center mb-2 uppercase font-bold">Login now!</h1>
                    <p className="text-center text-xl">If you are a existing user please fill up the form with correct information <br /> then click on Login button</p>
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <div className="text-center">
                                <img width={1000} src="https://i.ibb.co/LxW38gT/login.jpg" alt="" />
                            </div>
                        </div>
                        <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100 card-body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        {...rest}
                                        name="email"
                                        ref={(e) => {
                                            ref(e);
                                            emailRef.current = e;
                                        }}
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                    {errors.email && <span className="text-red-600">email is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={hidden ? "password" : "text"} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered relative" />
                                    <p className='absolute right-11 top-[210px]' onClick={() => setHidden(!hidden)}>
                                        {hidden ? <FaEyeSlash /> : <FaEye />}
                                    </p>
                                    {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}
                                    {error && <p className='text-red-600'>{error}</p>}
                                    <label className="label">
                                        <a onClick={handleResetPassword} className="label-text-alt link text-blue-600">Forgot password?</a>
                                    </label>
                                </div>

                                {/* TODO: Make button disabled */}
                                <div className="form-control mt-6">
                                    <input disabled={false} className="btn bg-green-600 text-white hover:bg-green-800 mx-5 normal-case" type="submit" value="Login" />
                                </div>
                                <label className="label">
                                    <p className='text-center text-gray-500-400 font-medium'><small>New here? <Link to="/register"><span className='hover:text-blue-700 text-blue-600 link'>Create a New Account</span></Link></small></p>
                                </label>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;