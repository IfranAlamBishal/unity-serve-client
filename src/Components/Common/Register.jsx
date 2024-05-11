import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Providers/AuthProvider'
import Swal from "sweetalert2";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { googleLogIn, createUser, updateName, updatePhoto } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name, photo, email, password)

        const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordCheck.test(password)) {
            toast.error('Password length must be at least 6 characters containing at least an uppercase(A-Z) and a lowercase(a-z).');
            return;
        }

        createUser(email, password)
        .then(() => {
            toast("Registered Successfully!!");
            updateName(name);
            updatePhoto(photo);
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            toast.error(error.massage);
        })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(() => {
                Swal.fire({
                    title: "Registered!",
                    text: "You've successfully registered.",
                    icon: "success"
                });
                navigate('/')

            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-blue-50 p-5">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-right lg:ml-5">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Join our community of passionate volunteers and start making a difference today!!</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white pb-8">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered bg-gray-100" name="name" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="url" placeholder="image url" className="input input-bordered bg-gray-100" name="photo" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-gray-100" name="email" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered bg-gray-100" name="password" required />
                                <div onClick={() => setShowPassword(!showPassword)} className=" text-lg text-blue-600 flex justify-end p-1">
                                    {
                                        showPassword ?
                                            <Link>Hide</Link>
                                            :
                                            <Link>Show</Link>
                                    }
                                </div>
                                <p className=" text-base font-medium mt-3">Already have account? <Link to="/LogIn" className=" text-blue-600 ">Log in now</Link> to access exclusive volunteer opportunities!</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-lg text-white">Register</button>
                            </div>
                        </form>
                        <div className="form-control px-8">
                            <button onClick={handleGoogleLogIn} className="btn btn-primary text-lg text-white">Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;