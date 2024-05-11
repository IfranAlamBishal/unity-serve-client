import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {

    const { googleLogIn, logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [showPassword, setShowPassword] = useState(false);


    const forgotPassword = () => {
        toast("Sorry! This feature isn't available yet.");
    }

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordCheck.test(password)) {
            toast.error('Password length must be at least 6 characters containing at least an uppercase(A-Z) and a lowercase(a-z).');
            return;
        }

        logIn(email, password)
        .then(() => {
            Swal.fire({
                title: "Logged In!",
                text: "You've successfully logged in.",
                icon: "success"
            });
            e.target.reset();
            navigate(location?.state ? location.state : "/")
        }
        )
        .catch(() => {
            toast.error("Invalid email or password.");
        }
        )
    }

    

    const handleGoogleLogIn = () => {
        googleLogIn()
        .then(() => {
            Swal.fire({
                title: "Logged In!",
                text: "You've successfully logged in.",
                icon: "success"
            });
            navigate(location?.state ? location.state : "/")


        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-blue-50 p-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:ml-5">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Unlock opportunities to make a difference with just a click – <br />
                            log in and let your volunteering journey begin!</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white pb-8">
                        <form onSubmit={handleLogIn} className="card-body">
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
                                <label className="label">
                                    <Link onClick={() => forgotPassword()} className="label-text-alt text-blue-600">Forgot password?</Link>
                                </label>
                                <p className=" text-base font-medium">New here ? <Link to="/Register" className=" text-blue-600">Register now</Link> and start your volunteering journey!</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-lg text-white">Login</button>
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

export default LogIn;